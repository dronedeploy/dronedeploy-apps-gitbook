# Creating an Export

Our APIs are not just for viewing data, you can also create data with [mutations.](http://graphql.org/learn/queries/#mutations)

For these examples you will need to substitute your own PlanIDs.

```
mutation CreateExport{
  createExport(input:{planId: "MapPlan:5a0ddee5a6b7d90aecdc2f1d", parameters:{layer:"Orthomosaic"}}){
    export{
      id
    }
  }
}
```

Here the createExport mutation takes an input of `planId` and `parameters`. In parameters only the `layer` is required.

This will create the export and then query for the exports id in the response:

```json
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
> mutation CreateExport\($input:CreateExportInput!\){
2. Use the defined variable in the mutation:
> createExport\(input:$input\){
3. Define the value of the variable in the `variables` section of the JSON payload

The result of this is the query:

```
mutation CreateExport($input:CreateExportInput!){
  createExport(input:$input){
    export{
      id
    }
  }
}
```

With the variables:

```json
{
  "input":{
    "planId": "MapPlan:5a0ddee5a6b7d90aecdc2f1d",
    "parameters": {
    	"layer": "Orthomosaic"
    }
  }
}
```

The raw request looks like:
```
Authorization: Bearer <api_key>
POST https://api.dronedeploy.com/graphql
```
```json
{
  "query": "mutation CreateExport($input:CreateExportInput!){createExport(input:$input){export{id}}}",
  "variables": {
    "input": {
      "planId": "MapPlan:5a0ddee5a6b7d90aecdc2f1d",
      "parameters": {
        "layer": "Orthomosaic"
      }
    }
  }
}

```



