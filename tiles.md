# Tiles

## Tiles.get

**Overview**
```javascript
const planId = String;
const layerName = 'ortho' || 'dem';
const zoom = number;
window.dronedeploy.Tiles.get({planId, layerName, zoom})
  .subscribe((tileInformation) => resolve(tileInformation));
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