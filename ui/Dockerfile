FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm instal --legacy-peer-deps
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"