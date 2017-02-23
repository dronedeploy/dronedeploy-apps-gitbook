## Map

What many developers think of as a map is known as a plan inside the API. Plans refer to information about the users flights or processed data. Please see [Plans](/plans.md) for information about how to modify and access plan information.

The map api exposes methods for developers to interact with the map on the user's screen.

* [Map.addImageOverlay](#mapaddimageoverlay)
* [Map.panTo](#mappanto)
* [Map.addTileLayer](#mapaddtilelayer)
* [Map.addPolygon](#mapaddpolygon)

### Map.addImageOverlay

### Map.panTo

### Map.addTileLayer

### Map.addPolygon

```
var latLng = {lat: Number, lng: Number};
var optionalOptions = {
  color: String,
  fill: Boolean,
  fillColor: String,
  opacity: Number,
  weight: Number,
};
dronedeployApi.Map.addPolygon(latLng, optionalOptions)
  .subscribe((annotation) => console.log(annotation));
```



