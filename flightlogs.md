# Flight Logs

## FlightLogs.getLogsFromPlan

**Overview**
```javascript
const planId = String;
window.dronedeploy.FlightLogs.getLogsFromPlan(planId);
```

**Example**

```javascript
window.dronedeploy.FlightLogs.getLogsFromPlan('57eaa66d2a2b43fa1249c76c')
  .subscribe((logs) => console.log(logs));
```

**Example Response**
```javascript
[
  downloadUrl: "https://s3.amazonaws.com/drone-deploy-flight-logs/57eaa66d2a2b43fa1249c76c/57eaa66d2a2b43fa1249c76c-09-29-105201-197_2016-09-29-110228-607.log"
  duration: "10 minutes"
  startTime:"29 Sep 2016 - 10:52"
]
```