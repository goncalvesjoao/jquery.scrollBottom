/*!
 * jquery.scrollBottom.js v1.6 - 22 December, 2012
 * By João Gonçalves (http://goncalvesjoao.github.com)
 * Hosted on https://github.com/goncalvesjoao/jquery.scrollBottom
 * Licensed under MIT license.
 */

(function($){
  var methods = {
    init: function(callback, margin_bottom) {
      if (margin_bottom == undefined) margin_bottom = 0;
      return this.each(function() {
        var $this = $(this), data = $this.data('scrollBottom');
        if (data) return $this;

        $this.data('scrollBottom', { reached_bottom: false, margin_bottom: margin_bottom });
        $this.bind('scroll.scrollBottom', function() { $this.scrollBottom('check_bottom', false); });
        $this.bind('scroll_reached_bottom', function(event) {
          callback(event);
          event.stopPropagation();
        });
      });
    },
    check_bottom: function(bypass_validation) {
      if (bypass_validation == undefined) bypass_validation = true;
      return this.each(function() {
        var $this = $(this), data = $this.data('scrollBottom');
        if (!data) return $this;

        var scrollHeight = (this == window) ? $(document).height() : this.scrollHeight;
        if ((scrollHeight - $this.scrollTop()) <= ($this.outerHeight() + data.margin_bottom)) {
          if (bypass_validation || !data.reached_bottom) {
            $this.trigger('scroll_reached_bottom');
            data.reached_bottom = true;
          }
        } else {
          data.reached_bottom = false;
        }
        $this.data('scrollBottom', data);
      });
    },
    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $this.unbind('scroll_reached_bottom');
        $this.unbind('.scrollBottom');
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