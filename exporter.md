# Exporter

## Exporter.send

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
  layer: 'Orthomosaic', // required
  email: [string, string], // required
  file_format: ['geotiff', 'jpg'], // default to geotiff
  merge: Boolean, // defaults to true
  projection: Number, // defaults to 3857
  resolution: ['native', Number], // defaults to 5
  planId: [String] // optional 
};
window.dronedeploy.Exporter.send(exportOptions);
```