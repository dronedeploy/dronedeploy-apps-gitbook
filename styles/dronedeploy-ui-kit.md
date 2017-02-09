![](/assets/Screenshot 2017-02-09 11.07.49.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DD UI Kit</title>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/chip.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/dropdown.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/info.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/input.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/loading.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/preact.min.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/radio.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/toggle-button.js"></script>
  <script src="https://s3.amazonaws.com/drone-deploy-plugins/templates/uikit/v1/toggle.js"></script>
</head>
<body>

<h2>Loading:</h2>
<dd-loading></dd-loading>

<h2>Toggle button:</h2>
<!-- document.querySelector('dd-toggle').value -->
<dd-toggle on></dd-toggle>

<h2>Chip:</h2>
<dd-chip>I'm a chip!</dd-chip>
<dd-chip>I'm a chip with a much, much, much, much, longer string of text!</dd-chip>
<br />

<h2>Text input</h2>
<dd-input label="This is the label" placeholder="This is the placeholder" defaultValue="Default content" id="test-input"></dd-input>

<h2>Info:</h2>
<dd-info title="Access Tracking Events" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." readMoreLink="https://somelinkinnewtab.com" ></dd-info>

<h2>Radio: </h2>
<dd-radio id="test-radio" selected="num2">num1, num2, num3, num4, num5, num6, num1, num1, num1, num1</dd-radio>

<h2>Dropdown:</h2>
<dd-dropdown label="Resolution" defaultValue="Select an option">0.4in/px,0.8in/px,2in/px,4in/px,8in/px,20in/px</dd-dropdown>

</body>
</html>
```



