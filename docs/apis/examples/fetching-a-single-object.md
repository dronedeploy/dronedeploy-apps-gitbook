# Fetching a Single Object

If you look at the reference documentation you can see on the top level there is a `node` query. This query can fetch any object which implements the `Node` interface, which is almost every object in our API. The `Node` interface defines just one field, the `id` field, so you have to use an [Inline Fragment](http://facebook.github.io/graphql/October2016/#sec-Inline-Fragments) what to do for specific types. Below is some simple examples of how this works.

In this example we'll use the Example Map Plan everyone sees when they first log into DroneDeploy. This has the ID of `MapPlan:5a3d7badf014ce3db3c22391` . You can see the IDs of your own plans by listing your organizations plans, [shown here.](/apis/examples/fetching-all-plans-for-your-organization.md)

The simplest example of using the `node` query is [this.](https://www.dronedeploy.com/graphql?query=query%20getMap%20%7B%0A%20%20node%28id%3A%20%22MapPlan%3A5a3d7badf014ce3db3c22391%22%29%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A&operationName=null)

```
query getMap{
  node(id:"MapPlan:5a3d7badf014ce3db3c22391"){
    id
  }
}
```

Since the `node` query returns a `Node` object, the only field available is `id`. This isn't very useful, what you want is the fields specific to the `MapPlan` type. For this you use an [Inline Fragment](http://facebook.github.io/graphql/October2016/#sec-Inline-Fragments): You can try this out[ here.](https://www.dronedeploy.com/graphql?query=%7B%0A%20%20node%28id%3A%20%22MapPlan%3A5a3d7badf014ce3db3c22391%22%29%20%7B%0A%20%20%20%20...%20on%20MapPlan%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20lat%0A%20%20%20%20%20%20%20%20lng%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20imageCount%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=null)

```
{
  node(id:"MapPlan:5a3d7badf014ce3db3c22391"){
    ... on MapPlan{
      name
      location {
        lat
        lng
      }
      imageCount
      status
    }
  }
}
```

Which returns the data:

```
{
  "data": {
    "node": {
      "name": "Construction Example",
      "location": {
        "lat": 28.64861527777778,
        "lng": -81.5398111111111
      },
      "imageCount": 438,
      "status": "COMPLETE"
    }
  }
}
```

When you specify the type it allows you to query the fields for that specific type.

