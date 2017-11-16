# Forms

Most components within a form follow material design guidelines. It is important that these custom components are used to comply with DroneDeploy's design guidelines. Please note that most of the input elements will require that you add the jQuery CDN link provided on the Get Started page.

### Input Fields

The `.input-field` allow users to input data. The bottom border of the input field should light up on focus with our blue brand color.

![](/assets/username-password.jpg)

```
<div class="row">
  <div class="input-field col-4">
    <input type="text" class="validate">
    <label for="first_name">Username</label>
  </div>
</div>
<div class="row">
  <div class="input-field col-4">
    <input type="password" class="validate">
    <label for="password">Password</label>
  </div>
</div>
```

### Validation Messaging

By adding `data-error` as an attribute and the .invalid class to your &lt;div&gt; and  &lt;input&gt; you can add custom messaging to to your input field label.

![](/assets/data-error-input-md.jpg)

```
<div class="row">
  <div class="input-field invalid col-4" data-error="wrong">
    <input id="email" type="email" class="invalid">
    <label for="email">Email</label>
  </div>
</div>
```

### 

By adding .valid class to your input field you can highlight the border of the input green indicating that the data was validated successfully.

### ![](/assets/success-input.jpg)

```
<div class="row">
  <div class="input-field invalid col-4" data-error="Invalid email">
  <input id="email" type="email" class="invalid">
  <label for="email">Email</label>
  </div>
</div>
```

### Textarea Field

A textarea should be used when there is multiple lines of content that need to be entered to an input field. The textarea input is liquid and will re-size according to content's height.

![](/assets/textarea-input-md.jpg)

```
  <div class="row">
    <div class="input-field col-4">
      <textarea id="textarea1" class="materialize-textarea"></textarea>
      <label for="textarea1">Textarea</label>
    </div>
  </div>
```

### Select

Selects allow you to suggest options with one selection allowed.

![](/assets/materialized-select-md.jpg)

```
<div class="select">
    <select class="select-text">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <span class="select-highlight"></span>
    <span class="select-bar"></span>
    <label class="select-label"></label>
</div>
```

### Select Disabled State

Add `disabled` as an attribute to the &lt;select&gt; element to disable the whole select element.

![](/assets/disabled-select-md.jpg)

```
<div class="select">
    <select class="select-text" disabled>
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <span class="select-highlight"></span>
    <span class="select-bar"></span>
    <label class="select-label"></label>
</div>
```

### Radio Buttons

Radio buttons are used when there is a group of option and only one selection is allowed. 

![](/assets/options-radio.jpg)

```
<p>
  <input name="group1" type="radio" id="test1" />
  <label for="test1">Option 1</label>
</p>
```

### Switches

A switch has two states on and off. 

![](/assets/switches.jpg) 

```
<div class="switch">
  <label>
    <input type="checkbox">
    <span class="lever"></span>
  </label>
</div>
```

### Checkboxes

Checkboxes are used when there is a true or false option. Checkboxes can also be used to select multiple items in a group.

![](/assets/checbox-options.jpg) 

```
<p>
  <input type="checkbox" id="test5" />
  <label for="test5">Phantom 4</label>
</p>

 <p>
   <input type="checkbox" id="test5" />
   <label for="test5">Inspire 2</label>
</p>
```





