# Use an official Node.js runtime as the base image
FROM node:17-alpine


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Expose the port your application will run on
EXPOSE 5054

# Specify the command to run your application
CMD ["node", "src/index.js"]  
