# Authentication

When your app loads the user will already be authenticated with DroneDeploy. Therefore you already have access to the users data just by using the API's above. However, many app creators are working with shared users that have an account on their service. Therefore, the authentication question is, "**How do users sign into my service from within DroneDeploy?**". The answer is however you want! Your DroneDeploy app is just an iframe so authentication flows are very similar to how you would authenticate in a standalone webpage.

Below are some common examples...

* [Username / Password](#username--password)
* [OAuth 2.0](#oauth-20)
* [API Key](#api-key)

## Username / Password

1. Ask the user for their credentials.
2. Send a request to your server with those credentials.
3. If successful, store the token in localstorage
4. On every subsequent visit first see if a valid token is in localstorage

## OAuth 2.0

You'll need a server handle the OAuth secret, store the OAuth token, and to handle OAuth callbacks. In the below example we are assuming "your-oauth-server.com" is your authentication server and "your-dronedeploy-app-server.com" is a proxy server in charge of your DroneDeploy app. However, if you prefer you can instead put this dronedeploy functionality as a subroute on your main server, "your-oauth-server.com/dronedeploy-app".

1. Use the [Link.open](/link/example-link.open.md) API to open your authentication request in a new window with the websocket client id
   1. E.X: [https://www.your-oauth-server.com/authenticate?service=dronedeployapp&callback=https://your-dronedeploy-app-server.com/callback?identifier=WEB\_SOCKET\_CLIENT\_ID](https://www.your-oauth-server.com/authenticate?service=dronedeployapp&callback=https://your-dronedeploy-app-server.com/callback?identifier=WEB_SOCKET_CLIENT_ID)
2. When the authentication flow completes on the server for "[https://your-dronedeploy-app-server.com/callback?identifier=WEB\_SOCKET\_CLIENT\_ID&token=SERVICE\_TOKEN](https://your-dronedeploy-app-server.com/callback?identifier=WEB_SOCKET_CLIENT_ID&token=SERVICE_TOKEN)"  the token should be saved in the database and corresponding JWT token should be sent back to the client
   1. window.opener.postMessage\('MY\_Service\_Authentication Successful', '\*'\)
3. Once the frontend has the JWT token it should store it localstorage and proxy all of its network requests through "your-dronedeploy-app-server.com".
   1. E.X. frontend /get-user --&gt; your-dronedeploy-app-server.com/get-user --&gt; [https://www.your-api.com/get-user](https://www.your-api.com/get-user)

## API Key

Have the user provide an client-side API key and store it in localstorage

## Common Pitfalls

* Don't trust the "user.email" field for authentication. Since the whole API lives on the frontend anyone could pass false emails to your application.
* Don't navigate or reload your dronedeploy iframe. If you do you won't be able to use the DroneDeploy embedded api.



