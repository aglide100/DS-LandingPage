FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install --legacy-peer-deps --unsafe-perm
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
