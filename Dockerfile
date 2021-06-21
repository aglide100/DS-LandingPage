FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY /ui . 

RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "dev"