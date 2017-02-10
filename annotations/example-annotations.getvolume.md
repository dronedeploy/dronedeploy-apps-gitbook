![](/assets/Screenshot 2017-02-08 16.36.17.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589ba30ff3c333868a824926/install)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h2 class="title">Annotation.getVolume example</h2>
    <ul id="volume-details"></ul>
    <script>
      var volumeDetails = document.getElementById('volume-details');

      function formatOutput(result) {
        return `
          <li class="result-container">
            <h3>Volume for ${result.description}</h3>
            <hr>
            <div class="result">${result.volume.toFixed(2)}m<sup>3</sup></div>
          </li>
        `;
      }

      new DroneDeploy({ version: 1 })
        .then(function(dronedeployApi) {
          dronedeployApi.Plans.getCurrentlyViewed()
            .then(function(plan) {
              return dronedeployApi.Annotations.get(plan.id)
            })
            .then(function(annotations) {
              return annotations.filter(function(ann) {
                return ann.annotationType === "VOLUME";
              })
            })
            .then(function(annotations) {
              return Promise.all(annotations.map(function(annotation) {
                return dronedeployApi.Annotations.getVolume(annotation.id)
                  .then(function(result) {
                    return { volume: result.volume, description: annotation.description }
                  });
              }));
            })
            .then(function(volumes) {
              volumeDetails.innerHTML = volumes.map(formatOutput).join('');
            })
        })
        .catch(function(error) {
          console.error(error);
        })
    </script>
</body>
</html>



```



