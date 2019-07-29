/*Reveal.addEventListener('sandbox', function(e) {
  // Called each time the slide with the "stats" state is made visible
  console.log('worked!', e);
  debugger;

});*/

$(function() {
  $('.load-btn').click(function() {
    var iframe = $(this).parent().find('iframe');
    var codesandbox = iframe.attr('data-x');
    iframe.attr('src', codesandbox);
  });
});
