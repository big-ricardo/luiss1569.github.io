// $(window).scroll(event => {

//     var scrollPos = $(document).scrollTop();

//     $('.nav-item a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top - 60 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navlink').removeClass("active");
//             currLink.addClass("active");
//         }
//         else {
//             currLink.removeClass("active");
//         }
//     });
// })
// $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");

//     $('a').each(function () {
//         $(this).removeClass('active');
//     })
//     $(this).addClass('active');
//     var target = this.hash,
//         menu = target;
//     $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top + 2
//     }, 600, 'swing', function () {
//         window.location.hash = target;
//         $(document).on("scroll", onScroll);
//     });

// });

// $(window).scroll(function () {
//     // the "12" should equal the margin-top value for nav.stickydiv

//     var window_top = $(window).scrollTop() + 12;
//     var div_top = $('#services').offset().top;
//     console.log(window_top, div_top)
//     if (window_top >= div_top) {
//         $('.h_right').addClass('fixed');
//     } else {
//         $('.h_right').removeClass('fixed');
//     }
// });
