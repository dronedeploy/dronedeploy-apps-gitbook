# Creating an Export

Our APIs are not just for viewing data, you can also create data with [mutations.](http://graphql.org/learn/queries/#mutations)

For these examples you will need to substitute your own PlanIDs.

The easiest way to try these APIs is to use the [API Explorer](https://www.dronedeploy.com/graphql?operationName=null&query=mutation%7B%0A%20%20createExport%28input%3A%7BplanId%3A%20%22MapPlan%3A5a0ddee5a6b7d90aecdc2f1d%22%2C%20parameters%3A%7Blayer%3AORTHOMOSAIC%7D%7D%29%7B%0A%20%20%20%20export%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=). This has useful features like autocomplete (ctrl+space) and query/input validation.

```
mutation{
  createExport(input:{planId: "MapPlan:5a0ddee5a6b7d90aecdc2f1d", parameters:{layer:ORTHOMOSAIC}}){
    export{
      id
    }
  }
}
```

Here the createExport mutation takes an input of `planId` and `parameters`. In parameters only the `layer` is required.

This will create the export and then query for the exports id in the response:

```
{
  "data": {
    "createExport": {
      "export": {
        "id": "Export:5ab169ed8904ec000136eac9"
      }
    }
  }
}
```

You can then use the steps in [Fetching Exports](/apis/examples/fetching-exports.md) to check on the status of that export.

### Using Variables

As the input gets more complex you will want to use GraphQL variables. For some background information on Variables in Mutations, [see here](http://graphql.org/learn/queries/#variables).

To take the query above and use variables you need to do 3 things:

1. Define the variable in the mutation signature:
  > `mutation($input:CreateExportInput!){`
2. Use the defined variable in the mutation:
  > `createExport(input:$input){`
3. Define the value of the variable in the `variables` section of the JSON payload

[This transforms the query to the following:](https://www.dronedeploy.com/graphql?operationName=null&query=mutation%28%24input%3ACreateExportInput!%29%7B%0A%20%20createExport%28input%3A%24input%29%7B%0A%20%20%20%20export%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22input%22%3A%7B%0A%20%20%20%20%22planId%22%3A%20%22MapPlan%3A5a0ddee5a6b7d90aecdc2f1d%22%2C%0A%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22layer%22%3A%20%22ORTHOMOSAIC%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

```
mutation($input:CreateExportInput!){
  createExport(input:$input){
    export{
      id
    }
  }
}
```

With the variables:

```
{
  "input":{
    "planId": "MapPlan:5a0ddee5a6b7d90aecdc2f1d",
    "parameters": {
    	"layer": "ORTHOMOSAIC"
    }
  }
}
```

The raw request looks like:

```
Authorization: Bearer <api_key>
POST /graphql
{
  "query": "mutation CreateExport($input:CreateExportInput!){createExport(input:$input){export{id}}}",
  "variables": {
    "input": {
      "planId": "MapPlan:5a0ddee5a6b7d90aecdc2f1d",
      "parameters": {
        "layer": "ORTHOMOSAIC"
      }
    }
  }
}

```



