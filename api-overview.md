# API
All communication to DroneDeploy are available through `window.dronedeploy` inside your app. 

When a `window.dronedeploy` method is invoked you can listen to results by using the following pattern.

```
dronedeploy.Class.method(exampleParameter).subscribe(
  (result) => console.log(result),
  (error) => console.log(error),
  () => console.log('complete')
); 
```

*Note: This pattern is inspired by rxjs, but rxjs is not loaded into apps.*