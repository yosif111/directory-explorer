FROM node:12-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY ./src ./

EXPOSE 4000
CMD [ "node", "server.js" ]