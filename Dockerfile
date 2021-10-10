FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE $NODE_DOCKER_PORT

CMD ["npm", "start"]