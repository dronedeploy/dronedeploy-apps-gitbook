# Get Annotations

![](list_annotations.png)

[Install the Example](https://www.dronedeploy.com/app2/settings/apps/install/58113e551913e6641d8417ea)

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
function dronedeployApiReady(){
  return new Promise((resolve) => {
    window.dronedeploy.onload(() => {
      resolve();
    });
  });
}

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
    dronedeployApiReady()
      .then(window.dronedeploy.Plans.getCurrentlyViewed)
      .then(getPlanId)
      .then(window.dronedeploy.Annotations.get)
      .then(drawAnnoationsInList);
  })
</script>
  
</body>
</html>
```
