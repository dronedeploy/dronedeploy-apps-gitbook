# API
All communication to DroneDeploy is available through `window.dronedeploy` inside your app. 

You can listen to the result of any `window.dronedeploy` call via promises.

```javascript
window.dronedeploy.Class.method(exampleParameter).then(function(response){
  console.log(response);
}, function(error){
  console.log(error);
});
```

*Note: The promise polyfill is loaded into every app. [Read More about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*

If you are subscribing to a stream of data and want to recieve multiple values you should use `.subscribe`. 

```javascript
dronedeploy.Class.method(exampleParameter).subscribe(
  function(result){ console.log(result)},
  function(error){ console.log(error)},
  function(){ console.log('complete')}
); 
```

*Note: This pattern is inspired by rxjs, but rxjs is not loaded into apps.*