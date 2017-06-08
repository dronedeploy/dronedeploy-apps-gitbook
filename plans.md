# Plans

**What is a Plan?**

A plan contains the flight data, drone data, image information, and the map assets. The same plan is used across planning, flight, uploading, and post-processed viewing.

**Contents**

* [Plans.getCurrentlyViewed](#plansgetcurrentlyviewed)
* [Plans.all](#plansall)
* [Plans.update](#plansupdate)

### Plans.getCurrentlyViewed

** Overview **

Returns the plan that is the currently visible to the user. For example, if the user is on the datapage the returned plan will be the plan they are looking at. The same applies for mapengine, planning, and the flight page.

** Example Call **

```javascript
// Get the current one time
dronedeployApi.Plans.getCurrentlyViewed()
  .then(function(plan){
    console.log(plan);
  });

// Will be called each time the plan changes
dronedeployApi.Plans.getCurrentlyViewed()
  .subscribe(function(plan){
    console.log(plan);
  });
```

** Example Response **

```json
{
  "accuracy": {
    "xRMSE": 35.527931,
    "yRMSE": 4.964015,
    "zRMSE": 1.343646,
    "gcpAccuracyDownload": "String of the ZIP file",
  },
  "id": "57e0761f21303e5214b6ae31",
  "camera": {
    "v_proj": 0.9,
    "h_proj": 0.9,
    "name": "DJIX3",
    "capture_delay": 0,
    "yres": 2250,
    "xres": 4000,
    "sensor_height": 4.55,
    "sensor_width": 6.17,
    "id": 18,
    "focal": 3.6,
    "min_capture_period": 2
  },
  "deleted": false,
  "sketchfabModel": "https://sketchfab.com/models/cc462c22851847c78768d0318221a963",
  "status": "complete",
  "geometry": [
    {
      "lat": 35.92712713888889,
      "lng": -96.7493288888889
    },
    {
      "lat": 35.92712713888889,
      "lng": -96.74831555555555
    },
    {
      "lat": 35.92519230555555,
      "lng": -96.74831555555555
    },
    {
      "lat": 35.92519230555555,
      "lng": -96.7493288888889
    }
  ],
  "info": {
    "altitude": 75
  },
  "location": {
    "lat": 35.92583194444444,
    "lng": -96.74852777777778
  },
  "name": "Untitled Map",
  "username": "daniel@dronedeploy.com",
  "frontlap": 70,
  "sidelap": 60,
}
```

** plan.status **

* "new":  Before the plan has been flown
* "queued":  Plan is waiting to be processed
* "processing":  Plan is being processed
* "failed":  Plan failed during processing
* "complete":  Plan has finished processing

[**Full Example**](/plans/example-plans.getcurrentlyviewed.md)

[**Full Example - Get Area of Plan**](/plans/example-plans-get-area.md)

### Plans.all

** Overview **

Get an array of all the users plans.

** Example Call **

```javascript
// Get all the users plan one time
dronedeployApi.Plans.all()
  .then(function(plans){
    console.log(plans);
  });

// Will be called each time a plan changes
dronedeployApi.Plans.all()
  .subscribe(function(plans){
    console.log(plans);
  });
```

** Example Response **

```javascript
[
  {
    "id": "17e0761f21303e5214b6ae31",
    "camera": {...},
    "deleted": false,
    "geometry": [...],
    "info": {...},
    "location": {...},
    "name": "Plan 1",
    "username": "daniel@dronedeploy.com",
    "sketchfabModel": "https://sketchfab.com/models/cc462c22851847c78768d0318221a963",
  },
  {
    "id": "87e0761f21303e5214b6ae31",
    "camera": {...},
    "deleted": false,
    "geometry": [...],
    "info": {...},
    "location": {...},
    "name": "Plan 2",
    "username": "daniel@dronedeploy.com",
    "sketchfabModel": "https://sketchfab.com/models/dd462c22851847c78768d0318221a963",
  }
]
```

[**Full Example**](/plans/example-plans.all.md)

### Plans.update

** Overview **

Plans.update allows you to update specific fields within the flight plan model.

Please reference the fieldsToUpdate variable in the following code for the fields updatable by this api method.

```javascript
const planIdToUpdate = String;
const fieldsToUpdate = {
  // These are the fields that can be updated on the plan
  name: String,
  altitude: Number, // in meters
  geometry: [{lat: Number, lng: Number}, ....],
  frontlap: Number,
  sidelap: Number,
  geometry: {lat: number, lng: number},
  frontlap: Number, // allowed range: 15 - 95%
  sidelap: Number, // allowed range: 15 - 95%
  camera: {
    id: Number,
    capture_delay: Number,
    focal: Number,
    h_proj: Number,
    min_capture_period: Number,
    name: String,
    sensor_height: Number,
    sensor_width: Number,
    v_proj: Number,
    xres: Number,
    yres: Number,
  },
  waypoints: [
    {
      alt: Number // the altitude of the waypoint - in meters
      lat: Number // the latitude of the waypoint - floating point
      lng: Number //the longitude of the waypoint - floating point
    }
  ]
};
dronedeployApi.Plans.update(planIdToUpdate, fieldsToUpdate);
```

**Note: **Save the plan's geometry on the planning page to automatically re-calculate the drone's flight path.

**Note: **Save the plan's waypoints on the planning page to change the drones flight path manually. If you decide your app needs to alter waypoints, this is considered a privileged action and the user will be asked if they wish to allow it on a per plan basis.

**Warning: **Waypoint changes may be overwritten my manual updates by the user to their flight geometry via the interactive map. Any waypoint changes should be in direct response to a [Plans.getCurrentlyViewed](https://www.gitbook.com/book/dronedeploy/dronedeploy-apps/edit#), and either ignore, or handle changes to geometry, based on what your app is trying to achieve. [Please see this example for an example.](/plans/example-plans.update-waypoints.md)

**Warning: **Changing geometry will overwrite any changes to waypoints, by recalculating the optimal flight path as per DD's calculation code. [Please see this example for an example.](/plans/example-plans.update-waypoints.md)

** Example Call **

```javascript
dronedeployApi.Plans.update('57e0761f21303e5214b6ae31', {
  name: 'New Name',
  geometry: [
    {lat: 56.567259707222206,lng: -78.90349675},
    {lat: 37.717259707222226,lng: -78.88330925000001},
    {lat: 37.70100590388889,lng: -78.88330925000001},
    {lat: 37.70100590388889,lng: -78.90349675}
  ],
  frontlap: 70, // allowed range: 15 - 95%
  sidelap: 45, // allowed range: 15 - 95
  waypoints: [
    {lat: 56.567259707222206,lng: -78.90349675, alt: 100},
    {lat: 37.717259707222226,lng: -78.88330925000001, alt: 50},
    {lat: 37.70100590388889,lng: -78.88330925000001, alt: 50},
    {lat: 37.70100590388889,lng: -78.90349675, alt: 50}
  ],
  camera: {
    id: 11245,
    capture_delay: 0,
    focal: 4.7,
    h_proj: 0.9,
    min_capture_period: 2,
    name: 'MP4K',
    sensor_height: 4.55,
    sensor_width: 6.17,
    v_proj: 0.9,
    xres: 4000,
    yres: 3000,
  },
});
```

[**Full Example**](/plans/example-plans.update.md)

[**Full Example - Change Waypoints**](/plans/example-plans.update-waypoints.md)

