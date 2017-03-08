![](/assets/Screenshot 2017-03-03 12.49.20.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .title {
            font-size: 1.1em;
            font-weight: 500;
        }
        
        .link {
            font-size: 0.8em;
            font-weight: 300;
        }
        
        .pointLink {
            text-decoration: none;
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
    </style>
</head>

<body>
    <h1 class="title sans">Exporter.get3DModelLink Example</h1>
    <h2 class="link sans">Download: <a href="" class="pointLink" id="download-link" target="_blank">(link)</a></h2>
    <script>
        var pointLink = document.getElementById('pointLink');

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.getCurrentlyViewed()
                    .then(function(plan) {
                        document.getElementById('download-link').innerHTML = `${plan.name}-3D`
                        return dronedeployApi.Exporter.get3DModelLink(plan.id);
                    })
            })
            .then(function(link) {
                pointLink.href = link;
            });
    </script>
</body>

</html>
```



