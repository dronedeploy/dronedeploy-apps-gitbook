![](/assets/Screenshot 2017-02-08 10.33.47.png)

# [Install the example](https://www.dronedeploy.com/app2/applications/589b55fdc256798c1c4cd1c5/install "Install the example application")

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <span class="title">Annotation.get example</span>
    <form action="" id="messageForm">
        <label for="messageInput">Message:</label>
        <input type="text" id="messageInput" placeholder="Enter a message">
        <br>
        <label for="messageNumber">Timeout (in seconds): </label>
        <input type="number" id="messageNumber" min="1" max="10" value="1">
        <br>
        <button type="submit" id="messageSubmit">Submit</button>
    </form>
    <script>
      new DroneDeploy({ version: 1 }).then(function(dronedeployApi) {

      var messageForm = document.getElementById('messageForm');

      messageForm.addEventListener('submit', function showMessage(event) {
        event.preventDefault();
        var message = document.getElementById('messageInput').value;
        var timeout = Number(document.getElementById('messageNumber').value) * 1000;

        dronedeployApi.Messaging.showToast(message, { timeout: timeout })
      });
    });

    </script>
</body>
</html>
```



