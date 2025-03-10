import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import { AppError } from '../middleware/errorHandler';

export class AWSService {
  private static instance: AWSService;
  private constructor() {}

  static getInstance(): AWSService {
    if (!AWSService.instance) {
      AWSService.instance = new AWSService();
    }
    return AWSService.instance;
  }

  async getSTSClient(region: string = 'us-east-1') {
    try {
      return new STSClient({
        region,
        credentials: fromNodeProviderChain()
      });
    } catch (error) {
      throw new AppError(500, 'Failed to initialize AWS STS client');
    }
  }

  async validateCredentials(region: string = 'us-east-1') {
    try {
      const client = await this.getSTSClient(region);
      const command = new GetCallerIdentityCommand({});
      const response = await client.send(command);
      
      return {
        Account: response.Account,
        Arn: response.Arn,
        UserId: response.UserId
      };
    } catch (error: any) {
      throw new AppError(
        401,
        error.message || 'Invalid AWS credentials'
      );
    }
  }
}