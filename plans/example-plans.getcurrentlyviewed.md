// TODO image



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h4 class="title">Plans.getCurrentlyViewed example</h4>
    <ul id="plan"></ul>
    <script>
      var planOutput = document.getElementById('plan')

      function formatOutput(plan) {
        var html = '<li class="details><h1 class="planName">';
        html += plan.name;
        html += '</h1><br>';
        html += '<span class="author">By ';
        html += plan.username;
        html += '</span></li>';
        return html;
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          return dronedeployApi.Plans.getCurrentlyViewed()
        })
        .then(function(plan) {
          planOutput.innerHTML += formatOutput(plan);
        });
    </script>
</body>
</html>

```



