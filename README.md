# MCP Server

Open-source Mission Control Panel (MCP) server for AWS - A powerful, region-independent backend service for AWS operations.

## Features

- Region-independent AWS operations
- Credential validation and management
- Secure API endpoints
- Comprehensive error handling
- TypeScript support
- Built with security and scalability in mind

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS credentials (Access Key ID and Secret Access Key) or IAM role

## Installation

1. Clone the repository:
```bash
git clone https://github.com/groovyBugify/mcp-server.git
cd mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

## Development

Start the development server:
```bash
npm run dev
```

## Build

Compile the TypeScript code:
```bash
npm run build
```

## Production

Start the production server:
```bash
npm start
```

## API Endpoints

### Validate AWS Credentials

```http
POST /api/aws/validate-credentials
Content-Type: application/json

{
  "region": "us-east-1" // optional, defaults to us-east-1
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.