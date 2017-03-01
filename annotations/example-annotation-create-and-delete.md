![](/assets/Screen Shot 2017-02-19 at 5.01.28 PM.jpg)

```html
<html>
  <head>
    <title></title>
    <script>
      let planGeometry = {};

      var dd = new DroneDeploy({
        version: 1
      });

      dd.then((api)=>{
        let select = document.getElementById('planSelect');
        select.innerHTML = '';

        api.Plans.all().then((plans)=>{
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

        dd.then((api)=>{
          api.Plans.getCurrentlyViewed().then((plan)=>{
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
        dd.then((api)=>{
          api.Plans.getCurrentlyViewed().then((plan)=>{
            api.Annotations.get(plan.id).then((annotations)=>{
              annotations.forEach((ann)=>{
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
