![](/docs/assets/area-example.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

<div>
  Area of Map: <span id="plan-area">...</span>
</div>

<script>

/**
* Returns area in square meters
*/
function geodesicArea(latLngs) {
  var pointsCount = latLngs.length,
  area = 0.0,
  d2r = Math.PI / 180,
  p1, p2;

  if (pointsCount > 2) {
    for (var i = 0; i < pointsCount; i += 1) {
      p1 = latLngs[i];
      p2 = latLngs[(i + 1) % pointsCount];
      area += ((p2.lng - p1.lng) * d2r) *
      (2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
    }
    area = area * 6378137.0 * 6378137.0 / 2.0;
  }

  return Math.abs(area);
}

new DroneDeploy({version: 1}).then(function(dronedeploy){
  dronedeploy.Plans.getCurrentlyViewed().then(function(plan){
    document.querySelector('#plan-area').innerHTML = geodesicArea(plan.geometry)+' meters<sup>2</sup>';
  });
});

</script>

</body>
</html>
```



