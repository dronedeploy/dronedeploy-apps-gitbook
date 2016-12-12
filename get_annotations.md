# Get Annotations

![](list_annotations.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

<button id="refresh-annotation-list">List Annotations</button>
<ul id="annotation-list"></ul>

<script>
function getPlanId(plan){
  return plan.id;
}

function drawAnnoationsInList(annotations){
  document.querySelector('#annotation-list').innerHTML = 
    annotations.map((annotation) => {
      return '<li>' + annotation.description + ' - ' + annotation.type + '</li>';
    }).join('')
}

document.querySelector('#refresh-annotation-list')
  .addEventListener('click', () => {
    new DroneDeploy({version: 1}).then(function(dronedeployApi){
       dronedeployApi.Plans.getCurrentlyViewed()
        .then(getPlanId)
        .then(dronedeployApi.Annotations.get)
        .then(drawAnnoationsInList);
    })
  })
</script>
  
</body>
</html>
```
