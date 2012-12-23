#jQuery-scrollBottom v1.7 - 23 December, 2012
jQuery plugin that detects and triggers a callback when the target's scrollbar have reached the bottom (or a certain bottom margin).

### Typically used for endless pagination.

In fact, this plugin was made to be used with [rails-ajax-handler](https://github.com/goncalvesjoao/rails-ajax-handler) in order achieve endless pagination in 3 easy steps in a Rails App.

<br/>
## Instalation
You just need to include **jquery** and **jquery.scrollBottom.js** in your code, how you do it, is up to you.
```html
  <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
  <script src="/assets/javascripts/jquery.scrollBottom.js" type="text/javascript"></script>
```

<br/>
## Quick Example
```html
  <div id="doctors_list" style="height: 200px; overflow:auto;">
    ...
    lots of doctors that would make the #doctors_list go beyond the 200px of height.
    ...
  </div>
```
```javascript
  $("#doctors_list").scrollBottom(function() {
    alert("#doctors_list's scrollbar have reached the 100px near the bottom.");
  }, 100);
```
or
```javascript
  $(window).scrollBottom(function() { alert("window scrollbar have reached the bottom."); });
```

<br/>
## Methods

### `init` method ###
Initializes necessary data and bind events to the target.

#### Params ####
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>callback</td>
      <td>function</td>
      <td>undefined</td>
      <td>Function with the code that you want to execute when the target's scrollbar reaches the bottom.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>int, Hash, undefined</td>
      <td>0</td>
      <td>If `options` is an <b>int</b>, it will defined the value of `margin_bottom` that in turn will define the <b>height</b> at which the scrollbar should fire the `callback`.</td>
    </tr>
  </tbody>
</table>

#### If `options` is a Hash, here is what you can do with it ####
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>margin_bottom</td>
      <td>int</td>
      <td>0</td>
      <td>Height (counting from the bottom up) at where the scrollbar should fire the `callback`.</td>
    </tr>
    <tr>
      <td>constant_check</td>
      <td>boolean</td>
      <td>false</td>
      <td>
        If <b>false</b> the `callback` will only fire once while the scrollbar is at or bellow the `margin_bottom`, unless the scrollbar goes up again.
        <br/>
        If <b>true</b> the `callback` will fire everytime the target's 'scroll' event is triggered.
      </td>
    </tr>
  </tbody>
</table>

#### Examples ####
```javascript
$("#doctors_list").scrollBottom(function() { ... }, 50);
```
```javascript
$("#doctors_list").scrollBottom(function() { ... }, { margin_bottom: 50, constant_check: true });
```
**WARNING:** This last example will trigger the `callback` multiple times, due to the fact that it is binded to the **scroll** event of *#doctors_list*. This is why the default value of the **constant_check** option is set to **false**.

**NOTE:**
```javascript
$("#doctors_list").scrollBottom(function() { ... });
//is the same as
$("#doctors_list").scrollBottom('init', function() { ... });
```

<br/>
### `check_bottom` method ###
Checks if the target's scrollbar has reached the bottom (minus the `margin_bottom`) and triggers the `callback` set by the method `init`.

#### Params ####
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bypass_validation</td>
      <td>boolean, undefined</td>
      <td>true</td>
      <td>
        If the scrollbar is at or bellow the `margin_bottom` value and `bypass_validation` is <b>false</b>, the `callback` function will only be executed once (unless `constant_check` is <b>true</b>).
      </td>
    </tr>
  </tbody>
</table>

#### Example ####
```javascript
$("#doctors_list").scrollBottom('check_bottom');
```
In case you need to manually check if the target's scrollbar is at the bottom and trigger your `callback`.

<br/>
### `destroy` method ###
Removes all data and bind events attached to the target.

#### Example ####
```javascript
$("#doctors_list").scrollBottom('destroy');
```
