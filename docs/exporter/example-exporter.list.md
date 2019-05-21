![](/docs/assets/Screenshot%202017-03-03%2014.29.09.png)

**note: **You must upload your own project in order to use this API.  Please refer to the article on uploading an example project.  Once the project has been uploaded, click on it to reach the export button.

![](/docs/assets/Screenshot%202017-02-09%2011.20.01.png)

Once you have queued an export, Export.list will have data to display.

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
            font-weight: 300;
            font-family: Lato, sans-serif;
            color: rgba(0, 0, 0, 0.87);
        }

        .subtitle {
            font-size: 1.1em;
        }

        #exports {
            padding: 0;
        }

        .export {
            list-style: none;
        }

        .download-link {
            text-decoration: none;
        }
    </style>
</head>

<body>
    <h2 class="title sans">Exporter.List example</h2>
    <ul id="exports" class="sans"></ul>
    <script>
        var exportOutput = document.getElementById('exports');

        function formatOutput(exp) {
            //es6 template string
            return `
          <li class="export subtitle">${new Date(exp.date_creation).toLocaleDateString()} - ${exp.status}: <a href="${exp.download_path}" target="blank" class="download-link" download>(link)</a></li>
        `
        }

        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                return dronedeployApi.Plans.getCurrentlyViewed()
                    .then(function(plan) {
                        return dronedeployApi.Exporter.list({
                            planId: plan.id
                        })
                    })
            }).then(function(exports) {
                exportOutput.innerHTML = exports.map(formatOutput).join('');
            })
    </script>
</body>

</html>
```



