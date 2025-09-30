# NaucSeVic Docker Setup

This project has been configured to run with Docker for easy deployment and development.

## Prerequisites

- Docker Desktop installed on your system
- Git (if cloning the repository)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Production build
npm run docker:compose

# Development build with hot reload
npm run docker:compose-dev
```

### Option 2: Using npm scripts

```bash
# Build and run production
npm run docker:build
npm run docker:run

# Build and run development
npm run docker:build-dev
npm run docker:run-dev
```

### Option 3: Using Docker commands directly

```bash
# Production
docker build -t nauc-se-vic .
docker run -p 3000:80 nauc-se-vic

# Development
docker build -f Dockerfile.dev -t nauc-se-vic:dev .
docker run -p 5173:5173 -v ${PWD}:/app -v /app/node_modules nauc-se-vic:dev
```

## Access URLs

- **Production**: http://localhost:3000
- **Development**: http://localhost:5173

## Docker Configuration

### Production Build

- Multi-stage build using Node.js Alpine and Nginx
- Optimized for production with static file serving
- Includes gzip compression and caching headers
- Size-optimized with minimal attack surface

### Development Build

- Hot reload support with volume mounting
- All development dependencies included
- Real-time code changes reflected in container

## Available Scripts

| Script                       | Description                             |
| ---------------------------- | --------------------------------------- |
| `npm run docker:build`       | Build production Docker image           |
| `npm run docker:build-dev`   | Build development Docker image          |
| `npm run docker:run`         | Run production container                |
| `npm run docker:run-dev`     | Run development container               |
| `npm run docker:compose`     | Start with Docker Compose (production)  |
| `npm run docker:compose-dev` | Start with Docker Compose (development) |
| `npm run docker:stop`        | Stop Docker Compose services            |

## Environment Variables

Create a `.env` file in the project root for environment-specific configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Troubleshooting

### Port Already in Use

If you see "port already in use" errors, you can:

1. Stop existing containers: `docker-compose down`
2. Change ports in `docker-compose.yml`
3. Kill processes using the port

### Build Failures

- Ensure Docker Desktop is running
- Check available disk space
- Clear Docker cache: `docker system prune`

### Development Hot Reload Not Working

- Ensure volume mounting is working
- Check file permissions
- Restart the development container

## Docker Images

The setup creates two optimized images:

- **Production**: `nauc-se-vic:latest` (~15MB with Nginx Alpine)
- **Development**: `nauc-se-vic:dev` (~200MB with Node.js and dev dependencies)

## Security Considerations

- Production image runs with non-root user
- Security headers configured in Nginx
- No sensitive data in Docker images
- Use `.dockerignore` to exclude unnecessary files
