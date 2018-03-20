### Fetching all Plans for your Organization

Below is the query to fetch all the plans, with their name, geometry, location and the date they were created. Since this is a paged API you also need to fetch the pageInfo, [see Pagination](/introduction/pagination.md) for more details.

```
query GetPlans{
  viewer{
    organization{
      plans(first:5){
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

You can try this query out yourself using [the API explorer here.](https://www.dronedeploy.com/graphql?query=query%20GetPlans%7B%0A%20%20viewer%7B%0A%20%20%20%20organization%7B%0A%20%20%20%20%20%20plans%28first%3A50%29%7B%0A%20%20%20%20%20%20%20%20pageInfo%7B%0A%20%20%20%20%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20%20%20%20%20endCursor%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20edges%7B%0A%20%20%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20%20%20node%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20geometry%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lat%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lng%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lat%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lng%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20dateCreation%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=GetPlans)

#### Explaination

The top level query `viewer` is the context for the currently logged in user. From this you fetch the `organization` object and the first 50 of the plans associated with that. If you have less than 50 plans you are done. If you have more example you will get 

