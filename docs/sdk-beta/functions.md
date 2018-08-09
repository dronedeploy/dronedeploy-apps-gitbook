# Functions

**This functionality is in beta - please learn more** **[here](beta-signup.md).**

DroneDeploy Functions is your tool for writing, running, and deploying backend code functionality.

DroneDeploy Functions uses serverless architecture running on the DroneDeploy Platform. You can write Node.js code to build out custom backend functionality and hook into things like Datastore and Triggers seamlessly. No need to worry about hosting since this is all handled by DroneDeploy.

## Runtime

DroneDeploy Functions currently run on the Node.js 6 runtime.

## Writing a Function

Learn more about the full file structure under the [App Development](app-development.md) section.

You can see an example function in our **[IFTTT sample app](https://github.com/dronedeploy/app-examples/tree/master/IFTTT/functions/webhook)**.

A DroneDeploy Function has the following files:

```
├── functions
│   └── webhook
│       ├── config.json
│       ├── dronedeploy.js
│       ├── handler.js
│       └── package.json
```

#### config.json

```json
{
  "authRequired": true,
  "mockToken": false,
  "config": {
    "cors": {
      "headers": []
    }
  }
}
```

#### dronedeploy.js

```javascript
'use strict';
/**
 * DroneDeploy Wrapper
 * In general, there should be very little to touch here
 */
require('dotenv').config()

global.APP_ID = process.env.APP_ID || undefined;

const bootstrap = require('@dronedeploy/function-wrapper');
const handler = require('./handler');

let config = require('./config.json');

exports.webhook = function (req, res) {
  if (!global.APP_ID) {
    const msg = 'App slug not available, did you deploy using DroneDeploy-Cli?';
    console.error(msg);
    res.status(500).send(msg)
  }
  bootstrap(config, req, res, (err, ctx) => {
    if (err) {
      console.error(err, err.stack);
      console.warn('An error occurred during the bootstrapping process. A default response has been sent and code paths have been stopped.');
      return;
    }
    handler.helloWorld(req, res, ctx);
  });
};
```

#### handler.js

```javascript
exports.helloWorld = function (req, res, ctx) {
  res.status(200).send('Hello World!');
};
```

#### package.json

```json
{
  "name": "ifttt-webhook",
  "version": "0.1.0",
  "description": "",
  "main": "dronedeploy.js",
  "author": "dronedeploy",
  "license": "MIT",
  "dependencies": {
    "@dronedeploy/function-wrapper": "1.1.2",
    "dotenv": "5.0.1",
    "md5": "^2.2.1",
    "request": "2.87.0"
  },
  "devDependencies": {
    "jasmine": "3.1.0",
    "@dronedeploy/dronedeploy-cli": "1.0.0"
  }
}
```

## Security

In order to secure your DroneDeploy Function, you will need to use the DroneDeploy [function-wrapper](https://www.npmjs.com/package/@dronedeploy/function-wrapper). The function wrapper handles authentication and authorization with DroneDeploy JWT tokens automatically.

You can install the wrapper with the following command:

        $ npm i @dronedeploy/function-wrapper

## Deploying a Function

The easiest way to deploy a DroneDeploy Function is by using the [DroneDeploy CLI](dronedeploy-cli.md). You can learn more about it in the [App Development](app-development.md) section of this Documentation.