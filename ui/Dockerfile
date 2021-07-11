FROM ubuntu:20.04

RUN apt-get update && apt-get install nodejs

RUN apt-get install npm

#FROM node:16.4-buster-slim

# RUN apt-get update && apt-get install -y g++ libgtk-3-dev libfreetype6-dev libx11-dev libxinerama-dev libxrandr-dev libxcursor-dev mesa-common-dev libasound2-dev freeglut3-dev libxcomposite-dev libcurl4-openssl-dev

# RUN apt-get install -y gcc && apt-get install -y build-essential

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .


# RUN tar -xf vips-8.11.2.tar.gz && cd vips-8.11.2

# RUN ./configuration

# RUN make && make install

# RUN cd .. 

RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
