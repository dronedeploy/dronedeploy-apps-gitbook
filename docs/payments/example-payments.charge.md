![](/docs/assets/Screenshot%202017-03-07%2011.09.26.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
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
            width: 100%;
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
    </style>
</head>

<body>
    <h1 class="title">Payments.charge example</h1>
    <form action="" id="payments-form">
        <div class="form-group">
            <label for="payment-amount">Pay what you want!</label> $
            <input type="text" placeholder="00.00" id="payment-amount" />
        </div>
        <button id="payment-button" class="btn">Pay</button>
    </form>
    <script>
        var paymentForm = document.getElementById('payments-form');
        new DroneDeploy({
                version: 1
            })
            .then(function(dronedeployApi) {
                paymentForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    var amount = Number(event.target[0].value.replace(/(\d+\.\d{0,2})\d*/, '$1'));

                    if (amount !== amount) {
                        event.target[0].value = '';
                        return dronedeployApi.Messaging.showToast('Must enter a number', {
                            timeout: 5000
                        });
                    }

                    dronedeployApi.Payments.charge(amount, 'Testing payments')
                        .then(
                            function successfulPayment(paymentId) {
                                dronedeployApi.Messaging.showToast('Success! Payment ID: ' + paymentId, {
                                    timeout: 5000
                                })
                            },
                            function failedPayment(error) {
                                dronedeployApi.Messaging.showToast(error, {
                                    timeout: 5000
                                })
                            }
                        );
                });
            })
    </script>
</body>

</html>
```



