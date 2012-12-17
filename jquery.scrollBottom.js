/*!
 * jquery.scrollBottom.js v0.1.0 - 17 December, 2012
 * By João Gonçalves (http://goncalvesjoao.github.com)
 * Hosted on https://github.com/goncalvesjoao/jQuery-scrollBottom
 * Licensed under MIT license.
 */

(function($){
  $.fn.scrollBottom = function(callback) {
    return this.each(function() {
      $(this).scroll(function() {
        var container = $(this);
        if ((container[0].scrollHeight - container.scrollTop()) < (container.outerHeight())) {
          container.trigger('scrollBottom');
        }
      });
      $(this).bind('scrollBottom', callback);
    });
  };
})(jQuery);