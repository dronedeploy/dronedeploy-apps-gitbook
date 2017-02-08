![](/assets/Screenshot 2017-02-08 10.41.13.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Plans.all example</h1>
    <ul id="plans"></ul>
    <script>
      var plans = document.querySelector('#plans');

      function formatPlan(plan) {
        var linkString = '<li><a href="https://www.dronedeploy.com/app2/data/"';
        linkString += plan.id;
        linkString += '" target="_blank">'
        linkString += plan.name;
        linkString += '</a> by ';
        linkString += plan.username;
        linkString += '</li><br />';
        plans.innerHTML += linkString;
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.all()
        })
        .then(function(plans){
          plans.forEach(formatPlan);
        });

    </script>
</body>
</html>

```



