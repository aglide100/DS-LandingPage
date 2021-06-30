export Directory=/home/ubuntu/DS-LandingPage/ui

#!/bin/bash

echo "====> install npm package"
cd $Directory
npm install

echo "====> build npm package"
cd $Directory
npm run build

echo "====> start next js app"
cd $Directory
npm run start-http