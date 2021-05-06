function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href');
    var scroll_to = 0;
    if(element_class != '.home') {
        scroll_to = $(element_class).offset().top - nav_height;
        $(element_class).css('color','green')
    }
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}
 
$(function() {
    $('.nav-home').css('color','yellow')
    $('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
        $('.nav-link').css('color','white')
        $(this).css('color','yellow')
    });
 
});
