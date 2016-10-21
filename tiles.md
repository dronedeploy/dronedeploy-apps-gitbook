# Tiles (Arrival 10/25/2016)

## Tiles.get

**Overview**
```javascript
const planId = String;
const layerName = 'ortho' || 'dem';
const zoom = Number; // Common zoom levels are [16, 17, 18, 19, 20, 21]
window.dronedeploy.Tiles.get({planId, layerName, zoom})
  .subscribe((tileInformation) => console.log(tileInformation));
```

[See an example!](get_tiles.md)

**Example Call**
```javascript
window.dronedeploy.Tiles.get({planId: '5605c0e5752afc005a000004', layerName: 'ortho', zoom: 16})
  .subscribe((tileInformation) => resolve(tileInformation));
```

**Example Response**

**template:** This is the tile url template dronedeploy uses to fetch tiles on the map as the user scrolls around. Z represents the zoom level, X and Y represent the coordinates in [mercator projection](https://msdn.microsoft.com/en-us/library/bb259689.aspx). 

**tiles:** An array of links to the tile images at the specified zoom level.

```javascript
{
    "template": "https://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/{z}/{x}/{y}.png",
    "tiles": [
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60621/103005.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60621/103006.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60621/103007.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60622/103005.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60622/103006.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60622/103007.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60623/103005.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60623/103006.png",
        "http://s3.amazonaws.com/drone.deploy.tiles/1476376527_DANIELOPENPIPELINE_ortho_lwq/18/60623/103007.png"
    ]
}
```