export Directory=/home/ubuntu/DS-LandingPage/ui

#!/bin/bash

echo "====> install npm package"
cs $Directory
npm install --legacy-peer-deps

echo "====> build npm package"
cd $Directory
npm run build

echo "====> start next js app"
cd $Directory
npm run start-http