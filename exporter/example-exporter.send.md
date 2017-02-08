![](/assets/Screenshot 2017-02-08 09.27.30.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589ab42336fefad6ec83561a/install "Install the example application")

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Export.send example</h1>
    <label for="email">Add an email</label>
    <input type="email" id="email" placeholder="Add an email to send" />
    <button type="button" id="addEmailBtn">Add email</button>
    <ul id="emails"></ul>
    <br />
    <select name="layer" id="layer-select">
      <option value="Orthomosaic">Orthomosaic</option>
      <option value="NDVI Toolbox">NDVI Toolbox</option>
      <option value="Elevation Toolbox">Elevation Toolbox</option>
      <option value="3D Model">3D Model</option>
    </select>
    <br>
    <select name="file-format" id="file-format">
      <option value="geotiff">Geotiff</option>
      <option value="jpg">JPG</option>
      <option value="shapefile">Shapefile</option>
    </select>
    <br>
    <label for="merge-box">Merge?</label>
    <input type="checkbox" value="merge" id="merge-box" />
    <br>
    <label for="projection-value">Projection</label>
    <input type="number" min="0" max="5000" value="3857" id="projection-value">
    <br>
    <label for="resolution-value">Resolution (0 for 'native')</label>
    <input type="number" value="5" min="0" max="10" id="resolution-value">
    <br>
    <button type="button" id="export">Export</button>
    <span id="exportMessage"></span>
    <script>
    var exportBtn = document.getElementById('export');
    var emailInput = document.getElementById('email');
    var emailList = document.getElementById('emails');
    var addEmailBtn = document.getElementById('addEmailBtn');
    var layerSelect = document.getElementById('layer-select');
    var exportMessage = document.getElementById('exportMessage');
    var mergeCheckbox = document.getElementById('merge-box');
    var projectionValue = document.getElementById('projection-value');
    var resolutionValue = document.getElementById('resolution-value');
    var emails = [];

    function formatEmailList(emails) {
      emailList.innerHTML = '';
      emailList.innerHTML = emails.map(function(email) {
        return '<li class="email">' + email + '</li>';
      }).join('');
    }

    function addEmailToList(email) {
      emails.push(email);
      formatEmailList(emails);
      emailInput.value = '';
    }

    new DroneDeploy({ version: 1 })
      .then(function(dronedeployApi) {
          exportBtn.addEventListener('click', function(event) {
            event.preventDefault();

            dronedeployApi.Exporter.send({
                      layer: layerSelect.value,
                      email: emails,
                      merge: mergeCheckbox.checked ? true : false,
                      projection: projectionValue.value,
                      resolution: resolutionValue.value === 0 ? 'native' : resolutionValue.value
                    })
              .then(function(exportId) {
                dronedeployApi.Messaging.showToast('Export successful! Id: ' + exportId, { timeout: -1 });
              },
              function(error) {
                dronedeployApi.Messaging.showToast(error, { timeout: -1 });
              }
              );
          });

          addEmailBtn.addEventListener('click', function(event) {
            var newEmail = emailInput.value;
            addEmailToList(newEmail);
          });
      });

  </script>
</body>
</html>
```



