![](/docs/assets/Screenshot%202017-03-03%2012.13.23.png)

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
        
        .annotation {
            border-top: 1px dashed #333;
            padding-bottom: 10px;
        }
        
        .ann-title {
            font-size: 1.2em;
            font-weight: 500;
        }
        
        .subtitle {
            font-weight: 300;
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
    </style>
</head>

<body>
    <h1 class="title sans">Annotation.get Example</h1>
    <div id="annotation-details"></div>
    <script>
        var annotationDetails = document.getElementById('annotation-details');

        function formatOutput(annotation, i) {
            //es6 template string
            return `
            <div class="annotation">
              <h2 class="ann-title sans">Annotation ${i + 1}</h2>
              ${annotation.geometry.lat && annotation.geometry.lng ?
                '<div class="coordinates"><span class="subtitle sans">Coordinates:</span> ' + annotation.geometry.lat + ',' + annotation.geometry.lng + '</div>'
                    :
                  ''
                }
              <div class="type"><span class="subtitle sans">Type:</span> ${annotation.type}</div>
              <div class="description"><span class="subtitle sans">Date Created:</span> ${new Date(annotation.dateCreation).toDateString()}</div>
            </div>
      `
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.getCurrentlyViewed()
                    .then(function(plan) {
                        return dronedeployApi.Annotations.get(plan.id, {
                            comments: true
                        })
                    })
            })
            .then(function(annotations) {
                annotationDetails.innerHTML = annotations.map(formatOutput).join('');
            });
    </script>
</body>

</html>
```



