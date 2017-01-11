# Payments

* [Payments.charge](#paymentscharge)
* [Payment FAQ](#payment-faq)

## Payments.charge

#### Overview

This call allows your app to ask the user for a one time payment. Users must have a paid account to run paid apps. Payments will processed at the end of the month. When you request a payment, the user will see a request.

![](payment_request_screenshot.png)

**Parameters**

```javascript
const amount = Number;
const paymentFor = String;
window.dronedeploy.Payments.charge(amount, paymentFor);
```

#### Example Call

```javascript
window.dronedeploy.Payments.charge(4.00, 'Testing Payments')
  .then(
    function(success){ console.log('paymentId:', success) },
    function(error){ console.log(error) }
  )
```

**Note:** If your app is not published the returned paymentId is fake and is not saved to our database. Additionally, having a paid account is not enforced while in development.

Here is a screenshot of what you would see if your app is not published.  ![](/assets/fakepayment.png)

#### Example Response

**Success Response**

If the payment is successful you will receive the payment id.

```javascript
...then(function(paymentId){ console.log(paymentId) })
// 298348de72987ac
```

**Error Responses**

If the user clicks cancel on the payment request.

```javascript
.then(
  function(){},
  function(error){ console.log(error) },
)
// Error('User declined payment request.')
```

If the user does not have a paid account.

```javascript
.then(
  function(){},
  function(error){ console.log(error) },
)
// Error('User does not have a paid account.')
```

If the request fails \(I.E. the user is offline\).

```javascript
.then(
  function(){},
  function(error){ console.log(error) },
)
// Error('Error Submitting Payment')
```

## Payment FAQ

### How to validate a payment id?

To validate or get the status of a payment you can send a request to our public endpoint from your server. Details here,   
[http://support.dronedeploy.com/v1.0/docs/data-api-access](http://support.dronedeploy.com/v1.0/docs/data-api-access).

