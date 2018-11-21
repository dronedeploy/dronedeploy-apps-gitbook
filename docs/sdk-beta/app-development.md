# App Development

**This functionality is in beta - please learn more** **[here](beta-signup.md).**

With the App SDK Platform, we want to make deploying an app simple. This is why we have made creating Datastore tables, Functions, and Triggers configuration-driven using `serverless.yml`.

To follow along with this documentation, please checkout our **[sample apps](https://github.com/dronedeploy/app-examples)**.

DroneDeploy App SDK consists of four components:

* [**UI**](ui-kit.md): Build a custom user interface

* [**Functions**](functions.md): Serverless architecture running on the DroneDeploy Platform. Write Node.js code to enable backend functionality.

* [**Datastore**](datastore.md): Create custom data tables with columns and schema. Store customer data securely.

* [**Triggers**](triggers.md): Build DroneDeploy event driven use cases.

Deploying these components separately can be a pain, thus we've created a [CLI](dronedeploy-cli.md) for managing Apps and their deployments.

You will find instructions on how all of these pieces fit together below.

## Prerequisites

Be sure to have gone through the [**Getting Started**](getting-started.md) prerequisites and installation.

## App Directory Structure

This is what the directory structure of your DroneDeploy App might look like. You can see an actual example with our [IFTTT sample app](https://github.com/dronedeploy/app-examples/tree/master/IFTTT).

```
├── app
│   ├── css
│   │   └── styles.css
│   ├── index.html
│   └── js
│       └── script.js
├── functions
│   └── webhook
│       ├── config.json
│       ├── dronedeploy.js
│       ├── handler.js
│       └── package.json
├── package.json
└── serverless.yml
```

#### app

Note that at the top level we have an `app` directory. This directory is where your frontend UI code will live. You will find your HTML, Javascript, CSS here. Note that if you have multiple UIs in different App Zones, you many want to have subdirectories for each App Zone.

#### functions

The functions directory is where you put all of your DroneDeploy Functions. Note that you can have multiple Functions per App; however, we recommend that you use one Function with multiple routes to handle multiple actions.

Read more about Functions [here](functions.md).

#### package.json

The `package.json` file is where you define your NPM dependencies.

It is important to have the `"main"` field be `dronedeploy.js` as that is how the platform knows which file to run.

```json
{
  "name": "ifttt",
  "version": "0.1.0",
  "main": "dronedeploy.js",
  "author": "dronedeploy",
  "devDependencies": {
    "@dronedeploy/dronedeploy-cli": "1.1.1"
  }
}
```

You will also need to make sure that your have the [dronedeploy-cli](https://www.npmjs.com/package/@dronedeploy/dronedeploy-cli) installed as a development dependency to be able to deploy correctly using the CLI. If you do not already have the CLI defined as a dependency in `package.json`, you can install it by running the following command.

        $ npm install --save-dev @dronedeploy/dronedeploy-cli

#### serverless.yml

The serverless.yml file is the blueprint to your App. This file is where you will define Datastore tables, Triggers, and your Functions. This is the entrypoint for the DroneDeploy CLI to understand what you want to do with your App. The next section will talk in depth about the serverless.yml file.

## serverless.yml

The `dronedeploy-cli` is built using the [Serverless framework](https://serverless.com/framework/docs/). The serverless framework uses the `serverless.yml` file for configuration.

```yml
service: IFTTT

provider:
  name: dronedeploy

app: # APP ID GOES HERE

plugins:
  - "@dronedeploy/dronedeploy-cli"

functions:
  ifttt-webhook:
    handlerPath: functions/webhook
    handler: dronedeploy
    memory: 128
    events:
      -trigger
        object-type: Export
        type: complete
    resources:
      tables:
        webhook-table:
          description: "stores endpoint for IFTTT webhook"
          columns:
            - name: endpoint
              type: Text
              encrypted: false
              length: 255
              description: "webhook endpoint for IFTTT"
```

**service** should be set to a reasonable name for your app.

**provider** should always be `dronedeploy` since you are deploying your serverless functions on the DroneDeploy Platform.

**app** is where you put the App Id of your DroneDeploy App. You can find your App Id by navigating to the App description page on the DroneDeploy App Market.

**plugins** should always be set to `@dronedeploy/dronedeploy-cli`. This lets the serverless framework know to use the `dronedeploy-cli` as the plugin.

**functions** is where you define your functions.

* The key is used as the name of the function. In the example above, the name is `ifttt-webhook`.

* The `handlerPath` lets the CLI know where to find your function files.

* The `handler` defines the module to run in your `dronedeploy.js` function file. Typically this field should stay as `dronedeploy`.

* Under events you can define your DroneDeploy Triggers. You can learn more about Triggers [here](triggers.md). Note that you can have more than one Trigger defined.

* Finally you can define Datastore Tables under `resources`. Each table can have multiple columns. You can learn more about Datastore tables [here](datastore.md).

## Deployment

With the [DroneDeploy CLI](dronedeploy-cli.md), you can deploy your Functions, Datastore tables, and Triggers with one command:

        $ serverless deploy

Once you run `serverless deploy`, your app is now ready for use.

## Function Status

Once your Function has been deployed, you can check its status by running:

        $ sls status

## Local testing

You can test your function locally by doing the following:

        $ npm install -g @google-cloud/functions-emulator

cd into your actual function folder

        $ npm install
        $ functions config set projectId dronedeploy
        $ functions start
        $ functions deploy dronedeploy --trigger-http

then it gives you the URL to start hitting it

## Logs

Once your Function is up and running, you can check its logs with the following command:

        $ sls logs --functionName ifttt-webhook --tail


You can find all CLI commands by running the following:

        $ sls help