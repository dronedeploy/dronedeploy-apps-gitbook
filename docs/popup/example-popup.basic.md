**Dashboard Plugin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Popup: Dashboard Plugin</title>
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
    <button id="open">Open the Popup</button>
    <script>
        var openButton = document.getElementById('open');

        openButton.addEventListener('click', function() {
            new DroneDeploy({ version: 1 })
                .then(function(dronedeployApi) {
                    dronedeployApi.Popup.open('My First Popup App!');
                });
        });
    </script>
</body>
</html>
```

**Popup Plugin**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Popup: Popup Plugin</title>
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
    <button id="close">Close the Popup</button>
    <script>
        var closeButton = document.getElementById('close');

        closeButton.addEventListener('click', function() {
            new DroneDeploy({ version: 1 })
                .then(function(dronedeployApi) {
                    dronedeployApi.Popup.close();
                });
        });
    </script>
</body>
</html>
```



