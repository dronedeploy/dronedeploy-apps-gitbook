# Triggers

Triggers allow your DroneDeploy App to respond to events happening on the DroneDeploy Platform. For example, you may want to kick off a pre-defined export once your map completes processing.

Triggers are associated with an App's Function. In order for a Trigger event to fire, the user who triggered the event needs to have the App installed, and the Function should have a Trigger defined. You can define Triggers using the `DroneDeploy CLI` and the `serverless.yml` file. For example:

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

## Listening to Triggers

Currently there is a reserved path under `/__ddtriggerfunction` on each DroneDeploy Function for listening to Trigger events.

Your code might look something like this:
```javascript
exports.routeHandler = function (req, res, ctx) {
  const path = req.path;
  switch(path) {
    case '/__ddtriggerfunction':
      triggerHandler(req, res, ctx);
      break;
  }
};
```

You can check out our [sample app](https://github.com/dronedeploy/app-examples/blob/master/IFTTT/functions/webhook/handler.js) to see how Triggers are handled.

## Supported Triggers

We currently support the following Triggers:

* Export:complete
* MapPlan:complete

