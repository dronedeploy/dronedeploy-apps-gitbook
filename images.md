# Images

## Images.get

** Parameters **

```javascript
var planId = String;
var iconSize = {
    width: Number,
    height: Number
};
window.dronedeploy.Images.get(planId, iconSize);
```

**Example Call**
```javascript
window.dronedeploy.Images.get('57e0761f21303e5214b6ae31', {width: 200, height: 200})
  .subscribe((arrayOfImageInformation) => console.log(arrayOfImageInformation))
```

**Example Image**
```json
{
  "name": "camera",
  "signed_filename": "dji_0039.jpg?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1475283600&Signature=tmZimGbGrYCaSSiuYD%2BxPv%2FXt%2FU%3D",
  "drone_session_id": "1474328095_DANIELINSPIRE",
  "command": "log",
  "drone_device_id": "1474328095_DANIELINSPIRE",
  "path": "https://s3.amazonaws.com/drone_images/1474328095_DANIELINSPIRE/dji_0039.jpg?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1475283600&Signature=tmZimGbGrYCaSSiuYD%2BxPv%2FXt%2FU%3D",
  "data": {
    "exif": {
      "MPF": {
        "MPFVersion": "0010",
        "ImageUIDList": "(Binary data 66 bytes)",
        "MPImageLength": 282257,
        "MPImageFlags": "Dependent child image",
        "TotalFrames": 1,
        "MPImageType": "Large Thumbnail (VGA equivalent)",
        "MPImageStart": 4805587,
        "DependentImage2EntryNumber": 0,
        "NumberOfImages": 2,
        "DependentImage1EntryNumber": 0,
        "MPImageFormat": "JPEG"
      },
      "EXIF": {
        "YResolution": 72,
        "LightSource": "Unknown",
        "ResolutionUnit": "inches",
        "Compression": "JPEG (old-style)",
        "GPSLongitude": "96 deg 44' 57.36\"",
        "Make": "DJI",
        "Flash": "No flash function",
        "FlashpixVersion": "0010",
        "SceneCaptureType": "Standard",
        "ExposureCompensation": 0,
        "GainControl": "None",
        "YCbCrPositioning": "Centered",
        "XResolution": 72,
        "InteropVersion": "0100",
        "InteropIndex": "R98 - DCF basic file (sRGB)",
        "Contrast": "Normal",
        "GPSAltitudeRef": "Above Sea Level",
        "Saturation": "Normal",
        "ModifyDate": "2015:08:20 10:30:27",
        "ExposureProgram": "Manual",
        "ShutterSpeedValue": "1/500",
        "ColorSpace": "sRGB",
        "XPKeywords": "N",
        "DeviceSettingDescription": "(Binary data 4 bytes)",
        "ExifImageWidth": 4000,
        "ThumbnailOffset": 1614,
        "DateTimeOriginal": "2015:08:20 10:30:27",
        "Orientation": "Horizontal (normal)",
        "SceneType": "Unknown (0)",
        "Software": "v01.19.3422",
        "SubjectDistanceRange": "Unknown",
        "ExposureMode": "Manual",
        "CompressedBitsPerPixel": 3.197291333,
        "ISO": 100,
        "FNumber": 2.8,
        "CustomRendered": "Normal",
        "ApertureValue": 2,
        "FocalLength": "3.6 mm",
        "CreateDate": "2015:08:20 10:30:27",
        "ImageDescription": "DCIM\\100MEDIA\\DJI_0039.JPG",
        "ComponentsConfiguration": "-, Cr, Cb, Y",
        "SubjectDistance": "0 m",
        "ExifImageHeight": 3000,
        "GPSAltitude": "74.9 m",
        "Model": "FC350",
        "GPSVersionID": "3.2.0.0",
        "GPSLongitudeRef": "West",
        "ThumbnailLength": 7892,
        "ExposureTime": "1/500",
        "FileSource": "Digital Camera",
        "MaxApertureValue": 2,
        "XPComment": "0.9.136",
        "Sharpness": "Hard",
        "GPSLatitudeRef": "North",
        "WhiteBalance": "Manual",
        "ExposureIndex": "undef",
        "GPSLatitude": "35 deg 55' 31.83\"",
        "MeteringMode": "Center-weighted average",
        "DigitalZoomRatio": "undef",
        "FocalLengthIn35mmFormat": "20 mm",
        "ExifVersion": "0230"
      },
      "ExifTool": {
        "ExifToolVersion": 9.46
      },
      "SourceFile": "/mnt/dd/data/1474328095_DANIELINSPIRE/images/dji_0039.jpg",
      "Composite": {
        "FOV": "84.0 deg",
        "ImageSize": "4000x3000",
        "HyperfocalDistance": "0.86 m",
        "GPSLongitude": "96 deg 44' 57.36\" W",
        "CircleOfConfusion": "0.005 mm",
        "GPSLatitude": "35 deg 55' 31.83\" N",
        "ThumbnailImage": "(Binary data 7892 bytes)",
        "ScaleFactor35efl": 5.5,
        "FocalLength35efl": "3.6 mm (35 mm equivalent: 20.0 mm)",
        "GPSAltitude": "74.9 m Above Sea Level",
        "GPSPosition": "35 deg 55' 31.83\" N, 96 deg 44' 57.36\" W",
        "PreviewImage": "(Binary data 282257 bytes)",
        "Aperture": 2.8,
        "ShutterSpeed": "1/500",
        "LightValue": 11.9
      },
      "File": {
        "MIMEType": "image/jpeg",
        "BitsPerSample": 8,
        "FilePermissions": "rw-r--r--",
        "FileType": "JPEG",
        "ColorComponents": 3,
        "FileName": "dji_0039.jpg",
        "ExifByteOrder": "Little-endian (Intel, II)",
        "FileAccessDate": "2016:09:20 00:09:20+00:00",
        "FileSize": "4.9 MB",
        "FileModifyDate": "2016:09:19 23:35:10+00:00",
        "ImageWidth": 4000,
        "FileInodeChangeDate": "2016:09:20 00:09:20+00:00",
        "EncodingProcess": "Baseline DCT, Huffman coding",
        "Directory": "/mnt/dd/data/1474328095_DANIELINSPIRE/images",
        "YCbCrSubSampling": "YCbCr4:2:2 (2 1)",
        "ImageHeight": 3000
      }
    },
    "roll": 0,
    "yaw": 0,
    "stitcher_information": {
      "x_err": 0.075887,
      "pitch_est": 5.069889,
      "z_err": 0.005068,
      "yaw_est": 168.665097,
      "roll_est": 5.022502,
      "y_err": 0.747462,
      "rms_err": 0.751322
    },
    "filename": "dji_0039.jpg",
    "session": "1474328095_DANIELINSPIRE",
    "gps_accuracy": {
      "xy": null,
      "z": null
    },
    "projections": [
      {
        "lat": 35.92518669644521,
        "lng": -96.74995751870291
      },
      {
        "lat": 35.92506891272543,
        "lng": -96.74868307715745
      },
      {
        "lat": 35.925829966263606,
        "lng": -96.7485758090105
      },
      {
        "lat": 35.925947751116965,
        "lng": -96.74985026266178
      }
    ],
    "pitch": 0,
    "lat": 35.925508333333326,
    "alt": 74.9,
    "heading": 6.5109686668457085,
    "lng": -96.74926666666667,
    "issues": 0
  },
  "date_creation": {
    "$date": "2015:08:20 10:30:27"
  },
  "icon": "https://tiles_dev.dronedeploy.com/images/thumb/195x195/drone_images/1474328095_DANIELINSPIRE/dji_0039.jpg?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1475283600&Signature=tmZimGbGrYCaSSiuYD%2BxPv%2FXt%2FU%3D"
}
```