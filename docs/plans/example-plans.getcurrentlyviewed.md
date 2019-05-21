![](/docs/assets/Screenshot%202017-03-08%2013.37.23.png)

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
    <h1 class="title sans">Plans.getCurrentlyViewed example</h1>
    <ul id="plan"></ul>
    <script>
        var planOutput = document.getElementById('plan')

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
                return dronedeployApi.Plans.getCurrentlyViewed()
            })
            .then(function(plan) {
                planOutput.innerHTML = formatObject(plan)
            });
    </script>
</body>

</html>
```



