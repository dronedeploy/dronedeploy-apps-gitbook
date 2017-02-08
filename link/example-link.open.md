![](/assets/Screenshot 2017-02-08 10.29.18.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1 class="title">Link.open example</h1>
  <button type="button" id="linkBtn">Open Link</button>
  <script>
    document.getElementById('linkBtn').addEventListener('click', function(event){
      event.preventDefault();
      new DroneDeploy({ version: 1 }).then(function(dronedeployApi) {
        dronedeployApi.Link.open('https://dronedeploy.com');
      })
    })
  </script>
</body>
</html>

```



