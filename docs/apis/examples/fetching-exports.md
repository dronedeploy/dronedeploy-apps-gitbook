# Fetching Exports

To fetch the exports you first need to fetch the MapPlan. You can do  this by using the `node` query. For details see the [Fetching a Single Object](/apis/examples/fetching-a-single-object.md) section.

For \[this example\]\([https://www.dronedeploy.com/graphql?query=query](https://www.dronedeploy.com/graphql?query=query)\)

\`\`\` GetExports{  
  node%28id%3A"MapPlan%3A5a0de0835f1e08eaabc732bd"%29{  
    ... on MapPlan{  
      exports%28first%3A5%29{  
        edges {  
          node {  
            id  
            user{  
              username  
            }  
            parameters {  
              projection  
              merge  
              contourInterval  
              fileFormat  
              resolution  
            }  
            status  
            dateCreation  
            downloadPath  
          }  
        }  
      }  
    }  
  }  
}&operationName=GetExports\) you will need to substitute your own MapPlan ID:

```
query GetExports{
  node(id:"MapPlan:5a0de0835f1e08eaabc732bd"){
    ... on MapPlan{
      exports(first:5){
        edges {
          node {
            id
            user{
              username
            }
            parameters {
              projection
              merge
              contourInterval
              fileFormat
              resolution
            }
            status
            dateCreation
            downloadPath
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
    "node": {
      "exports": {
        "edges": [
          {
            "node": {
              "id": "Export:5ab165f348273300019b14a3",
              "user": {
                "username": "joe@dronedeploy.com"
              },
              "parameters": {
                "projection": 3857,
                "merge": true,
                "contourInterval": null,
                "fileFormat": "GEOTIFF",
                "resolution": 0
              },
              "status": "PROCESSING",
              "dateCreation": "2018-03-20T19:50:11.523000+00:00",
              "downloadPath": null
            }
          }
        ]
      }
    }
  }
}
```

### Checking the status of an Export

If you want to keep checking back on the status of a given export you can use the same query shown in Fetching a Single Object to get it.

```
query GetExport{
  node(id:"Export:5ab165f348273300019b14a3"){
    ... on Export{
      status
      downloadPath
    }
  }
}
```



