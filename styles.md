# App Design Guidelines

Please adhere to the embedded CSS style guidelines in the example "Hello World" application.

In order to ensure a good experience for users — buttons, colors, fonts, etc. should all look as if they belong in the DroneDeploy UI.

If you stick to the CSS styles that are embedded in the example "Hello World" app, you are on the right track.

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
* Apps with actions (e.g. sign in) should generally first be engaged with (e.g. clicked), before they expand to show more content
  * Apps, by default, are in a non-expanded state of 60px in height
  * When expanded (clicked), apps can be up to 360px in height


## Grid System

Our default styles include a basic 4 column grid system, enabling a layout for your app that is similar to the DroneDeploy site:

**[INSERT IMAGE]**

Content should generally be left-justified.

There are just two major components — rows and columns:
* Rows are horizontal groups of columns that ensure your columns are lined up properly.
* Content should be placed within columns, and only columns may be immediate children of rows.
* Column classes indicate the number of columns you’d like to use out of the possible 4 per row. So if you want 2 equal-width columns, you’d use ```.col-2```., or if you’d like an icon, then 3 columns of text, you’d use ```.col-1```, and then ```.col-3```
* Row height: **60px**
* Column width: **67px**
* Gutter: **4px**


## Templates

To get you started, we’ve provided 3 main templates:

### Full Row App

1. Maximum row height: **60px**
2. Can contain button, text, icon, or image

### Variations

**Logo and Button:**

**[INSERT IMAGE]**

```.col-2``` - Logo

```.col-2``` - Button

     <div class="row">
    <div class="col-2">
      <img class="logo" src="logo.png">
    </div>
    <div class="col-2" id="status-bar">
    <button id="authBtn">Sign In</button>
      </div>
    </div>


**Logo with text:**

**[INSERT IMAGE]**

```.col-1``` - Icon and Label

```.col-3``` - Explanation text

```<div class="row">
    <a id="report-button">
      <div class="col-1">
      <img class="icon" src="img/icon.png">
        <div id="button-text">Generate</div>
      </div>
      <div class="col-3">
        Printable and editable map report, with annotations.
      </div>
    </a>
  </div>```

**Information:**

**[INSERT IMAGE]**

**Expandability**
Any app can be expandable on a click from a user. This click expands the app to grant more vertical space.
* Max height of **360px high**. 
* Should contain a specific collapsible “close” button on top right
  * We recommend this “close” icon: https://material.io/icons/#ic_close

**[INSERT IMAGE]**

* No scrolling is allowed —use next buttons to show new inputs via pagination

**[INSERT IMAGE]**

Click ‘Sign In’ to Expand to:

**[INSERT IMAGE]**

 ``` <div class="row">
      <div class="col-2">
        <img class="logo" src="img/icon.png">
      </div>
      <div class="col-2">
        <button class="button" id="expandBtn" onClick="expand()">Sign In</button>
      </div>
    </div>


  <div class="expandable">
    <div class="row input-container">
      <input class="" type="text" placeholder="E-mail">
    </div>
    <div class="row input-container">
      <input class="" type="text" placeholder="Password">
    </div>


    <div class="row">
      <div class="col-2">
        <button class="button secondary">Register</button>
      </div>
      <div class="col-2">
        <button class="button primary">Sign In</button>
      </div>
    </div>
  </div>```

**Sign In templates**
* Includes an action button “sign in”
* Expands to display Username and Password inputs, sign in and register buttons, and collapsable button icon (to be provided).
