$(window).scroll(function(){
    $(".main-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(".main-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#id_about").offset().top
    }, 1000);
})

// Smooth scrolling.
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    // Avoid overriding default behaviour for the carousel.
    if ($.attr(this, 'href').includes('carousel')) {
        return;
    }
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});