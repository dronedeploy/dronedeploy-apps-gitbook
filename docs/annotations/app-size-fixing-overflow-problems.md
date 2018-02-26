Some elements when positioned absolute or fixed will not overflow the page. Therefore, when DroneDeploy calculates the size of your application it won't include these overflown elements.

![](/assets/Screen Shot 2017-06-19 at 9.41.21 AM.png)

See below for an example of how to fix this problem.

![](/assets/Screen Shot 2017-06-19 at 9.44.31 AM.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    .overlay{
      position: fixed;
      height: 500px;
      width: 200px;
      background-color: grey;
      top: 30px;
    }
  </style>
</head>
<body>

<button>Toggle Overlay That Doesn't Reflow the Page</button>

<div class="overlay" style="display: none;">
  This overlay is positioned fixed so when the DroneDeploy calculates the size of your app (document.body.scrollHeight) it won't include this element.
</div>

<script>
var toggleButton = document.querySelector('button');
var overlay = document.querySelector('.overlay');

var showOverlay = false;
toggleButton.addEventListener('click', function(){
  showOverlay = !showOverlay;

  if (showOverlay){
    overlay.style.display = 'block';
    document.body.style.height = '600px';
  } else{
    overlay.style.display = 'none';
    document.body.style.height = '';
  }
});
</script>
  
</body>
</html>
```



