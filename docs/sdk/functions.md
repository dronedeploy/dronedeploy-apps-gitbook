# Functions

DroneDeploy Functions is your tool for writing, running, and deploying backend code functionality.

DroneDeploy Functions uses serverless architecture running on the DroneDeploy Platform. You can write Node.js code to build out custom backend functionality and hook into things like Datastore and Triggers seamlessly. No need to worry about hosting since this is all handled by DroneDeploy.

## Runtime

DroneDeploy Functions currently run on the Node.js 10 runtime.

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


#### handler.js

The `handler.js` file is where you write your code. The following code should look familiar if you have ever written a node.js request module.

```javascript
exports.helloWorld = function (req, res, ctx) {
  res.status(200).send('Hello World!');
};
```

**req** is the incoming request

**res** is what you use to respond to the incoming request

**ctx** provides you with DroneDeploy context that may be useful for App development.

* if a request comes in with a [DroneDeploy scoped JWT token](ui-kit.md), you can reference the user's username with `ctx.token.username`.

* you can also directly access our GraphQL APIs for making an API call to DroneDeploy with `ctx.graphql.query`. Note that these queries are already authenticated via the JWT token included in the Function request.

* you can also directly make calls to the Datastore via a command like `ctx.datastore.table('Table:5ada2d8f27b7b90001b9c40a')`. You can then add and query for Datastore data like so:

```javascript
const getTableData = (ctx, id) => {
  return getTableId(ctx).then((tableId) => {
    const table = ctx.datastore.table(tableId);
    return table.getRowByExternalId(id)
    .then((result) => {
      if (!result.ok) {
        console.log('getTableData bad results');
        if (couldNotFindData(result)) {
          console.log('row does not exist');
          return null;
        }
        return Promise.reject(result.errors[0]);
      }
      return result.data;
    });
  });
}
```

You can learn more about the `ctx` object from the @dronedeploy/function-wrapper [README](https://www.npmjs.com/package/@dronedeploy/function-wrapper).

#### config.json

The `.env` file allows you to determine whether or not this function should be protected behind DroneDeploy JWTs. The file is not mandatory. Typically when used your file should look like this (presented with default values):

```
AUTH_REQUIRED=true
MOCK_TOKEN=false
CORS_HEADERS=some-cors-header,some-other-allowed-header
```

However, you may want to add custom CORS headers or disable auth to have an open endpoint for certain usecases like implementing OAuth.

#### dronedeploy.js

The `dronedeploy.js` file is the wrapper code for allowing DroneDeploy to handle things like auth and building function context. Your `dronedeploy.js` file should look almost identical to the one below. The only modification might be the `handler.helloWorld(req, res, ctx)` line to change which Node.js  module export you would like to use.

```javascript
'use strict';
const bootstrap = require('@dronedeploy/function-wrapper');
const handler = require('./handler');

exports.dronedeploy = bootstrap((ctx) => (req, res) => handler.helloWorld(req, res, ctx));
```

#### package.json

The `package.json` file is where you define your NPM dependencies.

It is important to have the `"main"` field be `dronedeploy.js` as that is how the platform knows which file to run.

```json
{
  "name": "ifttt-webhook",
  "version": "0.1.0",
  "description": "",
  "main": "dronedeploy.js",
  "author": "dronedeploy",
  "license": "MIT",
  "dependencies": {
    "@dronedeploy/function-wrapper": "1.1.7",
    "dotenv": "5.0.1",
    "md5": "^2.2.1",
    "request": "2.87.0"
  },
  "devDependencies": {
    "jasmine": "3.1.0",
    "@dronedeploy/dronedeploy-cli": "1.1.1"
  }
}
```

In order to secure your DroneDeploy Function, you will need to use the DroneDeploy [function-wrapper](https://www.npmjs.com/package/@dronedeploy/function-wrapper). The function wrapper handles authentication and authorization with DroneDeploy JWT tokens automatically.

You can install the wrapper with the following command:

        $ npm i --save @dronedeploy/function-wrapper

You will also need to make sure that your have the [dronedeploy-cli](https://www.npmjs.com/package/@dronedeploy/dronedeploy-cli) installed as a development dependency to be able to deploy correctly using the CLI. If you do not already have the CLI defined as a dependency in `package.json`, you can install it by running the following command.

        $ npm install --save-dev @dronedeploy/dronedeploy-cli


## Deploying a Function

The easiest way to deploy a DroneDeploy Function is by using the [DroneDeploy CLI](dronedeploy-cli.md). You can learn more about it in the [App Development](app-development.md) section of this Documentation.

## Limits

* Functions are stateless
* Maximum function timeout is 540 seconds
* Maximum memory allocation is 2048 mb
