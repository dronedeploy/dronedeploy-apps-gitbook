# Datastore

**This functionality is in beta - please learn more** **[here](beta-signup.md).**

The Datastore allows you to create custom tables on DroneDeploy. There are two parts to creating a Datastore table:

1. Creating the table
1. Creating columns

Note that tables are defined by the [DroneDeploy CLI](dronedeploy-cli.md). 

**We highly recommend that you use the CLI for App development instead of building out tables via the API.**

## Creating a Table

Creating a Datastore table is straightforward. You use a [GraphQL mutation query](https://developer.dronedeploy.com/reference/mutationroot.doc.html) as below. Then you enter in the following input values:

1. **applicationId**: This is the Id of your App.
1. **name**: This will be the name of your table.
1. **description**: This is a description you give about the table.

**[Try it out with the GraphQL Explorer](https://www.dronedeploy.com/graphql?operationName=CreateTable&query=mutation%20CreateTable%28%24input%3A%20CreateTableInput!%29%20%7B%0A%20%20createTable%28input%3A%20%24input%29%20%7B%0A%20%20%20%20table%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20application%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22applicationId%22%3A%20%22Application%3Alonvecnbfyvovfqsvbxz%22%2C%0A%20%20%20%20%22name%22%3A%20%22Table%20Name%22%2C%0A%20%20%20%20%22description%22%3A%20%22Table%20Description%22%0A%20%20%7D%0A%7D)**

#### Query
```graphql
mutation CreateTable($input: CreateTableInput!) {
  createTable(input: $input) {
    table {
      id
      application {
        id
      }
      name
      description
    }
  }
}
```
#### Input
```graphql
{
  "input": {
    "applicationId": "Application:lonvecnbfyvovfqsvbxz",
    "name": "Table Name",
    "description": "Table Description"
  }
}
```

#### Results

The results should look something like this:

```graphql
{
  "data": {
    "createTable": {
      "table": {
        "id": "Table:5b6bd03d0461f4000108c777",
        "application": {
          "id": "Application:lonvecnbfyvovfqsvbxz"
        },
        "name": "Table Name",
        "description": "Table Description"
      }
    }
  }
}
```

## Creating Columns

Your table now needs columns. 

Note that we support several Column Types which you can reference [here](https://developer.dronedeploy.com/reference/columntype.doc.html).

Creating a column is very similar to creating the table itself. You use a GraphQL mutation with the following input values:

1. **tableId**: This is the Id of the table you created above.
1. **columnType**: This is the type of column, you can find all of the available types [here](https://developer.dronedeploy.com/reference/columntype.doc.html).
1. **name**: This will be the name of your table column.
1. **description**: Give your column a description for easier reference.

Note that certain column types have specific inputs. For example, for the TEXT column type, you can specify `textLength` and even whether or not you want that column to be `textEncrypted`.

**[Try it out with the GraphQL Explorer](https://www.dronedeploy.com/graphql?operationName=CreateTableColumn&query=mutation%20CreateTableColumn%28%24input%3A%20CreateTableColumnInput!%29%20%7B%0A%20%20createTableColumn%28input%3A%20%24input%29%20%7B%0A%20%20%20%20tableColumn%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20...%20on%20NumberColumn%20%7B%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20...%20on%20TextColumn%20%7B%0A%20%20%20%20%20%20%20%20length%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22columnType%22%3A%20%22TEXT%22%2C%0A%20%20%20%20%22name%22%3A%20%22name%22%2C%0A%20%20%20%20%22textLength%22%3A%20255%2C%0A%20%20%20%20%22textEncrypted%22%3A%20false%2C%0A%20%20%20%20%22tableId%22%3A%20%22Table%3A5b6bd03d0461f4000108c777%22%2C%0A%20%20%20%20%22description%22%3A%20%22Users%20name%22%0A%20%20%7D%0A%7D)**

#### Query
```graphql
mutation CreateTableColumn($input: CreateTableColumnInput!) {
  createTableColumn(input: $input) {
    tableColumn {
      id
      name
      description
      ... on NumberColumn {
        type
      }
      ... on TextColumn {
        length
      }
    }
  }
}
```

#### Input

```graphql

{
  "input": {
    "columnType": "TEXT",
    "name": "name",
    "textLength": 255,
    "textEncrypted": false,
    "tableId": "Table:5b6bd03d0461f4000108c777",
    "description": "Users name"
  }
}
```

#### Results

The results should look something like this:

```graphql
{
  "data": {
    "createTableColumn": {
      "tableColumn": {
        "id": "TextColumn:5ade569b2a3c590001231bbb",
        "name": "name",
        "description": "Users name",
        "length": 255
      }
    }
  }
}
```

## Creating Table Data

Now that you have a Datastore table, you can store your own custom data! Similar to creating a Datastore table and creating a Datastore column, you will create a GraphQL query for creating Datastore data.


The inputs to this query are as follows:
1. **externalId**: This is the Id of the data that you can use to reference and retrieve it later. **NOTE: There is a 36 character limit to this field.**
1. **tableId**: This is the Id of the table you created above.
1. **data**: This is the data you want to store in stringified JSON format. Note that each Datastore table column is a JSON key. In this example, that would be the `name` column.

**[Try it out with the GraphQL Explorer](https://www.dronedeploy.com/graphql?query=query%20%28%24tableId%3A%20ID!%2C%20%24externalId%3A%20String!%29%20%7B%0A%20%20node%28id%3A%20%24tableId%29%20%7B%0A%20%20%20%20...%20on%20Table%20%7B%0A%20%20%20%20%20%20tableDatum%28externalKey%3A%20%24externalKey%29%20%7B%0A%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22tableId%22%3A%20%22Table%3A5b6be66f23d50900018b7731%22%2C%20%0A%20%20%20%20%22externalId%22%3A%20%22developer%40dronedeploy.com%22%2C%20%0A%20%20%20%20%22data%22%3A%20%22%7B%20%5C%22name%5C%22%3A%20%5C%22DroneDeploy%20Developer%5C%22%20%7D%22%0A%20%20%7D%0A%7D&operationName=null)**

#### Query

```graphql
mutation CreateTableData($input: CreateTableDataInput!) {
  createTableData(input: $input) {
    tableData {
      id
      application {
        id
      }
      data
      externalKey
      table {
        id
      }
    }
  }
}
```

#### Input

```graphql
{
  "input": {
    "externalId": "developer@dronedeploy.com",
    "tableId": "Table:5b6bd03d0461f4000108c777",
    "data": "{ \"name\": \"DroneDeploy Developer\" }"
  }
}
```

#### Results

The results should look something like this.

```graphql

{
  "data": {
    "createTableData": {
      "tableData": {
        "id": "TableData:5b5141ca09867c000116a15e",
        "application": {
          "id": "Application:lonvecnbfyvovfqsvbxz"
        },
        "data": "{\"name\": \"DroneDeploy Developer\"}",
        "externalKey": "developer@dronedeploy.com",
        "table": {
          "id": "Table:5b6bd03d0461f4000108c777"
        }
      }
    }
  }
}
```

## Retrieving Table Data

Now let's retrieve the data that we created.

This query takes two inputs:
1. **externalKey**: This is the externalId that you passed into the Datastore data creation query. In this example, this was `developer@dronedeploy.com`.
1. **tableId**: This is the Id of the table you created above.

**[Try it out with the GraphQL Explorer](https://www.dronedeploy.com/graphql?query=query%20%28%24tableId%3A%20ID!%2C%20%24externalId%3A%20String!%29%20%7B%0A%20%20node%28id%3A%20%24tableId%29%20%7B%0A%20%20%20%20...%20on%20Table%20%7B%0A%20%20%20%20%20%20tableDatum%28externalKey%3A%20%24externalKey%29%20%7B%0A%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22externalId%22%3A%20%22developer%40dronedeploy.com%22%2C%0A%20%20%20%20%22tableId%22%3A%20%22Table%3A5b6be66f23d50900018b7731%22%2C%0A%20%20%20%20%22data%22%3A%20%22%7B%20%5C%22name%5C%22%3A%20%5C%22DroneDeploy%20Developer%5C%22%20%7D%22%0A%20%20%7D%0A%7D&operationName=null)**

#### Query

```graphql
query ($tableId: ID!, $externalKey: String!) {
  node(id: $tableId) {
    ... on Table {
      tableDatum(externalKey: $externalKey) {
        data
      }
    }
  }
}

```

#### Input

```graphql
{
  "tableId": "Table:5b6bd03d0461f4000108c777",
  "externalKey": "developer@dronedeploy.com"
}
```

#### Results

The results should look something like this.

```graphql
{
  "data": {
    "node": {
      "tableDatum": {
        "data": "{\"name\": \"DroneDeploy Developer\"}"
      }
    }
  }
}
```