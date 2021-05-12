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

$('#presentation_form_photo').on('change',(event) => {
   src = URL.createObjectURL(event.target.files[0]);
    console.log(src)
    $('#img-pres').attr('src',src)
    src.onload = function() {
      URL.revokeObjectURL(src) // free memory
    }
})
$(document).on('change', '.custom-file-input', function () {
    let fileName = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
    $(this).parent('.custom-file').find('.custom-file-label').text(fileName);
});
var loadFile = function(event) {
    var output = document.getElementById('presentation_form_photo');
    output.src = URL.createObjectURL(event.target.files[0]);
    console.log(output)
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
