/*!
 * jquery.scrollBottom.js v0.1.3 - 17 December, 2012
 * By João Gonçalves (http://goncalvesjoao.github.com)
 * Hosted on https://github.com/goncalvesjoao/jQuery-scrollBottom
 * Licensed under MIT license.
 */

(function($){
  
  var methods = {
    init: function(callback, margin_bottom) {
      if (margin_bottom == undefined) margin_bottom = 0;
      return this.each(function() {
        $(this).scroll(function() {
          var container = $(this);
          if ((container[0].scrollHeight - container.scrollTop()) < (container.outerHeight() + margin_bottom)) {
            container.trigger('scrollBottom');
          }
        });
        $(this).bind('scrollBottom', callback);
      });
    },
    destroy: function() {
      return this.each(function() {
        $(this).unbind('scrollBottom');
      });
    }
  }

  $.fn.scrollBottom = function(method, margin_bottom) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method == "function") {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.scrollBottom');
    }
  };
})(jQuery);