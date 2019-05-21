# Measurement API Full Example

![](/docs/assets/measurement_api.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>

  <!-- Only included for easy geometry manipulation -->
  <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
   crossorigin=""></script>
</head>
<body>

<div>Measurement.getElevationOfPoint</div>
<textarea id="Measurement-getelevationofpoint"></textarea>

<div>Measurement.getElevationOfPoints</div>
<textarea id="Measurement-getelevationofpoints"></textarea>

<div>Measurement.getElevationOfLine</div>
<textarea id="Measurement-getelevationofline"></textarea>

<div>Measurement.getVolume</div>
<textarea id="Measurement-getvolume"></textarea>


<script>
new DroneDeploy({version: 1}).then(function(dronedeploy){
  dronedeploy.Plans.getCurrentlyViewed().then(function(plan){
    // All measurements need to occur within the bounds of the map
    var shrunkBounds = scaleBounds(plan.geometry, -0.45);

    dronedeploy.Measurement.getElevationOfPoint(plan.id, shrunkBounds[0])
      .then(drawResultsOnElement('#Measurement-getelevationofpoint'));

    dronedeploy.Measurement.getElevationOfPoints(plan.id, shrunkBounds)
      .then(drawResultsOnElement('#Measurement-getelevationofpoints'));

    dronedeploy.Measurement.getElevationOfLine(plan.id, [shrunkBounds[0], shrunkBounds[1]])
      .then(drawResultsOnElement('#Measurement-getelevationofline'));

    dronedeploy.Measurement.getVolume(plan.id, shrunkBounds)
      .then(drawResultsOnElement('#Measurement-getvolume'));
  });
});

function drawResultsOnElement(textareaSelector){
  return function renderResults(jsonResults){
    document.querySelector(textareaSelector).value = JSON.stringify(jsonResults);
  }
}

function scaleBounds(geometry, factor){
  var latLngs = geometry.map((latLng) => [latLng.lat, latLng.lng]);
  var scaledBounds = L.latLngBounds(latLngs).pad(factor)
  var toPoint = function(latLng){
    return {lat: latLng.lat, lng: latLng.lng};
  }

  return [
    toPoint(scaledBounds.getNorthEast()),
    toPoint(scaledBounds.getSouthEast()),
    toPoint(scaledBounds.getSouthWest()),
    toPoint(scaledBounds.getNorthWest()),
  ];
}

</script>
  
</body>
</html>
```
