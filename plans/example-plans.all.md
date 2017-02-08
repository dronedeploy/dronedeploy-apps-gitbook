![](/assets/Screenshot 2017-02-08 10.41.13.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589b57cdc256798c1c4cd1c9/install)

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
        return `<li>
                  <a href="https://www.dronedeploy.com/app2/data/"${plan.id}" target="_blank">${plan.name}</a> by ${plan.username}
                </li>
                `
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



