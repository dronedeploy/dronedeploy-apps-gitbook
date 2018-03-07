# Overview

At DroneDeploy we use GraphQL for our main API technology, you can get started with the [API explorer here](https://api.dronedeploy.com/graphql).

### What is GraphQL?

GraphQL Is a query language for clients to fetch the data they need from the API. Fundamentally it is:

* A [**specification**](http://facebook.github.io/graphql/)**.** The specification defines what data can be fetched or updated and defines the format of the response

* [**Strongly typed**](https://developer.github.com/v4/#about-the-graphql-schema-reference)**. **The schema defines an API's type system and all object relationships.

* [**Introspective**](https://developer.github.com/v4/guides/intro-to-graphql#discovering-the-graphql-api)**.**A client can query the schema for details about the schema.

* [**Hierarchical**](https://developer.github.com/v4/guides/forming-calls)**.**The shape of a GraphQL call mirrors the shape of the JSON data it returns.[Nested fields](https://developer.github.com/v4/guides/migrating-from-rest/#nesting)let you query for and receive only the data you specify in a single round trip.

* **An application layer.**GraphQL is not a storage model or a database query language. The\_graph\_refers to graph structures defined in the schema, where[nodes](https://developer.github.com/v4/guides/intro-to-graphql#node)define objects and[edges](https://developer.github.com/v4/guides/intro-to-graphql#edge)define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.

## 



