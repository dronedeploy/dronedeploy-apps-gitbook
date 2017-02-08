// TODO Get image

// Permissions issue - use owned project

# [Install the example](https://www.dronedeploy.com/app2/applications/589b5452c256798c1c4cd1c1/install "Install the example application.")

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Images.get example</h1>
    <ul id="images"></ul>
    <script>
      var imageOutput = document.getElementById('images');

      function formatOutput(image) {
      //es6 template string
        return `<li class="image-output">
                  <img src="${image.path} alt="Image name ${image.filename}" />
                </li>`
      }

      var options = {
        width: 450,
        height: 450
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
                .then(function(plan) {
                  return dronedeployApi.Images.get(plan.id, options)
                })
        })
        .then(function(images) {
          imageOutput.innerHTML = images.map(formatOutput).join('');
        });
    </script>
</body>
</html>
```



