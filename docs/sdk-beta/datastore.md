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
```json
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

```json
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

```json

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

```json
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

```json
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

```json
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

Now let's retrieve the data that we created. There are 3 different approaches to retrieving data from the table:

### Retreiving data by external key

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

```json
{
  "tableId": "Table:5b6bd03d0461f4000108c777",
  "externalKey": "developer@dronedeploy.com"
}
```

#### Results

The results should look something like this.

```json
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

### Retreiving all table data

You can retreve all of the data from the table by using the `TableDataConnection` object. Like any standard Relay Connection, you can supply different paging parameters to retrieve a slice of the data (i.e. for displaying rows in a grid).

This query takes three inputs:
1. **tableId**: The ID of the table
1. **first**: The first N records
1. **after**: The ID of the record to start returning

#### Query

```graphql
query($table_id:ID!,$first:Int!,$after:String!) {
  node(id:$table_id) {
    ... on Table {
      rows(first: $first, after: $cursor) {
        edges {
          cursor
          node {
            externalKey
            data
            dateCreation
            dateModified
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
}
```

#### Input

```json
{
  "tableId": "Table:5b6bd03d0461f4000108c777",
  "first": 2,
  "after": "YXJyYXljb25uZWN0aW9uOjA="
}
```

#### Results

The results should look something like this.

```json
{
  "data": {
    "node": {
      "rows": {
        "edges": [
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
            "node": {
              "data": "{\"name\": \"Jane Doe\", \"age\": 32}",
              "dateCreation": "2018-01-01T20:01:23",
              "dateModified": "2018-01-01T20:11:23",
              "externalKey": "janedoe@dronedeploy.com"
            }
          },
          {
            "cursor": "YXJyYXljbSUEj3N0aW9uOjA=",
            "node": {
              "data": "{\"name\": \"John Doe\", \"age\": 29}",
              "dateCreation": "2018-01-01T20:01:23",
              "dateModified": "2018-01-01T20:11:23",
              "externalKey": "johndoe@dronedeploy.com"
            }
          },
        ],
        "pageInfo": {
          "hasNextPage": false
        }
      }
    }
  }
}
```

### Selecting data using SQL

Sometimes you need to select data from your tables by querying columns other than external keys. Datastore provides the ability to use a subset of standard ANSI-92 SQL to query your tables. Let's assume that we've created two columns on our table - name (a string field) and age (a number field that is an integer). To query that field, you would populate the `query` parameter of the `TableDataConnection` object:

#### Query

```graphql
query($table_id:ID!,$query:String!) {
  node(id:$table_id) {
    ... on Table {
      rows(query: $query) {
        edges {
          cursor
          node {
            externalKey
            data
            dateCreation
            dateModified
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
}
```

#### Input

```json
{
  "tableId": "Table:5b6bd03d0461f4000108c777",
  "query": "select name, age where name = 'Jane Doe' and age > 22"
}
```

#### Results

The results should look something like this:

```json
{
  "data": {
    "node": {
      "rows": {
        "edges": [
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
            "node": {
            "data": "{\"name\": \"Jane Doe\", \"age\": 32}",
            "dateCreation": "2018-01-01T20:01:23",
            "dateModified": "2018-01-01T20:11:23",
            "externalKey": "janedoe@dronedeploy.com"
          }
        }],
        "pageInfo": {
          "hasNextPage": false
        }
      }
    }
  }
}
```

You'll notice that in our SQL query, we did not define a `from` clause. That is because the query is limited ot the scope of the table that belongs to the connection. 

As mentioned above, a subset of standard SQL is allowed. The following describes the supported operators:

*Comparison Operators*

| Operator | Supported |
| -- | -- |
| =  | Yes |
| != | Yes |
| <> | Yes |
| >  | Yes |
| <  | Yes |
| =<  | Yes |
| >=  | Yes |
| \!<  | No |
| >\!  | No |

*Logical Operators*

| Operator | Supported |
| -- | -- |
| ALL  | No |
| AND | Yes |
| ANY | No |
| BETWEEN  | Yes |
| EXISTS | No |
| IN | Yes |
| LIKE  | Yes |
| NOT | Yes |
| OR | Yes |
| IS NULL | Yes |
| UNIQUE | No |

*Arithmetic Operators*

| Operator | Supported |
| -- | -- |
| + | No |
| - | No |
| * | No |
| / | No |

#### Limitations

* Subselects, joins, and aggregate functions are not currently supported.
* You cannot run a query against an encrypted column
