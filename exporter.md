# Exporter

**Exporter.send**
- [Orthomosaic Export](#orthomosaic-export)
- [NDVI Toolbox Export](#ndvi-toolbox-export)
- [Elevation Export](#elevation-export)
- [3D Export](#3d-export)
- [Point Cloud Export](#point-cloud-export)

**Exporter.getPointCloudLink**
- [Exporter.getPointCloudLink](#exportergetpointcloudlink)

**Exporter.get3DModelLink**
- [Exporter.get3DModelLink](#exporterget3dmodellink)

**Exporter.list (Arrives 11/1/2016)**
- [Exporter.list](#exporterlist)

## Exporter.send

### Orthomosaic Export

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

### NDVI Toolbox Export

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

### Elevation Export

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

### 3D Export

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

### Point Cloud Export

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

## Exporter.getPointCloudLink

**Overview**

Get the URL to download the Point Cloud

**Example Call**

```javascript
window.dronedeploy.Exporter.getPointCloudLink(planId)
  .subscribe((downloadLink) => console.log(exportId));
```

**Parameters**

```javascript
planId
```

## Exporter.get3DModelLink

**Overview**

Get the URL to download the 3D Model

**Example Call**

```javascript
window.dronedeploy.Exporter.get3DModelLink(planId)
  .subscribe((downloadLink) => console.log(exportId));
```

**Parameters**

```javascript
planId
```

## Exporter.list
**NOTE: ** Arrives 11/1/2016

**Overview**

List all the exports on the users account or for a specific plan.

**Example Call**
```javascript
// get all exports
window.dronedeploy.Exporter.list();

// get exports for planId
window.dronedeploy.Exporter.list({planId: '5803c075d0ec0a44f0a75a86'});
```

**Example Response**
```javascript
[
  {
    "username": "daniel@dronedeploy.com",
    "status": "complete",
    "plan_id": "57ffb7cf96fef40c53c89168",
    "log": "1476376527_DANIELOPENPIPELINE",
    "parameters": {
      "layer": "Orthomosaic",
      "map_id": "57ffb803cb5fda187d43a90c",
      "projection": "3857",
      "file_format": "geotiff",
      "url": "https://tiles_test.dronedeploy.com/unsafe/smart/filters:crop('{setting_crop_polygon}')/https%3A%2F%2Fs3.amazonaws.com/drone.deploy.tiles/{url}/{z}/{x}/{y}.png",
      "merge": true,
      "env": "test",
      "resolution": "5",
      "email": [
        "daniel@dronedeploy.com"
      ],
      "view": "58094649929d247d64aea82a"
    },
    "download_path": "https://s3.amazonaws.com/drone-deploy-exports/1476376527_DANIELOPENPIPELINE/UntitledMapsddfsdf_Orthomosaic_ThuOct20223610.zip?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1479595007&Signature=AWSSLZIqt%2F71R540GBI2e3mif9c%3D",
    "failure_info": 0,
    "parameter_hash": null,
    "id": "580946b2929d247d64aea82b",
    "date_complete": 1477003302413,
    "date_started": 1477002982786,
    "date_creation": 1477002930264
  },
]
```