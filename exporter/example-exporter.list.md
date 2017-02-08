//TODO Get picture

# [Install the example](https://www.dronedeploy.com/app2/applications/589badec95378856ee605893/install)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Export.List example</h1>
    <ul id="exports"></ul>
  <script>
      var exportOutput = document.getElementById('exports');

      function formatOutput(exp) {
      //es6 template string
        return `
          <li class="export">${exp.username} - ${exp.status} <a href="${exp.download_path}" target="blank" download>Download</a></li>
        `
      }

      new DroneDeploy({ version: 1 })
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
            .then(function(plan) {
              return dronedeployApi.Exporter.list({planId: plan.id})
            })
        }).then(function(exports) {
          exportOutput.innerHTML = exports.map(formatOutput).join('');
        })
  </script>
</body>
</html>
```



