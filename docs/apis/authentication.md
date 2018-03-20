# Authentication

All API requests require an API key to be sent in the Authorization header.

**Send a request to the **[**DroneDeploy Support Team**](mailto:support@dronedeploy.com) **for access to the API key for your enterprise or Developer Partner account.**

Once you have your API key it needs to be sent as an `Authorization` header:

```
POST /graphql?   Authorization: Bearer <api_key>
```

Your API key is associated with your own account and so the `viewer` query will return your user account details.



