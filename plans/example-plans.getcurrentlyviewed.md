![](/assets/Screenshot 2017-02-08 16.42.24.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589bac92f3c333868a824928/install)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    #plan {
      list-style: none;
    }

    .author {
      font-size:  0.9em;
    }
  </style>
</head>
<body>
    <h4 class="title">Plans.getCurrentlyViewed example</h4>
    <ul id="plan"></ul>
    <script>
      var planOutput = document.getElementById('plan')

      function formatOutput(plan) {
        //es6 template string
        return `<li class="details>
                  <h1 class="planName">
                    ${plan.name}
                  </h1>
                  <br>
                  <span class="author">By ${plan.username}</span>
                </li>`
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



