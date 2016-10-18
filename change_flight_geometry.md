# Change Flight Geometry

![](change_geometry.png

[Install this app](https://dronedeploy.com/app2/settings/install/fb58028c-c502-3914-351f-795fc93578b7)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Change Geometry</title>
  <link rel="stylesheet" href="styles.css">
  <style>
  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  </style>
</head>
<body>

  <a href="#" class="button">Change Geometry</a>

  <script>
  function droneDeployApiLoaded(){
    return new Promise((resolve) => {
      dronedeploy.onload(function() {
        resolve();
      });
    });
  }

  function getCurrentPlan(){
    return new Promise((resolve) => {
      window.dronedeploy.Plans.getCurrentlyViewed().subscribe((plan) => {
        resolve(plan);
      });
    });
  }

  function randomlyAdjustGeometry(geometry){
    let offset = Math.random() / 100 * ([1, -1][Math.floor(Math.random() * 2)]);
    geometry[2].lng = geometry[0].lng + offset;
    return geometry;
  }

  function saveGeometry(planId, newGeometry){
    window.dronedeploy.Plans.update(planId, {
      geometry: newGeometry
    })
  }

  document.querySelector('.button').addEventListener('click', function(){
    droneDeployApiLoaded()
      .then(getCurrentPlan)
      .then((plan) => {
        var newGeometry = randomlyAdjustGeometry(plan.geometry);
        saveGeometry(plan.id, newGeometry);
      })
  });
  </script>

</body>
</html>
```