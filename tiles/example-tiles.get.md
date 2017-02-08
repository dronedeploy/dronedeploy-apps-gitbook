![](/tilequery.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589b691d2bd48c85915c281d/install)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
  .tile-links{
    height: 100px;
    overflow: scroll;
  }
  </style>
</head>
<body>

  <h2>Tile Query</h2>
  <label for="">Zoom Level: </label>
  <input type="text" value="17" id="zoomLevel">
  <br>
  <label for="">Layer Name: </label>
  <select id="layerName">
    <option value="ortho">ortho</option>
    <option value="dem">dem</option>
  </select>

  <ul class="tile-links"></ul>

  <script>
  var zoom = document.querySelector('#zoomLevel');
  var layer = document.querySelector('#layerName');
  var tileList = document.querySelector('.tile-links');

  function getListItemFromLink(linkUrl){
    var last = function(array) { return array.slice(-1)[0]};
    var html = '<li><a href="';
    html += linkUrl;
    html += ' target="_blank">'
    html += last(linkUrl.split('/'))
    html += '</a></li>';
    return html;
  }

  function drawTileLinksToScreen(links){
    tileList.innerHTML = links.map(getListItemFromLink).join('');
  }

  function fetchTileDataFromPlan(api, plan){
    return api.Tiles.get({planId: plan.id, layerName: layer.value, zoom: parseInt(zoom.value)});
  }

  function getTilesFromResponse(tileResponse){
    return tileResponse.tiles;
  }

  function updateTileLinks(){
    new DroneDeploy({version: 1}).then(function(dronedeployApi){
       return dronedeployApi.Plans.getCurrentlyViewed()
    })
    .then(function(plan){
      return fetchTileDataFromPlan(dronedeployApi, plan);
    })
    .then(getTilesFromResponse)
    .then(drawTileLinksToScreen);
  }

  zoom.addEventListener('change', updateTileLinks);
  layer.addEventListener('change', updateTileLinks);
  updateTileLinks();

  </script>

</body>
</html>
```



