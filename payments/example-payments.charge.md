![](/assets/Screenshot 2017-02-08 10.36.30.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1 class="title">Payments.charge example</h1>
  <form action="" id="payments-form">
  <label for="payment-amount">Pay what you want!</label>
    <div id="input-box">
      $<input type="text" placeholder="00.00" id="payment-amount" />
    </div>
    <button id="payment-button">Pay</button>
  </form>
  <script>
    var paymentForm = document.getElementById('payments-form');
    new DroneDeploy({ version: 1})
      .then(function(dronedeployApi) {
        paymentForm.addEventListener('submit', function(event) {
          event.preventDefault();
          var amount = Number(event.target[0].value.replace(/(\d+\.\d{0,2})\d*/, '$1'));

          if(amount !== amount) {
            event.target[0].value = '';
            return dronedeployApi.Messaging.showToast('Must enter a number', { timeout: 5000 });
          }

          dronedeployApi.Payments.charge(amount, 'Testing payments')
            .then(
              function successfulPayment(paymentId) { dronedeployApi.Messaging.showToast('Success! Payment ID: ' + paymentId, { timeout: 5000 }) },
              function failedPayment(error) { dronedeployApi.Messaging.showToast(error, { timeout: 5000 }) }
            );
        });
      })
  </script>
</body>
</html>
```



