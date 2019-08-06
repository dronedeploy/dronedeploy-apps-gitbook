# API Introduction

At DroneDeploy we use GraphQL for our main API technology, you can get started with the [API explorer here](https://www.dronedeploy.com/graphiql/).

### What is GraphQL?

GraphQL Is a query language for clients to fetch the data they need from the API. Fundamentally it is:

* A [**specification**](http://facebook.github.io/graphql/); the specification defines what data can be fetched or updated and defines the format of the response

* Strongly typed; GraphQL has a well defined type system which defines what each field in the API can be and guarantees that it will be that.

* Well structured; the schema not only defines the types of objects and their fields but also defines the links between complex objects. Queries can fetch single objects or traverse the links in the structure to fetch all of the required information in a single query.

#### Why use GraphQL?

We are using GraphQL primarily because it allows developers to make API calls which gets them exactly what data they need in the simplest way possible. Since it is a well structured schema you can fetch data and know that you will get the data back in a guaranteed format and because of that, tooling can make development significantly easier.

#### Making GraphQL Queries

You can use our API explorer to graphically make API calls: [https://www.dronedeploy.com/graphiql/](https://www.dronedeploy.com/graphiql/)

The requests are made making a POST to the \`/graphql\` endpoint, you can make these with CURL or any HTTP compatible client.

One of the top level objects in the query schema is the `viewer` object. This is the User object of the currently logged in user. To query for the currently logged in users username you use the following example:

You can explore this query[ here.](https://www.dronedeploy.com/graphql?query={
  viewer{
    username    
  }
})

```
{
  viewer{
    username    
  }
}
```

Returns:

```js
{
  "data": {
    "viewer": {
      "username": "docs@dronedeploy.com"
    }
  }
}
```

The API Explorer is making this request:

```
Content-Type: 
POST /graphql
{
    "query": "{ viewer { username }}"
}
```

You could also make the call using `curl`

```
curl -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer <api key>' \
     -d '{"query": "{ viewer { username }}"}' \
     https://www.dronedeploy.com/graphql
```

### Useful Links:

* The official query documentation is here: http://graphql.org/learn/queries/ 
* The official tutorials for learning the basics of GraphQL is here: http://graphql.org/learn/



