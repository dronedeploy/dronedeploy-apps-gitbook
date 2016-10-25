# Get Tiles (Arrival 10/25/2016)

![](tilequery.png)

[Click to Install this App](https://dronedeploy.com/app2/settings/apps/install/d6c7d99b-bcb7-9b78-2b04-16d82bb3cb98)

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

<ul class="tile-links">
  
</ul>

<script>
const zoom = document.querySelector('#zoomLevel');
const layer = document.querySelector('#layerName');
const tileList = document.querySelector('.tile-links');

function dronedeployApiReady(){
  return new Promise((resolve) => {
    window.dronedeploy.onload(() => {
      resolve();
    });
  });
}

function getCurrentPlanId(){
  return new Promise((resolve) => {
    window.dronedeploy.Plans.getCurrentlyViewed()
      .subscribe((plan) => resolve(plan.id));
  });
}

function getTiles(planId, layerName, zoom){
  return new Promise((resolve) => {
    window.dronedeploy.Tiles.get({planId, layerName, zoom})
      .subscribe((tilesRes) => resolve(tilesRes.tiles));
  });
}

function getListItemFromLink(linkUrl){
  const last = (array) => array.slice(-1)[0];
  return `<li><a href="${linkUrl}" target="_blank">${last(linkUrl.split('/'))}</a></li>`;
}

function drawTileLinksToScreen(links){
  tileList.innerHTML = links.map(getListItemFromLink).join('');
}

function updateTileLinks(){
  dronedeployApiReady()
    .then(getCurrentPlanId)
    .then((planId) => getTiles(planId, layer.value, parseInt(zoom.value)))
    .then(drawTileLinksToScreen)
}

zoom.addEventListener('change', updateTileLinks)
layer.addEventListener('change', updateTileLinks)
updateTileLinks();

</script>
  
</body>
</html>
```