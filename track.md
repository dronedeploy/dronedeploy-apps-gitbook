# Track

**Overview**

You will be able to access the information DroneDeploy tracks about your app. This includes. 

- App installs and uninstalls
- App renders
- `window.dronedeploy` calls with arguments

Additionally, you can use `Track.send` to easily add tracking to your app.

## Track.send

**Overview**

```javascript
const eventName = String;
const optionalEventData = Object;
window.dronedeploy.Track.send(eventName, optionalEventData);
```

**Example Call**
```javascript
window.dronedeploy.Track.send('Crop Export Requested', {
  size: 100,
  member: true,
  timeUntilPurchaseInSeconds: 278
});
```