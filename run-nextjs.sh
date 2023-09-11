#!/bin/bash

# Navigate to your Next.js project directory
npm install

npm run build

pm2 start npm --name "your-app-name" -- start

pm2 save

pm2 startup