# Pagination

When a one-to-many relationship exists between two objects, for example organization -&gt; plans, we paginate the responses from the query. Forward, cursor based pagination is used, for more details [see here.](http://graphql.org/learn/pagination/)

#### Forward Pagination

The arguments for forward pagination are:

* `first`  a non-negative integer representing the number of results
* `after`: the cursor of which the results will be after

The connection which is returned includes the following fields:

* `pageInfo`: which contains the fields `hasNextPage` and `endCursor`
* 
An example of pagination is paging through the plans for a given organization:

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



