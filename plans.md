# Plans

### Plans.update

** Overview **

```javascript
const planIdToUpdate = String;
const fieldsToUpdate = {
  // These are the two fields that can be updated on the plan
  name: String,
  geometry: {lat: number, lng: number}
};
window.dronedeploy.Plans.update(planIdToUpdate, fieldsToUpdate);
```

*Note: Save the plan's geometry on the planning page to change the drone's flight path.*

** Example Call ** 
```javascript
window.dronedeploy.Plans.update('57e0761f21303e5214b6ae31', {
  name: 'New Name',
  geometry: [
    {lat: 56.567259707222206,lng: -78.90349675},
    {lat: 37.717259707222226,lng: -78.88330925000001},
    {lat: 37.70100590388889,lng: -78.88330925000001},
    {lat: 37.70100590388889,lng: -78.90349675}
  ]
});

```

### Plans.getCurrentlyViewed

** Overview ** 

Returns the plan that is the currently visible to the user. For example, if the user is on the datapage the returned plan will be the plan they are looking at. The same applies for mapengine, planning, and the flight page.

** Example Call ** 
```javascript
window.dronedeploy.Plans.getCurrentlyViewed()
  .subscribe((plan) => {
    // Will be called each time the plan changes
    console.log(plan)
   })

```

** Example Response ** 
```json
{
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
  "exports": [
    {
      "url": "https://s3.amazonaws.com/drone_assets/1474328095_DANIELINSPIRE/preview.zip?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1474749929&Signature=kq6%2BIt10q38s2gEzajpE%2F0s0yFM%3D",
      "name": "Preview"
    },
    {
      "url": "https://s3.amazonaws.com/drone_assets/1474328095_DANIELINSPIRE/model.zip?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1474749929&Signature=jybEoaQTukc%2B6Fj8qjr9a7dUGQ0%3D",
      "name": "3D Model"
    },
    {
      "url": "https://s3.amazonaws.com/drone_assets/1474328095_DANIELINSPIRE/points.zip?AWSAccessKeyId=AKIAISEWUBLV6Q6M3S3A&Expires=1474749929&Signature=YXHx74fwMmn%2BFcK3%2BKQ7YsR08iE%3D",
      "name": "Points"
    }
  ],
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
  "username": "daniel@dronedeploy.com"
}
```