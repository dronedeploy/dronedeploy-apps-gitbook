# Getting Started

## Download DD App Template

We have designed a basic template which includes our stylesheet and collapsible component. Download it [here](/expandable app example here).

## Basic Guidelines

* Apps should take only the space they need
* Apps should leverage DroneDeploy CSS styles \(styles.css\) and should be designed to look native to the platform
* Use of company logos are welcome but colors should generally coordinate to the DroneDeploy color palette
* Apps with actions \(e.g. sign in\) should generally first be engaged with \(e.g. clicked\), before they expand to show more content
  * Apps, by default, are in a non-expanded state of **60px** in height
  * When expanded \(clicked\), apps can be up to **360px** in height

## Understanding our Grid System

Our default styles include a basic 4 column grid system, enabling a layout for your app that is similar to the DroneDeploy site:

![](grid system.png)

Content should generally be left-justified.

There are three major components — containers, rows, and columns.

* Rows are horizontal groups of columns that ensure your columns are lined up properly.

* Containers — `.container` for the appropriate fixed width and maintaining app related elements within scope.

* Column classes indicate the number of columns you’d like to use out of the possible 4 per row. So if you want 2 equal-width columns, you’d use `.col-2`twice or if you’d like an icon, then 3 columns of text, you’d use `.col-1`, and then `.col-3`

* Hierarchy: `.container`  **&gt;** `.row` **&gt;** `.col-4`

### Grid System Examples

#### Default \(Most Popular\)

#### ![](/assets/Autodesk collapsed.png)

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

#### **Single Button App \(contact us before using this design\)**

#### ![](logo with text app.png)

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

#### Passive Apps** \(requires no interaction, contact us before using this design\)**

#### ![](Information app.png)



