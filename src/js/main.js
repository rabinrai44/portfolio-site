// Sticky Navigation for future wish
// $(window).on('scroll', function() {
//     if ($(window).scrollTop()) {
//         $('nav').addClass('nav-sticky');
//     }
//     else {
//         $('nav').removeClass('nav-sticky');
//     }
// })

// Smooth Scrolling

$(document).ready(function(){ 
    $('nav li a').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
         && location.hostname == this.hostname) { 
             var $target = $(this.hash); 
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
              if ($target.length) { 
                  var targetOffset = $target.offset().top; 
                  $('html,body') .animate({
                      scrollTop: targetOffset
                        }, 1000);
                    return false; 
                        } 
                    } 
                }); 
        });
// reference: https://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12