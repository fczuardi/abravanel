
## Install

1. ```npm install```
2. ```npm install -g claudia```

## Configure

1. copy ```config-sample.js``` to ```config.js``` and edit it

## Read the docs

1. ```npm run info```

## Test locally (express.js)

1. edit ```src/express.js```
2. ```npm start```

## Deploy the first time (aws)

1. edit ```src/aws.js```
2. ```npm run build:npm```
3. ```npm run create:aws```

## Update deployed api

1. edit ```src/aws.js```
- ```npm run publish:aws```
