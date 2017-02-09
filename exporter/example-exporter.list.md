![](/assets/Screenshot 2017-02-09 11.10.36.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589badec95378856ee605893/install)

_**note: **_in order to use this example, you must be the plan's owner and have requested an export.  Please download [this copy](https://s3.amazonaws.com/drone-deploy-plugins/templates/construction_site.zip) \(md5: 65c2f92e3bfbc510c7ae78e1239a5c44\) of the construction example.  Then, in the dashboard, upload the pictures provided in the zip file.

![](/assets/Screenshot 2017-02-09 11.13.42.png)

This will take some time, but it will go faster with the following upload settings

![](/assets/Screenshot 2017-02-09 11.21.08.png)

When this is complete, you can click on the plan to reach the export button.

![](/assets/Screenshot 2017-02-09 11.20.01.png)

After you have started an export, you will be able to display it using Exporter.list.

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



