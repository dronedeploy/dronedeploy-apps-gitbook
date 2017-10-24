# Grid

### Our Grid System

Our grid includes a flexbox grid with a 4 column layout. The width of the grid is fixed so there is no need for responsive design. 

**This is how the grid works:**

* Containers allow you to center your content within DroneDeploy's app side panel. It also keeps all your code within scope of the container.
* Rows are placed inside a container. Rows allow you to align content horizontally. 
* Columns allow you to set the number of columns that will compose your layout within the row. 

The grid is composed of three major components a container &gt; row &gt; 4 columns.

### 4 Column Grid

![](/assets/grid-columns-sample.png)

Here is an example of how you would structure 4 columns within your HTML

```
<div class="container">
  <div class="row">
    <div class="col-1">1</div>
    <div class="col-1">2</div>
    <div class="col-1">3</div>
    <div class="col-1">4</div>
  </div>
</div>
```

### Layouts with Diverse Column Width

![](/assets/columns-example-4.png)

Structuring your html to create rows with diverse column width

```
<div class="container">

  <div class="row">
    <div class="col-4"><div> is 4 columns wide</div>
  </div>

  <div class="row">
    <div class="col-2">2 columns</div>
    <div class="col-2">2 columns</div>
  </div>
</div>
```



