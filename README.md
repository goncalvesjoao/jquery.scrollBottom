#jQuery-scrollBottom
jQuery plugin that detects and triggers an event when the browser's window, or an html element's scrollbar have reached the bottom (or a certain bottom margin).

Typically used for endless pagination.

In fact, this plugin was made to be used with [rails-ajax-handler](https://github.com/goncalvesjoao/rails-ajax-handler) in order achieve endless pagination in 3 easy steps in a Rails App.

## Instalation
Include the **source/javascripts/jquery.scrollBottom.js** in your code.

PS: *This script depends on jquery, so make sure to also include it.*

## Usage
```javascript
  $("selector").scrollBottom(callback);
```
or
```javascript
  $("selector").scrollBottom(callback, margin_bottom);
```
in case you need to trigger the callback, X pixels before the scroll reached the bottom.

## Example
```html
  <div id="patients_list" style="height: 200px; overflow:auto;">
    ...
    lots of patients that would make the #patients_list go beyond the 200px of height.
    ...
  </div>
```
```javascript
  $(document).ready(function() {
    $("#patients_list").scrollBottom(function() {
  	  alert("#patients_list's scrollbar have reached the 100px near the bottom.");
    }, 100);
  });
```
or
```javascript
  $(document).ready(function() {
    $(window).scrollBottom(function() { alert("window scrollbar have reached the bottom."); });
  });
```
