# Forms

Most components within a form follow material design guidelines. It is important that these custom components are used to comply with DroneDeploy's design guidelines. Please note that most of the input elements will require that you add the jQuery CDN link provided on the Get Started page.

### Input Fields

The `.input-field` allow users to input data. The bottom border of the input field should light up on focus with our blue brand color.

The `.validate` class adds valid or invalid to show an error message within an input field. If you don't wish to use material design validation simply remove the `.validate` class from your input HTML element.

![](/assets/md-form.jpg)

```
<div class="row">
    <form class="col-4">
      <div class="row">
        <div class="input-field col-2">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col-2">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col-4">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col-4">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col-4">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
      </div>
    </form>
  </div>
```

### Validation Messaging

By adding `data-error` as an attribute or `data-success` you can add custom messaging to tyour input field label.

![](/assets/data-error-input-md.jpg)

```
  <div class="row">
    <form class="col-4">
      <div class="row">
        <div class="input-field col-4">
          <input id="email" type="email" class="validate">
          <label for="email" data-error="wrong" data-success="Valid Email">Email</label>
        </div>
      </div>
    </form>
  </div>
```

### Textarea Field

A textarea should be used when there is multiple lines of content that need to be entered to an input field. The textarea input is liquid and will re-size according to content's height.

![](/assets/textarea-input-md.jpg)

```
 <div class="row">
    <form class="col-4">
      <div class="row">
        <div class="input-field col-4">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
      </div>
    </form>
  </div>
```

### Select

Selects allow you to set a number of options.

