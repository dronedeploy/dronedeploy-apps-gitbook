![](/docs/assets/Screenshot 2017-03-08 13.03.28.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .title {
            font-size: 1.3em;
            font-weight: 500;
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
        
        .btn {
            border: none;
            background-color: #039be5;
            font-size: 14px;
            font-family: Lato;
            font-weight: 500;
            color: white;
            padding: 10px 16px;
            margin-top: 10px;
            flex-basis: 100%;
            width: 100%;
        }
        
        label {
            font-weight: 300;
        }

        input,
        select {
            border: none;
            border-radius: 0;
            border-bottom: 1px solid #039be5;
            min-width: 30%;
            max-width: 100%;
            font-size: 0.8em;
            font-size: 14px;
        }
        
        input[type="text"] {
            width: 100%;
            margin-top: 5px;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Plans.update example</h1>
    <div id="planDetails"></div>
    <form action="" id="updateForm">
        <input type="text" class="sans" placeholder="New Project Name" id="newName" />
        <button type="submit" class="btn sans" id="updateBtn">Update name</button>
    </form>
    <button type="button" id="randomizeGeometry" class="btn">Randomize geometry</button>
    <script>
        var planOutput = document.getElementById('planDetails');
        var updateForm = document.getElementById('updateForm');
        var updateBtn = document.getElementById('updateBtn');
        var randomizeBtn = document.getElementById('randomizeGeometry');

        function formatOutput(plan) {
            //es6 template string
            return `<div class="details>
            <h2 class="planName sans">
                ${plan.name}
            </h2>
            <br>
            <span class="author sans">By ${plan.username}</span>
        </div>`
    }

    function randomlyAdjustGeometry(geometry) {
        var offset = Math.random() / 100 * ([1, -1][Math.floor(Math.random() * 2)]);
        geometry[2].lng = geometry[0].lng + offset;
        return geometry;
    }

    new DroneDeploy({
        version: 1
    })
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
