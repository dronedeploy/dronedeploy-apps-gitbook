```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">FlightLogs.getLogsFromPlan example</h1>
    <ul id="logOutput"></ul>
    <script>
      var logOutput = document.getElementById('logOutput')

      function formatOutput(log) {
      //es6 template string
        return `
          <li class="flightlog">
            <span>Start time: ${log.startTime}</span>
            <span>Duration: ${log.duration}</span>
            <a href="${log.downloadUrl}" target="_blank">Download log</a>
          </li>
        `
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
            .then(function(plan) {
              return dronedeployApi.FlightLogs.getLogsFromPlan(plan.id)
            })
          .then(function(logs){
            logOutput.innerHTML = logs.map(formatOutput).join('')
          });
        })
  </script>
</body>
</html>
```



