![](/assets/Screenshot 2017-02-08 16.50.22.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <h1 class="title">Plans.update example</h1>
    <div id="planDetails"></div>
    <form action="" id="updateForm">
        <input type="text" placeholder="New Project Name" id="newName"/>
        <button type="submit" id="updateBtn">Update name</button>
    </form>
    <button type="button" id="randomizeGeometry">Randomize geometry</button>
    <script>
      var planOutput = document.getElementById('planDetails');
      var updateForm = document.getElementById('updateForm');
      var updateBtn = document.getElementById('updateBtn');
      var randomizeBtn = document.getElementById('randomizeGeometry');

      function formatOutput(plan) {
        //es6 template string
        return `<div class="details>
                  <h1 class="planName">
                    ${plan.name}
                  </h1>
                  <br>
                  <span class="author">By ${plan.username}</span>
                </div>`
      }

      function randomlyAdjustGeometry(geometry){
        var offset = Math.random() / 100 * ([1, -1][Math.floor(Math.random() * 2)]);
        geometry[2].lng = geometry[0].lng + offset;
        return geometry;
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          dronedeployApi.Plans.getCurrentlyViewed().subscribe(function(plan) {
            planOutput.innerHTML = formatOutput(plan);
          });
          dronedeployApi.Plans.getCurrentlyViewed()
        .then(function(plan) {
            updateForm.addEventListener('submit', function(event) {
              event.preventDefault();
              var newName = event.target[0].value;
              event.target[0].value = '';
              dronedeployApi.Plans.update(plan.id, {
                name: newName
              });
            });

            randomizeBtn.addEventListener('click', function(event) {
              event.preventDefault();
              var newGeometry = randomlyAdjustGeometry(plan.geometry);
              dronedeployApi.Plans.update(plan.id, {
                geometry: newGeometry
              });
            });

          });
        });

    </script>
</body>
</html>
```



