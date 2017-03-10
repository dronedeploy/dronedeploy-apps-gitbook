\`\`\`

&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;

&lt;head&gt;

  &lt;meta charset="UTF-8"&gt;

  &lt;title&gt;Document&lt;/title&gt;

  &lt;script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/waypoint-calculation-helper.js"&gt;&lt;/script&gt;

&lt;/head&gt;

&lt;body&gt;



&lt;div&gt;Waypoint Updates Count: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/div&gt;



&lt;script&gt;

function isEven\(num\){

  return num % 2 === 0;

}



function waypointCalculationFunction\(currentPlan\){

  return new Promise\(\(resolve\) =&gt; {

    const newWaypoints = currentPlan.waypoints.map\(\(waypoint, index\) =&gt; {

      const alt = 50 + \(index \* 3\) + \(isEven\(index\) ? -10 : 10\);

      return {alt, lat: waypoint.lat, lng: waypoint.lng}

    }\);

    resolve\(newWaypoints\);

  }\);

}



// Waypoints need to be recalculated everytime the user changes 

// the geometry or other fields on the plan

// this is a helper function to assist in setting the waypoints on 

// a plan

registerWaypointCalculationFunction\(waypointCalculationFunction\)

  .subscribe\(function\(successMessage\){

    document.querySelector\('\#count'\).innerHTML = parseInt\(document.querySelector\('\#count'\).innerHTML\) + 1;

  }, function\(e\){

    console.log\('Error:', e\);

  }\);

&lt;/script&gt;

  

&lt;/body&gt;

&lt;/html&gt;



\`\`\`

