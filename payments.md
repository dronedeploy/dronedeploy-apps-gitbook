# Payments (Arrival 10/18/2016)

## Payments.charge

#### Overview

This call allows your app to ask the user for a one time payment. Users must have a paid account to access paid apps. Payments will processed at the end of the month. When you request a payment the user will see a request.

![](payment_request_screenshot.png)

Method Parameters
```javascript
const amount = Number;
const paymentFor = String;
window.dronedeploy.Payments.charge(amount, paymentFor);
```

#### Example Call

```javascript
window.dronedeploy.Payments.charge(4.00, 'Testing Payments')
  .subscribe(
    (success) => console.log('paymentId:', success),
    (error) => console.log(error)
  )
```

#### Example Response

**Success Response**

If the payment is successful you will receive the payment id. 
```javascript
...subscribe((paymentId) => console.log(paymentId))
// 298348de72987ac
```

**Error Responses**

If the user clicks cancel on the payment request.
```javascript
...subscribe(
  () => {},
  (error) => console.log(error),
)
// Error('User declined payment request.')
```

If the user does not have a paid account.
```javascript
...subscribe(
  () => {},
  (error) => console.log(error),
)
// Error('User does not have a paid account.')
```

If the request fails (I.E. the user is offline).
```javascript
...subscribe(
  () => {},
  (error) => console.log(error),
)
// Error('Error Submitting Payment')
```