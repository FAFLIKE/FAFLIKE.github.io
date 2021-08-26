$(function () {
   var jqBar = $('.count'); // селектор для вашего блока
   var jqBarStatus = true;
   $(window).scroll(function() {
       var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
       if (scrollEvent && jqBarStatus) { 
           jqBarStatus = false;
           /* выполнение скрипта*/
           $('.count').each(function () {
            $(this).prop('Counter',0).animate({
             Counter: $(this).text()
             }, {
              duration: 1500,
              easing: 'swing',
              step: function (now) {
                 $(this).text(Math.ceil(now));
              }
             });
         });
       }
   });
});