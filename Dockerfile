FROM node:10

# Set the working directory to /client
WORKDIR /api

# copy package.json into the container at /client
COPY package*.json /api/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /client
COPY . /api/

# Install vim
CMD apt-get update && apt-get install -y vim

# Make port 3000 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "start"]