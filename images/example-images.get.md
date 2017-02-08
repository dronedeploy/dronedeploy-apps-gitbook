// TODO Get image

// Permissions issue - use owned project

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
        var html = '<div class="image-output">';
        html += '<img src="';
        html += image.path;
        html += 'alt="Image name '
        html += image.filename;
        html += '" />';
        return html;
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



