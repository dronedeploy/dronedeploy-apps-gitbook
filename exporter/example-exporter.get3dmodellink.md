![](/assets/Screenshot 2017-02-08 10.12.07.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589b5152af82ce11ec230f1f/install "Install the example application")

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Exporter.get3DModelLink example</h1>
    <h2 id="link">Here is your link: <a href="" id="pointLink" target="_blank">(link)</a></h2>
    <script>
      var pointLink = document.getElementById('pointLink');

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
            .then(function(plan) {
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



