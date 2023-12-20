FROM node:alpine as development


# Create app directory
WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .



CMD ["npm", "run", "dev"]