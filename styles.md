# App Design Guidelines

In order to ensure a good experience for users — buttons, colors, fonts, etc. should all look as if they belong in the DroneDeploy UI.

**If you stick to the CSS styles guidelines below and use the [expandable app example here](https://s3.amazonaws.com/drone-deploy-plugins/templates/dronedeploy-expand-example.zip), you are on the right track.**

=================

Building apps on the DroneDeploy platform should be simple and the apps you create should be beautiful, so we’ve built a set of guidelines and templates to help you create apps that are:

* Easy to use
* Follow established DroneDeploy design practices
* Are consistent with the DroneDeploy visual design
* But still express your brand

Any app that fulfills these guidelines will be approved on design without issue. Those that don’t will need special exception from our App Market team.

## Basic Guidelines

* Apps should take only the space they need
* Apps should leverage DroneDeploy CSS styles and should be designed to look native to the platform
* Use of company logos are welcome but colors should generally coordinate to the DroneDeploy color palette
* Apps with actions \(e.g. sign in\) should generally first be engaged with \(e.g. clicked\), before they expand to show more content
  * Apps, by default, are in a non-expanded state of 60px in height
  * When expanded \(clicked\), apps can be up to 360px in height

## Grid System

Our default styles include a basic 4 column grid system, enabling a layout for your app that is similar to the DroneDeploy site:

![](grid system.png)

Content should generally be left-justified.

There are three major components — containers, rows, and columns.

* Rows are horizontal groups of columns that ensure your columns are lined up properly.

* Containers — `.container` for the appropriate fixed width and maintaining app related elements within scope.

* Column classes indicate the number of columns you’d like to use out of the possible 4 per row. So if you want 2 equal-width columns, you’d use `.col-2`twice or if you’d like an icon, then 3 columns of text, you’d use `.col-1`, and then `.col-3`

* Hierarchy: `.container`  **&gt;** `.row` **&gt;** `.col-4`

## Templates

To get you started, we’ve provided 3 main templates:

### Full Row App

1. Can contain button, text, icon, or image

### Variations

**Logo and Arrow Icon Button:**

![](/assets/Autodesk collapsed.png)

All app's detailed content will be within the expandable div.

`.col-3` - Logo

`.col-1` - Button

```
<div class="container expand-container">
    <div class="row expand-row">
          <div class="col-3">
               <span class="lead vert-center"><img class="logo" src="autodesk-icn.svg" alt="autodesk"> Export to AutoDesk</span>
          </div>
          <div class="col-1 right">
               <i>
                   <img src="https://s3.amazonaws.com/drone-deploy-plugins/templates/login-example-imgs/arrow-down.svg" alt="collapse" class="expand-arrow">
              </i>
          </div>
        </div>
    </div>
```

**Logo with text:**

![](logo with text app.png)

`.col-1` - Icon and Label

`.col-3` - Explanation text

```
<div class="row">
    <a id="report-button">
      <div class="col-1">
      <img class="icon" src="img/icon.png">
        <div id="button-text">Generate</div>
      </div>
      <div class="col-3">
        Printable and editable map report, with annotations.
      </div>
    </a>
  </div>
```

**Information Layout Example:**

![](Information app.png)

**Expandability**

Any app can be expandable on a click from a user. This click expands the app to grant more vertical space.

* Max height of **360px high**
* You should always use our “collapse” arrow button on top right
* No scrolling is allowed —use next buttons to show new inputs via pagination

**Login Section**

* Expands to display Username and Password inputs, sign in and register buttons, and collapsable button icon.

![](/assets/Autodesk collapsed.png)

Click App to Expand to:

![](/assets/Autodesk expanded signin.png)

```
<div class="container expand-container">
  <div class="row expand-row">
    <div class="col-3">
      <img class="logo" src="autodesk.svg" alt="autodesk">
    </div>
    <div class="col-1 right">
      <i>
        <img src="arrow-down.svg" alt="collapse" class="expand-arrow">
      </i>
    </div>
  </div>
  <div class="expand-section" style="display: none;">
    <div class="row">
      <div class="input-field col-4">
        <input id="first_name" type="text" class="validate">
        <label for="first_name">Username</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col-4">
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <button class="primary">Login</button>
        <p class="center">Don't have an Autodesk account? <a href="#">Register</a></p>
      </div>
    </div>
  </div>
</div>
```



