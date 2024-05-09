# Use the official Node.js base image with the desired version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package*.json ./

# Copy the .env
# COPY .env ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js default port
EXPOSE 1337

# Set the command to run when the container starts
CMD ["NODE_ENV=production", "npm", "start"]
