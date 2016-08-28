## Orthomosaic Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'Orthomosaic',
  email: ['example@dronedeploy.com']
})
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: 'Orthomosaic',
  email: [String, String],
  
  //optional
  file_format: ['geotiff', 'jpg'], // default to geotiff
  merge: Boolean, // defaults to true
  projection: Number, // defaults to 3857
  resolution: ['native', Number], // defaults to 5 (cm/px)
  planId: [String] // defaults to currently visible map
};
window.dronedeploy.Exporter.send(exportOptions);
```

## NDVI Toolbox Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'NDVI Toolbox',
  email: ['example@dronedeploy.com']
})
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: 'NDVI Toolbox',
  email: [String, String],
  
  //optional
  file_format: ['geotiff', 'jpg', 'shapefile'], // default to geotiff
  merge: Boolean, // defaults to true
  projection: Number, // defaults to 3857
  resolution: ['native', Number], // defaults to 5 (cm/px)
  planId: [String] // defaults to currently visible map
};
window.dronedeploy.Exporter.send(exportOptions);
```

## Elevation Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'Elevation Toolbox',
  email: ['example@dronedeploy.com']
})
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: 'Elevation Toolbox',
  email: [String, String],
  
  //optional
  file_format: ['geotiff', 'jpg', 'demtiff', 'contourshp', 'contourdxf'], // default to geotiff
  merge: Boolean, // defaults to true
  projection: Number, // defaults to 3857
  resolution: ['native', Number], // defaults to 5 (cm/px)
  contour_interval: [Number], // default to 1 (meter)
  planId: [String] // defaults to currently visible map
};
window.dronedeploy.Exporter.send(exportOptions);
```

## 3D Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: '3D Model',
  email: ['example@dronedeploy.com']
})
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: '3D Model',
  email: [String, String],
  
  // optional
  planId: [String] // defaults to currently visible map
};
window.dronedeploy.Exporter.send(exportOptions);
```

## Point Cloud Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: '3D Model',
  email: ['example@dronedeploy.com']
})
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: '3D Model',
  email: [String, String],
  
  // optional
  file_format: ['las', 'xyz'], // defaults to 'las'
  max_points: ['MAX', Number], // defaults to 'MAX'
  planId: [String] // defaults to currently visible map
};
window.dronedeploy.Exporter.send(exportOptions);
```