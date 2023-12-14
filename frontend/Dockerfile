FROM node:alpine as development


WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .


CMD ["npm", "run", "dev"]