// Generated by CoffeeScript 1.9.3
(function() {
  var delay;

  delay = function(ms, func) {
    return setTimeout(func, ms);
  };

  delay(25000, function() {
    if ($('#main-modal').css('display') === 'none') {
      return $('#main-modal').openModal();
    } else {

    }
  });

}).call(this);
