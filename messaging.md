# Messaging
## Messaging.showToast
**Overview**

![](example_toast.png)

```javascript
const message = String;
const optionalOptions = {timeout: Number};
window.dronedeploy.Messaging.showToast(message, optionalOptions)
  .then(function(toastObj){ console.log(toastObj) });
```

**Examples**
```javascript
window.dronedeploy.Messaging.showToast('Example Toast');
```

```javascript
// timeout after 5 seconds
window.dronedeploy.Messaging.showToast('Example Toast', {timeout: 5000});
```

```javascript
const neverTimeout = -1;
window.dronedeploy.Messaging.showToast('Example Toast', {timeout: neverTimeout})
  .then(function(toastObj){
    // Programmatically remove a toast
    setTimeout(() => toastObj.remove(), 1000)
  });
```

**Response**

```javascript
{
  // Remove the toast from the screen
  remove: Function
}
```