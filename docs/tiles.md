# Tiles

## Tiles.get

**Overview**

Tiles are the images that the user sees that comprise the map. As the user zooms it loads a new tile layer of the tile pyramid.

![](/docs/assets/TilePyramidSmall.jpg)

Most maps start zoom level 16 \(Z\) and get more detailed as the the zoom gets higher. Many maps only have tiles upto zoom level 20 or 21 a few very detailed maps may have zoom level 25.

Many mapping libraries support tile pyramids, I.E. filling in these values `/{z}/{x}/{y}`as the user pans and scrolls. Included libraries are [leaflet, ](http://leafletjs.com/)[mapbox gl](https://github.com/mapbox/mapbox-gl-js), [google maps](https://developers.google.com/maps/), and many more.

**API Parameters**

```javascript
const planId = String;
const layerName = 'ortho' || 'dem';

dronedeployApi.Tiles.get({planId, layerName})
  .then(function(tileInformation){ console.log(tileInformation) });
```

**Example Call**

```javascript
dronedeployApi.Tiles.get({planId: '5605c0e5752afc005a000004', layerName: 'ortho'})
  .then(function(tileInformation){ console.log(tileInformation) });
```

**NOTE: **The two example maps that come with your account don't work work this API because you don't own those maps. Please [visit this page](https://dronedeploy.gitbooks.io/dronedeploy-apps/content/how-to-upload-an-example-project.html) for an example dataset.

**Example Response**

**template:** This is the tile url template dronedeploy uses to fetch tiles on the map as the user scrolls around. Z represents the zoom level, X and Y represent the coordinates in [mercator projection](https://msdn.microsoft.com/en-us/library/bb259689.aspx).

**expires** UTC timestamp for 30 days

```javascript
{
  expires: 1478214226365,
  template: "https://public-tiles.dronedeploy.com/1477521235_DILLONOPENPIPELINE_ortho_xul/{z}/{x}/{y}.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wdWJsaWMtdGlsZXMuZHJvbmVkZXBsb3kuY29tLzE0Nzc1MjEyMzVfRElMTE9OT1BFTlBJUEVMSU5FX29ydGhvX3h1bC8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNDc4MjE0MjI2fX19XX0_&Signature=RxAMowpa1AxVdJ1HFdduwllksyyP2XGgEteisdAqjPrheTLIyq7-a1Xk68Tx0kxquM9-cY-sY8kbmmmwdpsQgLPc~mg5MlXRICuCunZ~qdZ-9qVMBeTTgH8ZxAqnPfbQ764y~f6CfH1q~gCT0NTHTT4X8~MKmCjztWvhB3ji6NkipzxYrm4osf60FFjf8IuaOUvBtzOv5Q1J6qXXiyRG4AtDmZWeVlSUQ7UH1UtzQpIPfLqq~EgX7XNDqt12rRckkRGWowm5uOGFT62tQ2fgF77KZCScJZ4HbmRFUHcD27GME~5uY6gakA~ydKDIcgX8emKpbENGyjdWJZ1lGggQFA__&Key-Pair-Id=APKAJXGC45PGQXCMCXSA",
}
```

[**Full Example - Get Tiles As Array**](/tiles/example-tiles-as-array.md)
[**Full Example - Render Tiles in Map**](/tiles/render-tiles-example.md)

