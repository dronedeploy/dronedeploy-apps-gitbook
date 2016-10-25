# Exporter

- [Orthomosaic Export](#orthomosaic-export)
- [NDVI Toolbox Export](#ndvi-toolbox-export)
- [Elevation Export](#elevation-export)
- [3D Export](#3d-export)
- [Point Cloud Export](#point-cloud-export)

## Orthomosaic Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'Orthomosaic',
  email: ['example@dronedeploy.com']
}).subscribe((exportId) => console.log(exportId));
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
window.dronedeploy.Exporter.send(exportOptions)
  .subscribe((exportId) => console.log(exportId));
```

## NDVI Toolbox Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'NDVI Toolbox',
  email: ['example@dronedeploy.com']
}).subscribe((exportId) => console.log(exportId));
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
window.dronedeploy.Exporter.send(exportOptions)
  .subscribe((exportId) => console.log(exportId));
```

## Elevation Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: 'Elevation Toolbox',
  email: ['example@dronedeploy.com']
}).subscribe((exportId) => console.log(exportId));
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
window.dronedeploy.Exporter.send(exportOptions)
  .subscribe((exportId) => console.log(exportId));
```

## 3D Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: '3D Model',
  email: ['example@dronedeploy.com']
}).subscribe((exportId) => console.log(exportId));
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
window.dronedeploy.Exporter.send(exportOptions)
  .subscribe((exportId) => console.log(exportId));
```

## Point Cloud Export

**Example Call**

```javascript
window.dronedeploy.Exporter.send({
  layer: '3D Model',
  email: ['example@dronedeploy.com']
}).subscribe((exportId) => console.log(exportId));
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
window.dronedeploy.Exporter.send(exportOptions)
  .subscribe((exportId) => console.log(exportId));
```