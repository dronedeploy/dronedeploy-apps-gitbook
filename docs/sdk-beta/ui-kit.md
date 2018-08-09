# UI Kit

**This functionality is in beta - please learn more** **[here](beta-signup.md).**

## Calling Functions

```javascript
api.Functions.getUrl(FUNCTION_NAME);
```

```javascript
api.Authorization.getScopedToken();
```

```javascript
const dronedeploy = new DroneDeploy({version: 1});
const FUNCTION_NAME = "ifttt-webhook";
const api = await dronedeploy;

/**
 * Generic function for calling out to Function
 */
async function callFunction() {
  const api = await dronedeploy;

  // Grabs the URL of the function to call by name of function
  const functionUrl = await api.Functions.getUrl(FUNCTION_NAME);
  
  // Get a token to ensure auth when calling your function
  const token = await api.Authorization.getScopedToken();
  options = {
    method: "POST",
    body: JSON.stringify({data: "hello world"}),
    headers: {
        Authorization: `Bearer ${token}`
    }
  }
  return fetch(`${functionUrl}`, options);
}
```