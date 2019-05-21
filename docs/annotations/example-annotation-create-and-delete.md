![](/docs/assets/Screen%20Shot%202017-02-19%20at%205.01.28%20PM.jpg)

```html
<html>
  <head>
    <title></title>
    <script>
      let planGeometry = {};

      var dd = new DroneDeploy({
        version: 1
      });

      dd.then(function(api){
        let select = document.getElementById('planSelect');
        select.innerHTML = '';

        api.Plans.all().then(function(plans){
          for(let plan of plans) {
            let option = document.createElement('option');
            option.innerText = plan.name;
            option.value = plan.id;
            select.appendChild(option);
            planGeometry[plan.id] = {
              location: plan.location,
              geometry: plan.geometry
            }
          }
        });
      });

      function drawOutline(){
        let planId = document.getElementById('planSelect').value;

        dd.then(function(api){
          api.Plans.getCurrentlyViewed().then(function(plan){
            api.Annotations.createMarker(
              plan.id,
              planGeometry[planId].location
            );

            api.Annotations.createArea(
              plan.id,
              planGeometry[planId].geometry
            );
          });
        });
      };

      function clearAnnotations(){
        dd.then(function(api){
          api.Plans.getCurrentlyViewed().then(function(plan){
            api.Annotations.get(plan.id).then(function(annotations){
              annotations.forEach(function(ann){
                console.log(ann)
                api.Annotations.delete(ann.id);
              })
            });
          });
        })
      }

    </script>
  </head>
  <body>
    <p>
      <label>
        Select a plan outline to draw <br / >
        <select id="planSelect"></select>
      </label>
    </p>

    <button onclick="drawOutline()">
      Draw outline of selected plan
    </button>
    <button onclick="clearAnnotations()">
      Delete all annotations on currently viewed plan
    </button>
  </body>
</html>

```
