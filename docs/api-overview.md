# API

### App Zones

{% youtube %}https://www.youtube.com/watch?v=gsBPcHuA8r8&index=2&list=PLqOge_z8yN2EJ4ftDaY1XdbaneCRQTnvq{% endyoutube %}

### API Overview

{% youtube %}https://www.youtube.com/watch?v=ilrWHM95DY0&index=3&list=PLqOge_z8yN2EJ4ftDaY1XdbaneCRQTnvq{% endyoutube %}

All communication to DroneDeploy is available by instantiating the global api object

```javascript
new DroneDeploy({version: 1}).then(function(dronedeployApi){
  console.log(dronedeployApi);
})
```

You can listen to the result of any `dronedeployApi` call via promises.

```javascript
new DroneDeploy({version: 1}).then(function(dronedeployApi){
  dronedeployApi.Class.method(exampleParameter)
    .then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });
});
```

You can listen to the result of any call via promises.

```javascript
dronedeployApi.Class.method(exampleParameter).then(function(response){
  console.log(response);
}, function(error){
  console.log(error);
});
```

*Note: The promise polyfill is loaded into every app. [Read More about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*

If you are subscribing to a stream of data and want to receive multiple values you should use `.subscribe`. 

```javascript
new DroneDeploy({version: 1}).then(function(dronedeployApi){
  dronedeployApi.Class.method(exampleParameter).subscribe(
    function(result){ console.log(result)},
    function(error){ console.log(error)},
    function(){ console.log('complete')}
  ); 
});
```

*Note: This pattern is inspired by rxjs, but rxjs is not loaded into apps.*
