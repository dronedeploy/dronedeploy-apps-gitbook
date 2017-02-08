// TODO image



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
    <script>
      var planOutput = document.getElementById('planDetails');
      var updateForm = document.getElementById('updateForm');
      var updateBtn = document.getElementById('updateBtn')

      function formatOutput(plan) {
        var html = '<div class="details><h1 class="planName">';
        html += plan.name;
        html += '</h1><br>';
        html += '<span class="author">By ';
        html += plan.username;
        html += '</span></div>';
        return html;
      }

      new DroneDeploy({ version: 1})
        .then(function(dronedeployApi) {
          dronedeployApi.Plans.getCurrentlyViewed().subscribe(function(plan) {
            planOutput.innerHTML = formatOutput(plan);
          });
          dronedeployApi.Plans.getCurrentlyViewed()
        .then(function(plan) {
            updateForm.addEventListener('submit', function(event) {
              var newName = event.target[0].value;
              event.target[0].value = '';
              event.preventDefault();
              dronedeployApi.Plans.update(plan.id, {
                name: newName
              });
            });
          });
        });

    </script>
</body>
</html>

```



