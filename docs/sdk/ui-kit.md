# UI Kit

## Calling Functions

Once you have a [DroneDeploy Function](functions.md) defined and deployed, you might want to call the Function from your App's UI. We have built App APIs to make this very easy.

First, you want to get the Url of the Function. You can do this by passing in the Function's name into the following API.

```javascript
api.Functions.getUrl(FUNCTION_NAME);
```

Second, you will want to get a scoped JWT token. This provides authentication and authorization when calling your Function and also provides your Function with a token to make further calls to our APIs. You will set the returned JWT as the Bearer Token for your request.

```javascript
api.Authorization.getScopedToken();
```

Finally, your code might look something like this:

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

You can see how this all works in our [sample app](https://github.com/dronedeploy/app-examples/blob/master/IFTTT/app/js/script.js).
