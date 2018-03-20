### Fetching all Plans for your Organization

Below is the query to fetch all the plans, with their name, geometry, location and the date they were created. Since this is a paged API you also need to fetch the pageInfo, [see Pagination](/introduction/pagination.md) for more details.

```
query GetPlans{
  viewer{
    organization{
      plans(first:50){
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          cursor
          node{
            name
            geometry{
              lat
              lng
            }
            location {
              lat
              lng
            }
            dateCreation
          }
        }
      }
    }
  }
}
```

You can try this query out yourself using [the API explorer here.](https://www.dronedeploy.com/graphql?query=query GetPlans{
  viewer{
    organization{
      plans%28first%3A50%29{
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          cursor
          node{
            name
            geometry{
              lat
              lng
            }
            location {
              lat
              lng
            }
            dateCreation
          }
        }
      }
    }
  }
}&operationName=GetPlans)

#### Explaination

The top level query `viewer` is the context for the currently logged in user. From this you fetch the `organization` object and the first 50 of the plans associated with that. If you have less than 50 plans you are done. If you have more example you will get a response like this.

```js
{
  "data": {
    "viewer": {
      "organization": {
        "plans": {
          "pageInfo": {
            "hasNextPage": true,
            "endCursor": "YXJyYXljb25uZWN0aW9uOjI="
          },
          "edges": [
            ...  // Data removed for the sake of brevity
          ]
        }
      }
    }
  }
}

```

As you can see in the `pageInfo` section `hasNextPage` is True so you know you need to fetch the next page of data. To do this simply modify your query to set the `after` paging parameter to the `endCursor` from the `pageInfo`:

```
query GetPlans{
  viewer{
    organization{
      plans(first:50, after:"YXJyYXljb25uZWN0aW9uOjI="){
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          cursor
          node{
            name
            geometry{
              lat
              lng
            }
            location {
              lat
              lng
            }
            dateCreation
          }
        }
      }
    }
  }
}
```



