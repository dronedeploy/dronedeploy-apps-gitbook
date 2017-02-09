![](/assets/Screenshot 2017-02-09 11.32.05.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589badec95378856ee605893/install)

**note: **You must upload your own project in order to use this API.  Please refer to the article on uploading an example project.  Once the project has been uploaded, click on it to reach the export button.

![](/assets/Screenshot 2017-02-09 11.20.01.png)

Once you have queued an export, Export.list will have data to display.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Exporter.List example</h1>
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



