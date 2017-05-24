# UI Kit

We highly recommend using these UI components, as they are designed to work inside DroneDeploy app. 

![](/assets/ui-kit-image.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/loading.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/chip.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/info.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/toggle.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/input.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/radio.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/dropdown.js"></script>
    <script type="text/javascript" src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/slider.js"></script>
    <style type="text/css">
        .extra-room {
            margin-bottom: 50vh;
        }
    </style>
</head>
<body>

<h2>Loading:</h2>
<dd-loading></dd-loading>

<h2>Toggle button:</h2>
<dd-toggle id="first-toggle"></dd-toggle>

<span>Button1 is <span class="toggle-out-1">off</span></span>
<br />

<dd-toggle id="second-toggle" on></dd-toggle>
<span>Button2 is <span class="toggle-out-2">on</span></span>

<h2>Chip:</h2>
<dd-chip>I'm a chip!</dd-chip>
<dd-chip>I'm a chip with a much, much, much, much, longer string of text!</dd-chip>
<br />

<h2>Text input</h2>
<dd-input label="This is the label" placeholder="This is the placeholder" defaultValue="Default content" id="test-input"></dd-input>

<h3>Current input value: <span class="input-output"></span></h3>

<h2>Info:</h2>
<dd-info title="Access Tracking Events" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    readMoreLink="https://somelinkinnewtab.com"></dd-info>
<br />

<p>Be sure to check the info box at the far right >>>>></p>
<dd-info style="position: absolute; right: 0" title="This is the title" text="readMoreLink is optional"></dd-info>

<h2>Radio: </h2>
<dd-radio id="test-radio" selected="num2">num1, num2, num3, num4, num5, num6, num1, num1, num1, num1</dd-radio>

<h3>Currently selected value: <span class="radio-output"></span></h3>

<h2>Dropdown:</h2>
<dd-dropdown label="Resolution" defaultValue="Select an option" id="test-dropdown">0.4in/px,0.8in/px,2in/px,4in/px,8in/px,20in/px</dd-dropdown>

<h2>Slider:</h2>
<dd-slider value="40"></dd-slider> <!-- slider from 0 - 100 -->
<h3>Value: <span id="slider-value">40</span></h3>
<script>
document.querySelector('dd-slider').addEventListener('change', function(e){
    document.querySelector('#slider-value').innerHTML = e.target.value;
});
</script>

<br>
<br>
<br>
<br>

</body>
</html>
```



