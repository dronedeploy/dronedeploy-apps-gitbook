**Dashboard Plugin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Overlay: Dashboard Plugin</title>
    <style>
        body {
            display: flex;
            justify-content: center;
        }
        button {
            width: 80%;
        }
    </style>
</head>
<body>
    <button id="open">Open the Overlay</button>
    <script>
        var openButton = document.getElementById('open');

        openButton.addEventListener('click', function() {
            new DroneDeploy({ version: 1 })
                .then(function(dronedeployApi) {
                    dronedeployApi.Overlay.open('My First Overlay App!');
                });
        });
    </script>
</body>
</html>
```

**Overlay Plugin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Overlay: Overlay Plugin</title>
    <style>
        body {
            display: flex;
            justify-content: center;
        }
        button {
            width: 80%;
        }
    </style>
</head>
<body>
    <button id="close">Close the Overlay</button>
    <script>
        var closeButton = document.getElementById('close');

        closeButton.addEventListener('click', function() {
            new DroneDeploy({ version: 1 })
                .then(function(dronedeployApi) {
                    dronedeployApi.Overlay.close();
                });
        });
    </script>
</body>
</html>
```



