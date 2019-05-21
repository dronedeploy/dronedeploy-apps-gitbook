![](/docs/assets/Screenshot%202017-03-08%2014.19.42.png)

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
            margin-left: auto;
        }
        
        input[type="text"] {
            width: 100%;
        }
        
        .btn {
            border: none;
            background-color: #039be5;
            /*border-radius: 5px;*/
            font-size: 14px;
            font-family: Lato;
            font-weight: 500;
            color: white;
            padding: 10px 16px;
            margin-top: 10px;
            flex-basis: 100%;
            width: 100%;
        }
        
        .form-group {
            width: 100%;
            display: inline-flex;
            justify-content: flex-start;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <span class="title sans">Message.showToast example</span>
    <form action="" id="messageForm">
        <div class="form-group">
            <label for="messageInput" class="sans">Message:</label>
            <input type="text" id="messageInput" placeholder="Enter a message" class="sans">
        </div>
        <div class="form-group">
            <label for="messageNumber" class="sans">Timeout (in seconds): </label>
            <input type="number" id="messageNumber" min="1" max="1000" value="1" class="sans">
        </div>
        <button type="submit" id="messageSubmit" class="btn sans">Submit</button>
    </form>
    <script>
        new DroneDeploy({
            version: 1
        }).then(function(dronedeployApi) {

            var messageForm = document.getElementById('messageForm');

            messageForm.addEventListener('submit', function showMessage(event) {
                event.preventDefault();
                var message = document.getElementById('messageInput').value;
                var timeout = Number(document.getElementById('messageNumber').value) * 1000;

                dronedeployApi.Messaging.showToast(message, {
                    timeout: timeout
                })
            });
        });
    </script>
</body>

</html>
```



