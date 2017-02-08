![](/assets/Screenshot 2017-02-08 10.03.02.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Exporter.getPointCloudLink example</h1>
    <h2 id="link">Here is your link: <a href="" id="pointLink" target="blank">(link)</a></h2>
    <script>
      var pointLink = document.getElementById('pointLink');

      new DroneDeploy({ version: 1 })
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
              .then(function(plan) {
                return dronedeployApi.Exporter.getPointCloudLink(plan.id)
              })
        })
        .then(function(link) {
          pointLink.href = link
        });
    </script>
</body>
</html>

```





