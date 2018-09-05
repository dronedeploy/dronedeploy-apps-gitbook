# CadOverlay

**Overview**

Import an overlay image directly from a third party source using a download url.

**Example Call**

```javascript
const url = 'https://www.mysite.com/my-overlay-image.png';
// Configure any headers required by the download site
// NOTE: headers may not be needed if using a signed download url
const headers = {
  "Authorization": "Bearer mysecretbearertoken",
  "X-Custom": "custom-header-value-for-mysite",
};
const name = 'My Overlay Image Name'

// Call the import function
// NOTE: headers and name are optional parameters
dronedeployAPI.CadOverlay.import(url, headers, name);
```

**How to Use**

This API will be most effective when used with the App Zone in the Overlay Selection
dialog, but can also be used from the App Zone on the Data Page as well.

1. Drag your plugin code into the desired App Zone
2. Interact with your plugin UI to trigger your `import` call
3. Following overlay download, the image will appear and can be named and positioned on the map


**NOTE:** This API supports the same file types for Overlays as the main DroneDeploy application:
- PDF
- PNG
- SVG

For more general information about Overlays, click [here](https://support.dronedeploy.com/docs/overlay-cad-files-with-dronedeploy)

[**Full Example**](/cadoverlay/example-overlay.basic.md)