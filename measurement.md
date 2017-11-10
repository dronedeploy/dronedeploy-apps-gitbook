# Measurement API

This is a wrapper for our REST measurement API, https://support.dronedeploy.com/v1.0/docs/measurements-api, allowing you to make these calls inside DroneDeploy apps. 

- [Elevation of Point](#elevationofpoint)
- [Elevation of Points](#elevationofpoints)
- [Elevation of Line](#elevationofline)
- [Volume of Points](#elevationofpoints)

## Elevation of Point

** Example Call**

```javascript
dronedeployApi.Measurment.getElevationOfPoint(plan.id, {lat: 35.9272, lng: -96.7493})
  .then(function(jsonResult){
    console.log(jsonResult);
  });
```

**Example Response**

```json
{
  "lat": 35.9272,
  "lng": -96.7493,
  "aspect": 100.57501983642578,
  "elevation": -2.0494751930236816,
  "slope": 7.686941623687744
}
```

**[Full Example](/measurement_example.md)**

## Elevation of Points

**Example Call**

```javascript
dronedeployApi.Measurment.getElevationOfPoints(plan.id, [{lat: 35.9272, lng: -96.7493}, {lat: 35.9272, lng: -96.7493}])
  .then(function(jsonResult){
    console.log(jsonResult);
  });
```

**Example Response**


```json
[
  {
    "lat": 35.9272,
    "lng": -96.7493,
    "aspect": 100.57501983642578,
    "elevation": -2.0494751930236816,
    "slope": 7.686941623687744
  },
  {
    "lat": 35.9282,
    "lng": -96.7493,
    "aspect": 100.57501983642578,
    "elevation": -2.0494751930236816,
    "slope": 7.686941623687744
  },
]
```

**[Full Example](/measurement_example.md)**

## Elevation of Line

**Example Call**

```javascript
dronedeployApi.Measurment.getElevationOfLine(plan.id, [{lat: 35.9272, lng: -96.7493}])
  .then(function(jsonResult){
    console.log(jsonResult);
  });
```

**Example Response**


```json
{
  "length": 107.35063384719186,
  "endpoints": [
    [
      35.926247,
      -96.748958
    ],
    [
      35.926738,
      -96.747933
    ]
  ],
  "dx": 0.5394504213426726,
  "points": 200,
  "profile": [
    -3.2126803398132324,
    -2.9078261852264404,
    -2.5082149505615234,
    ....
  ]  
}
```


**[Full Example](/measurement_example.md)**

## Volume of Points

**Example Call**

```javascript
dronedeployApi.Measurment.getVolume(plan.id, [{lat: 35.9272, lng: -96.7493}, {lat: 35.9272, lng: -96.7493}, {lat: 35.9272, lng: -96.7493}])
  .then(function(jsonResult){
    console.log(jsonResult);
  });
```

**Example Response**


```json
[
  {  
    "baseplane_type": "fit", 
    "cut": 26153.559188015362, 
    "fill": -18900.181208767106, 
    "polygon": "POLYGON(6.535406112670899 46.655990545464206,6.5360498428344735 46.655710711675226,6.535298824310304 46.654561905156164,6.534655094146729 46.654723917810095,6.535406112670899 46.655990545464206)",
    "volume": 7253.377979248256 
  }
]
```


**[Full Example](/measurement_example.md)**
