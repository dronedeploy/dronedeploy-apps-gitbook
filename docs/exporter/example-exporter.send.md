![](/docs/assets/Screenshot 2017-03-03 15.21.21.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .title {
            font-size: 1.3em;
            font-weight: 500;
        }

        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }

        label {
            font-weight: 300;
        }

        input,
        select {
            border: none;
            border-radius: 0;
            border-bottom: 1px solid #039be5;
            min-width: 30%;
            max-width: 100%;
            font-size: 0.8em;
            margin-left: auto;
        }

        input[type="email"] {
            width: 100%;
        }

        .btn {
            border: none;
            background-color: #039be5;
            /*border-radius: 5px;*/
            font-size: 14px;
            font-family: Lato;
            font-weight: 500;
            color: white;
            padding: 10px 16px;
            margin-top: 10px;
            flex-basis: 100%;
            width: 100%;
        }

        #emails {
            padding: 0;
        }

        .form-group {
            width: 100%;
            display: inline-flex;
            justify-content: flex-start;
        }

        .delete {
            opacity: 0;
            transition: opacity 0.4s;
            margin-left: 10px;
            margin-right: 5px;
            font-family: sans-serif;
        }

        .email {
            display: inline-flex;
            list-style: none;
            border: 1px solid #333;
            border-radius: 25px;
            text-align: center;
            padding: 5px;
            justify-content: space-around;
        }

        .email:hover .delete {
            opacity: 1;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Export.send example</h1>
    <form class="form-group">
        <input class="sans" type="email" id="email" placeholder="Enter an email to send to" />
    </form>
    <button type="button" id="addEmailBtn" class="btn">Add email</button>
    <ol id="emails"></ol>
    <br />
    <div class="form-group">
        <label for="layer-select">Select Layer Type</label>
        <select name="layer" id="layer-select">
          <option value="Orthomosaic">Orthomosaic</option>
          <option value="NDVI Toolbox">NDVI Toolbox</option>
          <option value="Elevation Toolbox">Elevation Toolbox</option>
          <option value="3D Model">3D Model</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="file-format">Select File Format</label>
        <select name="file-format" id="file-format">
        <option value="geotiff">Geotiff</option>
        <option value="jpg">JPG</option>
        <option value="shapefile">Shapefile</option>
      </select>
    </div>
    <br>
    <div class="form-group">
        <label for="merge-box">Merge?</label>
        <input type="checkbox" value="merge" id="merge-box" />
    </div>
    <br>
    <div class="form-group">
        <label for="projection-value">Projection</label>
        <input type="number" min="0" max="5000" value="3857" id="projection-value">
    </div>
    <br>
    <div class="form-group">
        <label for="resolution-value">Resolution (0 for 'native')</label>
        <input type="number" value="5" min="0" max="10" id="resolution-value">
    </div>
    <br>
    <button type="button" id="export" class="btn">Export</button>
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
                //es6 template string
                return `<li class="email">${email}<i class="delete">X</i></li>`;
            }).join('');
        }

        function addEmailToList(email) {
            emails.push(email);
            formatEmailList(emails);
            emailInput.value = '';
        }

        function deleteEmailFromList(emailIndex) {
            emails.splice(emailIndex, 1);
            formatEmailList(emails);
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                dronedeployApi.User.get().then(user => addEmailToList(user.email))
                emailList.addEventListener('click', function(event) {
                    if (event.target && event.target.matches('i.delete')) {
                        var index = emails.indexOf(event.target.value);
                        deleteEmailFromList(index);
                    }
                })
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
                                dronedeployApi.Messaging.showToast('Export successful! Id: ' + exportId, {
                                    timeout: -1
                                });
                            },
                            function(error) {
                                dronedeployApi.Messaging.showToast(error, {
                                    timeout: -1
                                });
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



