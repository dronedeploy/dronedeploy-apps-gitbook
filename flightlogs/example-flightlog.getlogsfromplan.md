//TODO Get Photo

//Where do I get logs?

```
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
        var html = '<li class="flightlog">'
        html += '<span>Start time: ';
        html += log.startTime;
        html += '</span>'
        html += '<span>Duration: ';
        html += log.duration;
        html += '</span>';
        html += '<a href="';
        html += log.downloadUrl;
        html += '" target="_blank">Download log</a>';
        html += '</li>'
        return html;
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



