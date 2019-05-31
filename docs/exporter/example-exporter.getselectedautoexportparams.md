
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
	body { display: grid; }
        .title {
            font-size: 1.1em;
            font-weight: 500;
        }

        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
            text-align: center;
        }

        .btn {
            border: none;
            background-color: #039be5;
            font-size: 14px;
            font-family: Lato;
            font-weight: 500;
            color: white;
            padding: 10px 16px;
            margin-top: 10px;
            flex-basis: 100%;
            width: 100%;
        }
        #autoExportParams {
          padding-top: 10px;
        }
        .exportValue {
          font-family: Lato, sans-serif;
          color: rgba(0, 0, 0, 0.87);
        }
    </style>
</head>

<body>
    <h1 class="title sans">Export.getSelectedAutoExportParams example</h1>
    <button type="button" id="export" class="btn">Get Auto Export Params</button>
    <div id="autoExportParams" class="params">

</div>
    <script>
        var paramsBtn = document.getElementById('export');
        var paramsDiv = document.getElementById('autoExportParams');

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                paramsBtn.addEventListener('click', function(event) {
                    event.preventDefault();

                    dronedeployApi.Exporter.getSelectedAutoExportParams()
                        .then(function(autoExportParams) {
                          paramsDiv.innerHTML = `<p class=exportValue>Auto Export Params: fileFormat = ${autoExportParams.fileFormat}</p>`
                        });
                });
            });
    </script>
</body>

</html>
```



