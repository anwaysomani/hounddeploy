$('.wrapper').click(function(){
  $('.search').addClass('opened');
  $('.searchbox').focus();
});

$(document).keyup(function(e) {
 if (e.keyCode == 27) { 
  console.log("Treheouse");
  $('.search').removeClass('spin');
  $('.exit').removeClass('dark'); $('.search').removeClass('opened');
  $('.wrapper').removeClass('shrink');
  $('.searchbox').val('');
}
});

$('.inner h4').click(function() {
  $('.search').removeClass('spin');
  $('.exit').removeClass('dark'); $('.search').removeClass('opened');   $('.wrapper').removeClass('shrink');
  $('.searchbox').val('');
});

$('.exit').click(function(){
  $('.search').removeClass('opened');
});

$('.searchform').submit(function(){
  $('body').trigger(jQuery.Event( "aksar"));
  $('.search').removeClass('opened');
  $('.wrapper').addClass('shrink');
  $('.search').addClass('spin');
  $('.exit').addClass('dark');
  return false;
});
