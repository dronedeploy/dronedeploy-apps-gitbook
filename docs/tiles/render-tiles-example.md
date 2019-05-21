![](/docs/assets/rendertiles.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
   crossorigin=""></script>
   <style>
     #mapid { height: 180px; }
   </style>
</head>
<body>

<div id="mapid"></div>

<script>
var qs = document.querySelector.bind(document);
new DroneDeploy({version: 1}).then(function(dronedeploy){
  var map = L.map('mapid');

  function focusMapOnPlanCenter(plan){
    map.setView([plan.location.lat, plan.location.lng], 14);
    return plan;
  }

  function renderNewTileTemplate(tileTemplate){
    L.tileLayer(tileTemplate).addTo(map);
  }

  function getTileTileTemplateFromPlan(plan){
    return dronedeploy.Tiles.get({planId: plan.id, layerName: 'ortho'})
      .then(function(tileResponse){
        return tileResponse.template;
      });
  }

  dronedeploy.Plans.getCurrentlyViewed()
    .then(focusMapOnPlanCenter)
    .then(getTileTileTemplateFromPlan)
    .then(renderNewTileTemplate)
});
</script>
  
</body>
</html>
```
