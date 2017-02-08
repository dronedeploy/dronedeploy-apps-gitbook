

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <span class="title">Exporter.getPointCloudLink example</span>
    <div id="link">Here is your link: <a href="" id="pointLink" >(link)</a></div>
    <script>
      var pointLink = document.getElementById('pointLink');

      dronedeployApi.Exporter.getPointCloudLink(function(link) {
        pointLink.href = link
      });
    </script>
</body>
</html>

```



