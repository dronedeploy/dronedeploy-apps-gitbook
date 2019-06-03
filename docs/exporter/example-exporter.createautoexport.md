**note: **Use this example in zone with export form so parameters used there will be send used in PluginMethod****

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

        input {
            border: none;
            border-radius: 0;
            border-bottom: 1px solid #039be5;
            width: 100%;
            font-size: 0.8em;
            margin-left: auto;
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

        .form-group {
            width: 100%;
            display: inline-flex;
            justify-content: flex-start;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Export.createAutoExport example</h1>
    <div class="form-group">
        <input class="sans" type="text" id="folderId" placeholder="Choose folder to send auto export (use ID of folder)" />
    </div>
    <br>
    <div class="form-group">
        <input class="sans" type="url" id="folderEndpoint" placeholder="Endpoint for function that checks availability of folder" />
    </div>
    <br>
    <button type="button" id="export" class="btn">Export</button>
    <span id="exportMessage"></span>
    <script>
        var exportBtn = document.getElementById('export');
        var folderEndpointValue = document.getElementById('folderEndpoint');
        var folderConfigValue = document.getElementById('folderId');
        
        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                exportBtn.addEventListener('click', function(event) {
                    event.preventDefault();

                    dronedeployApi.Exporter.createAutoExport(
                     folderEndpointValue.value,
                     JSON.stringify({ folderId: folderConfigValue.value }),
                    ).then(function(autoExportSetting) {
                                dronedeployApi.Messaging.showToast('Export successful! Id: ' + autoExportSetting.data.createAutoExportSetting.autoExportSetting.application.id, {
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
            });
    </script>
</body>

</html>
```



