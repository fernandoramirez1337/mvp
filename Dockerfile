# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./app/package*.json ./
RUN npm install

# Clear node_modules if it exists (optional)
RUN rm -rf node_modules

# Install dependencies again
RUN npm install

# Install Bootstrap
RUN npm install bootstrap

# Copy the rest of the code
COPY ./app .

# Expose port 3000 and start the app
EXPOSE 3000
CMD ["sh", "-c", "trap 'exit' SIGTERM; npm start"]