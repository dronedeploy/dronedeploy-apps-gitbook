![](/tilequery.png)

**NOTE:** You must upload your own project in order to use this API.  Please refer to the article on uploading an example project.  Once the project has been uploaded, click on it to reach the export button.

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
    //es6 template string
    return `<li><a href="${linkUrl}" target="_blank">${last(linkUrl.split('/'))}</a></li>`
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
       return dronedeployApi.Plans.getCurrentlyViewed().then(function(plan){
          return fetchTileDataFromPlan(dronedeployApi, plan);
       });
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
