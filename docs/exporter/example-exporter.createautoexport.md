**note:** Use this example in the AutoExportsExplorer app-zone

**note:** We ask for folderID in this example, but there can be other parameters

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
        <input class="sans" type="text" id="folder-id" placeholder="Folder ID" />
    </div>
    <br>
    <div class="form-group">
        <input class="sans" type="url" id="folder-endpoint" placeholder="Endpoint for getting metadata about destination folder" />
    </div>
    <br>
    <button type="button" id="auto-export-button" class="btn">Create Auto Export</button>
    <span id="exportMessage"></span>
    <script>
        var createAutoExportBtn = document.getElementById('auto-export-button');
        var folderEndpointValue = document.getElementById('folder-endpoint');
        var folderConfigValue = document.getElementById('folder-id');

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                createAutoExportBtn.addEventListener('click', function(event) {
                    event.preventDefault();

                    dronedeployApi.Exporter.createAutoExport(
                    folderEndpointValue.value,
                    { folderId: folderConfigValue.value },
                    ).then((autoExportSetting) => console.log('Auto Export: ', autoExportSetting));
                });
            });
    </script>
</body>

</html>



```
