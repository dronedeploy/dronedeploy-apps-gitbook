![](/tile-array-example.png)

**NOTE:** You must upload your own project in order to use this API.  Please refer to the article on uploading an example project.  Once the project has been uploaded, click on it to reach the export button.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    #tile-list{
      display: flex;
      flex-direction: row;
      flex: 1 1 0%;
    }
    img{
      width: 65px;
      height: 65px;
    }
  </style>
</head>
<body>

<div>First 4 Tiles At Zoom Level 20</div>
<div id="tile-list"></div>

<script>

function getTilesFromGeometry(geometry, template, zoom){
  function long2tile(lon,zoom) {
    return (Math.floor((lon+180)/360*Math.pow(2,zoom)));
  }
  function lat2tile(lat,zoom) {
    return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
  }
  function replaceInTemplate(point){
    return template.replace('{z}', point.z)
      .replace('{x}', point.x)
      .replace('{y}', point.y);
  }

  var allLat = geometry.map(function(point){
    return point.lat;
  });
  var allLng = geometry.map(function(point){
    return point.lng;
  });
  var minLat = Math.min.apply(null, allLat);
  var maxLat = Math.max.apply(null, allLat);
  var minLng = Math.min.apply(null, allLng);
  var maxLng = Math.max.apply(null, allLng);
  var top_tile    = lat2tile(maxLat, zoom); // eg.lat2tile(34.422, 9);
  var left_tile   = long2tile(minLng, zoom);
  var bottom_tile = lat2tile(minLat, zoom);
  var right_tile  = long2tile(maxLng, zoom);

  var tiles = [];
  for (var y = top_tile; y < bottom_tile + 1; y++) {
    for (var x = left_tile; x < right_tile + 1; x++) {
      tiles.push(replaceInTemplate({x, y, z: zoom}))
    }
  }

  return tiles;
}

var tileList = document.querySelector('#tile-list');
new DroneDeploy({version: 1}).then(function(dronedeploy){
  dronedeploy.Plans.getCurrentlyViewed().then(function(plan){
    var zoom = 20;
    dronedeploy.Tiles.get({planId: plan.id, layerName: 'ortho', zoom: zoom})
      .then(function(res){
        const tiles = getTilesFromGeometry(plan.geometry, res.template, zoom);
        tileList.innerHTML = tiles.slice(0, 4).map((tileUrl) => {
          return '<div style="display: flex; flex: 25;"><img src="'+tileUrl+'"></img></div>'
        }).join('')
      });
  });
});
  
</script>

</body>
</html>
```
