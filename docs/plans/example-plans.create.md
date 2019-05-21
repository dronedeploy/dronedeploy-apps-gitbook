![](/docs/assets/plans-create.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .author {
            font-size: 0.9em;
        }
        
        .title {
            font-size: 1.1em;
            font-weight: 500;
            border-bottom: 1px dotted black;
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
        
        .key {
            font-weight: 700;
        }
        
        ul {
            padding: 5px;
        }
        
        li {
            list-style: none;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Plans.create example</h1>
    <ul id="plan-id"></ul>
    <script>
        var planOutput = document.getElementById('plan-id');
        var geometry = [
            {lat: 35.92778956007768, lng: -96.74685001373292},
            {lat: 35.92524492896255, lng: -96.74667120678352},
            {lat: 35.92532220011748, lng: -96.74959659576417},
            {lat: 35.92778151526379, lng: -96.7496186761855},
        ];
        var options = {name: 'Example Plan'};

        new DroneDeploy({ version: 1})
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.create(geometry, options)
            })
            .then(function(planId) {
                planOutput.innerHTML = 'Newly created plan ID:' + planId;
            });
    </script>
</body>

</html>
```