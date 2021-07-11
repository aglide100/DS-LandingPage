export DockerService=/home/ubuntu/DS-LandingPage

#!/bin/bash

echo "====> Service Close Docker-compose"
cd $DockerService
docker-compose down --remove-orphans

echo "====> Remove docker system"
cd $DockerService
yes | docker system prune -a

echo "====> Build Docker-Compose"
cd $DockerService
docker-compose build

echo "====> Starting Docker-Compse daemon"
cd $DockerService
docker-compose up -d
