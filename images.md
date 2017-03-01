# Images

## Images.get

** Overview **

```javascript
/** 
* This call will return an array of image objects
*
* As shown below image objects contain a link to the full size image,
* an icon link, exif data, and other useful metadata.
*/
const planId = String;
// defaults to {height: 200, width: 200}
const optionalIconSize = {
    width: Number, 
    height: Number
};
dronedeployApi.Images.get(planId, optionalIconSize);
```

**Example Call**

```javascript
dronedeployApi.Images.get('5605c0e5752afc005a000004', {width: 200, height: 200})
  .then(function(arrayOfImageInformation){ console.log(arrayOfImageInformation) })
```

Note: Values under `data.exif` are not normalized and vary depending on the camera.

**Example Response**

```json
[{
  "command": "log",
  "data": {
      "alt": 90.8,
      "exif": {
          "Aperture": 2.8,
          "ApertureValue": 2.0,
          "DateTimeOriginal": "2015:08:01 15:03:39",
          "FOV": "84.0 deg",
          "FocalLength": "3.6 mm",
          "FocalLength35efl": "3.6 mm (35 mm equivalent: 20.0 mm)",
          "FocalLengthIn35mmFormat": "20 mm",
          "GPSAltitude": "90.8 m Above Sea Level",
          "GPSAltitudeRef": "Above Sea Level",
          "GPSLatitude": "38 deg 25' 36.57\" N",
          "GPSLatitudeRef": "North",
          "GPSLongitude": "123 deg 6' 52.70\" W",
          "GPSLongitudeRef": "West",
          "GPSPosition": "38 deg 25' 36.57\" N, 123 deg 6' 52.70\" W",
          "GPSVersionID": "3.2.0.0",
          "ISO": 100,
          "Model": "FC300X",
          "ShutterSpeed": "1/320",
          "ShutterSpeedValue": "1/320",
          "SourceFile": "/mnt/dd/data/1483668755_JEREMYADMOPENPIPELINE/images/326966208714.jpg"
      },
      "filename": "326966208714.jpg",
      "gps_accuracy": {
          "xy": null,
          "z": null
      },
      "heading": 89.99995683940455,
      "issues": {},
      "lat": 38.426824999999994,
      "lng": -123.11463888888889,
      "pitch": 0,
      "projections": [
          {
              "lat": 38.42745461093814,
              "lng": -123.11523156716827
          },
          {
              "lat": 38.426195385377326,
              "lng": -123.1152315556236
          },
          {
              "lat": 38.42619538607683,
              "lng": -123.11404622094338
          },
          {
              "lat": 38.42745461163766,
              "lng": -123.11404621182035
          }
      ],
      "roll": 0,
      "session": "1483668755_JEREMYADMOPENPIPELINE",
      "stitcher_information": {
          "pitch_est": -0.100635,
          "rms_err": 1.851032,
          "roll_est": 1.394377,
          "x_err": -1.394867,
          "y_err": 1.188053,
          "yaw_est": 85.159741,
          "z_err": -0.263052
      },
      "yaw": 0
  },
  "date_creation": {
      "$date": "2015:08:01 15:03:39"
  },
  "drone_device_id": "1483668755_JEREMYADMOPENPIPELINE",
  "drone_session_id": "1483668755_JEREMYADMOPENPIPELINE",
  "name": "camera",
  "path": "https://s3.amazonaws.com/drone_images/1483668755_JEREMYADMOPENPIPELINE/326966208714.jpg?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1486252800&Signature=jL2aJdK1qgvnoKn1avYgXjIsXY0%3D",
  "signed_filename": "326966208714.jpg?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1486252800&Signature=jL2aJdK1qgvnoKn1avYgXjIsXY0%3D"
}]
```

**[Full Example](images/example-images.get.md)**
