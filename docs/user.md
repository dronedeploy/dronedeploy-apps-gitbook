# User

## User.get

** Example Call **

```javascript
// Get the user object one time
dronedeployApi.User.get().then(function(user){ console.log(user) });

// Every time the user object changes the callback will be invoked.
dronedeployApi.User.get().subscribe(function(user){ console.log(user) });
```

** Example Response **

```javascript
{
  "id": "5626a5fa31ff9a1d9fcb9205",
  "firstName": "Daniel",
  "lastName": "Rasmuson",
  "maxAltitude": 152.4,
  "organization": {
    "color": null,
    "logoUrl": "https://tiles_test.dronedeploy.com/images/thumb/0x0/drone-deploy-organization-logos/57e5786acb5fda4dffeb0884/1b3bd690-ba15-46a5-b516-deed142808db.png",
    "isOwner": true,
    "name": "Dan Org.",
    "id": "57e5786acb5fda4dffeb0884"
  },
  "role": "precision-paid",
  "units": "metric",
  "email": "daniel@dronedeploy.com"
}
```



