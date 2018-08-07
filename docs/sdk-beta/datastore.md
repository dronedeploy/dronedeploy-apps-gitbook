# Datastore - COMING SOON

The Datastore is a custom table

[Column Types](https://developer.dronedeploy.com/reference/columntype.doc.html)

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

```graphql
{
  "input": {
    "applicationId": "Application:lonvecnbfyvovfqsvbxz",
    "name": "User Information Table",
    "description": "Information pertaining to a user."
  }
}
```

```graphql
{
  "data": {
    "createTable": {
      "table": {
        "id": "Table:5ada2d8f27b7b90001b9c40a",
        "application": {
          "id": "Application:lonvecnbfyvovfqsvbxz"
        },
        "name": "User Information Table",
        "description": "Information pertaining to a user."
      }
    }
  }
}
```