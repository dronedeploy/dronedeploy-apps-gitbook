# Get Annotations (Arrival 10/27/2016)

![](list_annotations.png)

[Install the Example](https://test.dronedeploy.com/app2/settings/apps/install/58113e551913e6641d8417ea)

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

function getCurrentPlanId(){
  return new Promise((resolve) => {
    window.dronedeploy.Plans.getCurrentlyViewed()
      .subscribe((plan) => resolve(plan.id));
  });
}

function getAnnotations(planId){
  return new Promise((resolve) => {
    window.dronedeploy.Annotations.get(planId)
      .subscribe((annotations) => resolve(annotations))
  });
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
      .then(getCurrentPlanId)
      .then(getAnnotations)
      .then(drawAnnoationsInList);
  })
  
</script>
  
</body>
</html>
```
