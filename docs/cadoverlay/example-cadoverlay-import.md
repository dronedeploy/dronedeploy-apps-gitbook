#### Without given ID

![](assets/cadoverlay-import_without-id.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <h3 class="title sans">CadOverlay.import example</h3>
    <span id="cadoverlay"></span>
    <script>
        const url = 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf';
        const name = 'Without ID';

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.CadOverlay.import(url, {}, name);
            });
    </script>
</body>

</html>
```

#### With previously prepared ID

![](assets/cadoverlay-import_with-id.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <h3 class="title sans">CadOverlay.import example</h3>
    <span id="cadoverlay"></span>
    <script>
        const url = 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf';
        const name = 'With ID';

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return Promise.all([dronedeployApi, dronedeployApi.CadOverlay.prepare()]);
            })
            .then(function([dronedeployApi, id]) {
                return dronedeployApi.CadOverlay.import(url, {}, name, id);
            });
    </script>
</body>

</html>
```