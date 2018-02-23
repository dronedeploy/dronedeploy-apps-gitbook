The below example shows how to update the waypoints and respond to any changes the user makes the above map. For example if the user moves the flight geometry, DroneDeploy recalculates the entire plan and then notifies apps who then have the ability to override fields. Therfore, you can't set the waypoints once, you have to reset the waypoints after every user change.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <!-- This is a helper file we created. It provides the registerWaypointCalculationFunction.-->
  <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/waypoint-calculation-helper.js"></script>
</head>
<body>

<div>Waypoint Updates Count: <span id="count">0</span></div>

<script>
function isEven(num){
  return num % 2 === 0;
}

// This function needs to return a promise
function waypointCalculationFunction(currentPlan){
  return new Promise((resolve) => {
    const newWaypoints = currentPlan.waypoints.map((waypoint, index) => {
      const alt = 50 + (index * 3) + (isEven(index) ? -10 : 10);
      return {alt, lat: waypoint.lat, lng: waypoint.lng}
    });
    resolve(newWaypoints);
  });
}

// Waypoints need to be recalculated everytime the user changes 
// the geometry or other fields on the plan
// this is a helper function to assist in setting the waypoints on 
// a plan
registerWaypointCalculationFunction(waypointCalculationFunction)
  .subscribe(function(successMessage){
    document.querySelector('#count').innerHTML = parseInt(document.querySelector('#count').innerHTML) + 1;
  }, function(e){
    console.log('Error:', e);
  });
</script>
  
</body>
</html>
```
