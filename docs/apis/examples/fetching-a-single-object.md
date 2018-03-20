# Fetching a Single Object

If you look at the reference documentation you can see on the top level there is a `node` query. This query can fetch any object which implements the `Node` interface, which is almost every object in our API. The `Node` interface defines just one field, the `id` field, so you have to use an [Inline Fragment](http://facebook.github.io/graphql/October2016/#sec-Inline-Fragments) what to do for specific types. Below is some simple examples of how this works.

First you need an ID, a simple example of this is to grab your Organization ID using this query:

```
{
  viewer{
    organization{
      id
    }
  }
}
```

This returns:

```
{
  "data": {
    "viewer": {
      "organization": {
        "id": "Organization:58fa858111e61e0001d242d9"
      }
    }
  }
}
```



