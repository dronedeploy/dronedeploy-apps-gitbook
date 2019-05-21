![](/docs/assets/Screenshot%202017-03-07%2010.39.48.png)

**note: **You must upload your own project in order to use this API.  Please refer to the article on uploading an example project.

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
            text-align: center;
        }
        
        .sans {
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }
        
        ul {
            max-height: 700px;
            overflow-y: scroll;
        }
        
        li {
            list-style: none;
            float: left;
            margin: 1px 5px;
        }
        
        img {
            max-width: 100px;
        }
    </style>
</head>

<body>
    <h1 class="title sans">Images.get example</h1>
    <ul id="images"></ul>
    <script>
        var imageOutput = document.getElementById('images');

        function formatOutput(image) {
            //es6 template string
            return `<li class="image-output">
                  <img src="${image.path}" />
                </li>`
        }

        var options = {
            width: 450,
            height: 450
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.getCurrentlyViewed()
                    .then(function(plan) {
                        return dronedeployApi.Images.get(plan.id, options)
                    })
            })
            .then(function(images) {
                imageOutput.innerHTML = images.map(formatOutput).join('');
            });
    </script>
</body>

</html>
```



