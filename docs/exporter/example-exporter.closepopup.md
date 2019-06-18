**note:** Use this example in the AutoExportsExplorer app-zone

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
        }
    </style>
</head>

<body>
    <h1 class="title sans">Export.closePopup example</h1>
    <button type="button" id="auto-export-button" class="btn">Close popup</button>
    <script>
        var closePopupBtn = document.getElementById('auto-export-button');

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                closePopupBtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    dronedeployApi.Exporter.closePopup();
                });
            });
    </script>
</body>

</html>
```
