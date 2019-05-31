# Exporter

**Exporter.send**

* [Orthomosaic Export](#orthomosaic-export)
* [NDVI Toolbox Export](#ndvi-toolbox-export)
* [Elevation Export](#elevation-export)
* [3D Export](#3d-export)
* [Point Cloud Export](#point-cloud-export)

**Exporter.list**

* [Exporter.list](#exporterlist)

**Exporter.getSelectedAutoExportParams**

* [Exporter.getSelectedAutoExportParams](#exportergetselectedautoexportparams)

**Exporter.createAutoExport**

* [Exporter.createAutoExport](#exportercreateautoexport)

## Exporter.send

### Orthomosaic Export

**Example Call**

```javascript
dronedeployApi.Exporter.send({
  layer: 'Orthomosaic',
  email: ['example@dronedeploy.com']
}).then(function(exportId){ console.log(exportId) });
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
  planId: [String], // defaults to currently visible map
  webhook: {
    url: 'http://www.url-to-ping-on-complete.com/any-params-here' // recieve the export document when its complete
  }
};
dronedeployApi.Exporter.send(exportOptions)
  .then(function(exportId){ console.log(exportId) });
```

[**Full Example**](/exporter/example-exporter.send.md)

### NDVI Toolbox Export

**Example Call**

```javascript
dronedeployApi.Exporter.send({
  layer: 'NDVI Toolbox',
  email: ['example@dronedeploy.com']
}).then(function(exportId){ console.log(exportId) });
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
  planId: [String], // defaults to currently visible map
  webhook: {
    url: 'http://www.url-to-ping-on-complete.com/any-params-here' // recieve the export document when its complete
  }
};
dronedeployApi.Exporter.send(exportOptions)
  .then(function(exportId){ console.log(exportId) });
```

[**Full Example**](/exporter/example-exporter.send.md)

### Elevation Export

**Example Call**

```javascript
dronedeployApi.Exporter.send({
  layer: 'Elevation Toolbox',
  email: ['example@dronedeploy.com']
}).then(function(exportId){ console.log(exportId) });
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
  planId: [String], // defaults to currently visible map
  webhook: {
    url: 'http://www.url-to-ping-on-complete.com/any-params-here' // recieve the export document when its complete
  }
};
dronedeployApi.Exporter.send(exportOptions)
  .then(function(exportId){ console.log(exportId) });
```

[**Full Example**](/exporter/example-exporter.send.md)

### 3D Export

**Example Call**

```javascript
dronedeployApi.Exporter.send({
  layer: '3D Model',
  email: ['example@dronedeploy.com']
}).then(function(exportId){ console.log(exportId) });
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: '3D Model',
  email: [String, String],

  // optional
  planId: [String], // defaults to currently visible map
  webhook: {
    url: 'http://www.url-to-ping-on-complete.com/any-params-here' // recieve the export document when its complete
  }
};
dronedeployApi.Exporter.send(exportOptions)
  .then(function(exportId){ console.log(exportId) });
```

[**Full Example**](/exporter/example-exporter.send.md)

### Point Cloud Export

**Example Call**

```javascript
dronedeployApi.Exporter.send({
  layer: 'Point Cloud',
  email: ['example@dronedeploy.com']
}).then(function(exportId){ console.log(exportId) });
```

**Parameters**

```javascript
const exportOptions = {
  // required
  layer: 'Point Cloud',
  email: [String, String],

  // optional
  file_format: ['las', 'xyz'], // defaults to 'las'
  max_points: ['MAX', Number], // defaults to 'MAX'
  planId: [String], // defaults to currently visible map
  webhook: {
    url: 'http://www.url-to-ping-on-complete.com/any-params-here' // recieve the export document when its complete
  }
};
dronedeployApi.Exporter.send(exportOptions)
  .then(function(exportId){ console.log(exportId) });
```

[**Full Example**](/exporter/example-exporter.send.md)

## Exporter.list

**Overview**

List all the exports on the users account or for a specific plan.

**Example Call**

```javascript
// get all exports
dronedeployApi.Exporter.list()
  .then(function(exports){ console.log(exports) });

// get exports for planId
dronedeployApi.Exporter.list({planId: '5803c075d0ec0a44f0a75a86'})
  .then(function(exports){ console.log(exports) });
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

[**Full Example**](/exporter/example-exporter.get3dmodellink.md)

## Exporter.getSelectedAutoExportParams

**Overview**

Gets selected parameters from Auto Exports form. Right now it returns only fileFormat.

**Example Call**

```javascript
dronedeployApi.Exporter.getSelectedAutoExportParams()
  .then((autoExportParams) => console.log(autoExportParams));
```

**Example Response**

```javascript
{
  fileFormat: "geotiff"
}
```

[**Full Example**](/exporter/example-exporter.getselectedautoexportparams.md)


## Exporter.createAutoExport

**Overview**

Creates new AutoExportSetting.

**Example Call**

```javascript
dronedeployApi.Exporter.createAutoExport(folderEndpoint = 'https://fake-folder-endpoint', folderConfig = JSON.stringify({ folderId: 'folderId' }))
  .then((autoExportSetting) => console.log(autoExportSetting));
```

**Example Response**

```javascript
{
  data: {
    createAutoExportSetting: {
      autoExportSetting: {
        application: {
          id: "Application:sdjncksnckd"
        }
        dateCreation: "Mon Dec 24 2018 10:33:30 GMT+0100"
        exportParameters: {
          emails: [ ]
          fileFormat: "GEO_TIFF"
          layer: "ORTHOMOSAIC"
          merge: true
          projection: 3857
          resolution: 0  
        }
        folderConfig: "{ \"folder_id\": \"1234adc\"}"
        folderEndpoint: "https://fake-folder-endpoint"
        id: "123ABC"
        project: {
          id: "Project:123ABC456XYZ"
        }
      }
    }
  }
}
```
