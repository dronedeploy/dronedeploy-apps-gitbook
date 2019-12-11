![](/docs/assets/projects-team.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
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
    <h1 class="title sans">Projects.team example</h1>
    <ul id="project"></ul>
    <script>
        const projectOutput = document.getElementById('project')

        function formatObject(obj) {
            const keys = Object.keys(obj);
            return keys.map(function(key) {
                return typeof obj[key] === 'object' ? `<li><span class="key sans">${key}</span>: </li><ul>${formatObject(obj[key])}</ul></li>` : `<li><span class="key sans">${key}</span>: ${obj[key]}</li>`
            }).join('')
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Projects.team()
            })
            .then(function(members) {
                projectOutput.innerHTML = formatObject(members)
            });
    </script>
</body>

</html>
```



