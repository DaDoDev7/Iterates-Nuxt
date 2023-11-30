# Use an official Node.js runtime as a parent image
# Dockerfile
FROM node:18

# Create destination directory
RUN mkdir -p /homepage
WORKDIR /homepage

# Update and install dependencies
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y git

# Copy the app, note .dockerignore
COPY /build .

EXPOSE 3000

# Set environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=

# Start the application using Yarn
CMD [ "node", "./server/index.mjs"]  
