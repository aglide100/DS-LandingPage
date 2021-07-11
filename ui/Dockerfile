FROM node:lts-buster-slim

RUN apt-get update && apt-get install -y g++ 
#  libgtk-3-dev libfreetype6-dev libx11-dev libxinerama-dev libxrandr-dev libxcursor-dev mesa-common-dev libasound2-dev freeglut3-dev libxcomposite-dev libcurl4-openssl-dev

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"