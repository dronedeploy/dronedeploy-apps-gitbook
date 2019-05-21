![](/docs/assets/Screenshot%202017-03-08%2013.42.57.png)

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
    <h1 class="title sans">Plans.all example</h1>
    <ul id="plans" class="sans"></ul>
    <script>
        var planOutput = document.getElementById('plans');

        function formatPlan(plan) {
            //es6 template string
            return `<li>
                  <a href="https://www.dronedeploy.com/app2/data/"${plan.id}" target="_blank">${plan.name}</a> by ${plan.username}
                </li>
                `
        }

        function formatObject(obj) {
            var keys = Object.keys(obj);
            var result = keys.map(function(key) {
                return typeof obj[key] === 'object' ? `<li><span class="key sans">${key}</span>: </li><ul>${formatObject(obj[key])}</ul></li>` : `<li><span class="key sans">${key}</span>: ${obj[key]}</li>`
            }).join('')
            return result
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.all()
            })
            .then(function(plans) {
                plans.forEach(function(plan) {
                    planOutput.innerHTML += `<li class="plan-name"><h2>Plan: ${plan.name}</h2></li>`
                    planOutput.innerHTML += formatObject(plan)
                })
            });
    </script>
</body>

</html>
```



