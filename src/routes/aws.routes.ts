import { Router } from 'express';
import { AWSService } from '../services/aws.service';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';

export const awsRouter = Router();
const awsService = AWSService.getInstance();

awsRouter.post('/validate-credentials', async (req, res, next) => {
  try {
    const { region = 'us-east-1' } = req.body;
    
    const credentials = await awsService.validateCredentials(region);
    logger.info('AWS credentials validated successfully');
    
    res.json({
      status: 'success',
      data: credentials
    });
  } catch (error) {
    next(error);
  }
});