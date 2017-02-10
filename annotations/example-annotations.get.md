![](/assets/Screenshot 2017-02-08 09.48.33.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589b4b79af82ce11ec230f18/install "Install the example app")

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Annotation.get example</h1>
    <div id="annotation-details"></div>
    <script>
    var annotationDetails = document.getElementById('annotation-details');

    function formatOutput(annotation, i) {
    //es6 template string
      return `
            <div class="annotation">
              <hr>
              <h2>Annotation ${i + 1}</h2>
              ${annotation.geometry.lat && annotation.geometry.lng ?
                '<div class="coordinates">Coordinates: ' + annotation.geometry.lat + ',' + annotation.geometry.lng + '</div>'
                    :
                  ''
                }
              <div class="type">Type: ${annotation.type}</div>
              <div class="description">Description: ${annotation.description}</div>
            </div>
      `
    }

    new DroneDeploy({ version: 1 })
      .then(function(dronedeployApi) {
        return dronedeployApi.Plans.getCurrentlyViewed()
          .then(function(plan) {
            return dronedeployApi.Annotations.get(plan.id, { comments: true })
        })
      })
      .then(function(annotations) {
        annotationDetails.innerHTML = annotations.map(formatOutput).join('');
      });

  </script>
</body>
</html>
```



