# Tiles

## Tiles.get

**Overview**
```javascript
const planId = String;
const layerName = 'ortho' || 'dem';
const zoom = Number; // Common zoom levels are [16, 17, 18, 19, 20, 21]
window.dronedeploy.Tiles.get({planId, layerName, zoom})
  .subscribe((tileInformation) => console.log(tileInformation));
```

**Example Call**
```javascript
window.dronedeploy.Tiles.get({planId: '', layerName: 'ortho', zoom: 16})
  .subscribe((tileInformation) => resolve(tileInformation));
```

**Example Response**
```javascript
{
}
```