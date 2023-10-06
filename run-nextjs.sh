#!/bin/bash

pm2 stop all

npm install --f

npm run build

pm2 start npm --name "your-app-name" -- start

pm2 save
