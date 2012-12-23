#jQuery-scrollBottom v1.7 - 23 December, 2012
jQuery plugin that detects and triggers an event when the browser's window, or an html element's scrollbar have reached the bottom (or a certain bottom margin).

### Typically used for endless pagination.

In fact, this plugin was made to be used with [rails-ajax-handler](https://github.com/goncalvesjoao/rails-ajax-handler) in order achieve endless pagination in 3 easy steps in a Rails App.

<br/>
## Instalation
Include the **source/javascripts/jquery.scrollBottom.js** in your code.
<br/>
PS: *This script depends on jquery, so make sure to also include it.*

<br/>
## Examples
```html
  <div id="doctors_list" style="height: 200px; overflow:auto;">
    ...
    lots of doctors that would make the #doctors_list go beyond the 200px of height.
    ...
  </div>
```
```javascript
  $(document).ready(function() {
    $("#doctors_list").scrollBottom(function() {
  	  alert("#doctors_list's scrollbar have reached the 100px near the bottom.");
    }, 100);
  });
```
or
```javascript
  $(document).ready(function() {
    $(window).scrollBottom(function() { alert("window scrollbar have reached the bottom."); });
  });
```
or even
```javascript
  $(document).ready(function() {
    $("#doctors_list").scrollBottom(function() {
      alert("#doctors_list's scrollbar have reached the 150px near the bottom (repeated and constant check).");
    }, { margin_bottom: 150, constant_check: true });
  });
```
WARNING: This last example will launch multiple alert messages, due to the fact that the callback function will be executed everytime the **scroll** event for the *#doctors_list* is triggered.

This is why the default value of the **constant_check** option is set to **false**.

<br/>
## Methods
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>init</td>
      <td>callback, options</td>
      <td>this</td>
      <td>Initializes necessary data and bind events to the target element.</td>
    </tr>
    <tr>
      <td>check_bottom</td>
      <td>bypass_validation</td>
      <td>this</td>
      <td>Checks if the target element's scrollbar has reached the bottom (minus the `margin_bottom`) and triggers the `callback` set by the method `init`.<br/></td>
    </tr>
    <tr>
      <td>destroy</td>
      <td>null</td>
      <td>this</td>
      <td>Removes all data and bind events attached to the target element.</td>
    </tr>
  </tbody>
</table>

<br/>
## `init` params
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
      <td>...</td>
    </tr>
    <tr>
      <td>options</td>
      <td>int, Hash, undefined</td>
      <td>0</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
<br/>
### When `options` is a Hash ###
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
      <td>...</td>
    </tr>
    <tr>
      <td>constant_check</td>
      <td>boolean</td>
      <td>false</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

<br/>
## `check_bottom` params
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
      <td>...</td>
    </tr>
  </tbody>
</table>