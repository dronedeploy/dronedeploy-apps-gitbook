![](/docs/assets/Screenshot%202017-03-07%2010.55.04.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        body {
            text-align: center;
            height: 300px;
        }
        
        button {
            width: 200px;
            height: 200px;
            border: none;
            border-radius: 50%;
            background-color: red;
            color: white;
            font-size: 2em;
            cursor: pointer;
            box-shadow: 0px 47px 37px -30px rgba(0, 0, 0, 0.51);
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
        
        .title {
            font-size: 1.3em;
            font-weight: 500;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Link.open example</h1>
    <button type="button" id="linkBtn">Open Link</button>
    <script>
        document.getElementById('linkBtn').addEventListener('click', function(event) {
            event.preventDefault();
            new DroneDeploy({
                version: 1
            }).then(function(dronedeployApi) {
                dronedeployApi.Link.open('https://dronedeploy.com');
            })
        })
    </script>
</body>

</html>
```



