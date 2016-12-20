$(document).ready(function() {
  $('a').hover(function() {
    $(this).css('color', 'blue');
  }, function() {
    $(this).css('color', 'green');
  });
});