# Pagination

When a one-to-many relationship exists between two nodes, for example organization -&gt; plans, we paginate the responses from the query. Forward, cursor based pagination is used, for more details [see here.](http://graphql.org/learn/pagination/)

#### Forward Pagination

The arguments for forward pagination are:

* `first`  a non-negative integer representing the number of results
* `after`: the cursor of which the results will be after

The connection which is returned includes the following fields:

* `pageInfo`: which contains the fields `hasNextPage` and `endCursor`  
* `edges`: which includes a list of edges. Each edge contains the cursor for that node and the node itself

#### Example:

For this example we will go through the organization link to plans. 

Firstly we'll get the plans connection with the first two edges: 

```
{
  viewer{
    username
    organization {
      plans(first: 2) {
        pageInfo{
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            name            
          }
        }
      }

    }
  }
}
```

This returns:

```
{
  "data": {
    "viewer": {
      "username": "joe@dronedeploy.com",
      "organization": {
        "plans": {
          "pageInfo": {
            "hasNextPage": true,
            "endCursor": "YXJyYXljb25uZWN0aW9uOjE="
          },
          "edges": [
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
              "node": {
                "name": "Field Map"
              }
            },
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
              "node": {
                "name": "Downtown Map"
              }
            }
          ]
        }
      }
    }
  }
}
```

You can see that `hasNextPage` is `true` so we know there are more items and the `endCursor` is set to the last item in the response. Two fetch the next page you simply update the query to include the `after` parameter for the connection:

```
{
  viewer{
    username
    organization {
      plans(first: 2, after:"YXJyYXljb25uZWN0aW9uOjE=") {
        pageInfo{
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            name            
          }
        }
      }
      
    }
  }
}
```

This returns the data:

```
{
  "data": {
    "viewer": {
      "username": "joe@dronedeploy.com",
      "organization": {
        "plans": {
          "pageInfo": {
            "hasNextPage": true,
            "endCursor": "YXJyYXljb25uZWN0aW9uOjM="
          },
          "edges": [
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjI=",
              "node": {
                "name": "New map"
              }
            },
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjM=",
              "node": {
                "name": "Untitled Plan"
              }
            }
          ]
        }
      }
    }
  }
}
```





