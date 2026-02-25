# Use Node.js 22 (Alpine) as base image
FROM node:22-alpine

# Install Java (required for Firebase Firestore Emulator)
RUN apk add --no-cache openjdk11-jre bash

# Install Firebase tools globally
RUN npm install -g firebase-tools

# Set working directory
WORKDIR /app

# Copy package files separately for better caching
COPY functions/package*.json ./functions/

# Install dependencies inside functions directory
WORKDIR /app/functions
RUN npm ci

# Go back to app root to copy other files
WORKDIR /app
COPY firebase.json .
COPY firestore.rules .
COPY firestore.indexes.json .
COPY storage.rules .
# Copy functions source code
COPY functions/ ./functions/

# Expose Emulator Ports
# 4000: Emulator Suite UI
# 5001: Cloud Functions
# 8080: Firestore
# 9000: Realtime Database (if used)
# 9099: Auth
# 9199: Storage
EXPOSE 4000 5001 8080 9000 9099 9199

# Set the project ID (required for emulators)
ENV GCLOUD_PROJECT=naucsevic-local

# Command to start emulators
# Listen on 0.0.0.0 so they are accessible from outside the container
CMD ["firebase", "emulators:start", "--only", "functions,firestore,storage", "--host", "0.0.0.0"]
