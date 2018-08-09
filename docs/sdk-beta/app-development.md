# App Development

**This functionality is in beta - please learn more** **[here](beta-signup.md).**

With the App SDK Platform, we want to make deploying an app simple. This is why we have made creating Datastore tables, Functions, and Triggers configuration-driven using `serverless.yml`.

To follow along with this documentation, please checkout our **[sample apps](https://github.com/dronedeploy/app-examples)**.

DroneDeploy App SDK consists of 4 components:

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

#### serverless.yml

The serverless.yml file is the blueprint to your App. This file is where you will define Datastore tables, Triggers, and your Functions. This is the entrypoint for the DroneDeploy CLI to understand what you want to do with your App. The next section will talk in depth about the serverless.yml file.

## serverless.yml

[Serverless Platform](https://serverless.com/framework/docs/)

```yml
service: IFTTT

provider:
  name: dronedeploy

app: # APP ID GOES HERE

plugins:
  - "@dronedeploy/dronedeploy-cli"

functions:
  ifttt-webhook:
    name: "ifttt-webhook"
    handlerPath: functions/webhook
    handler: webhook
    memory: 128
    events:
      -trigger:
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

## DroneDeploy CLI

## Deployment

        $ serverless deploy

## Logs

        $ sls logs --functionName ifttt-webhook --tail

## Function Status

        $ sls status

## DroneDeploy CLI