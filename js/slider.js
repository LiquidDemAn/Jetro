$(document).ready(function(){
    $('.welcome-slider__wrapper').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
    });
    $('.welcome-thumbnails').slick({
        arrows: false,
        slidesToShow: 6,
        asNavFor: '.welcome-slider__wrapper',
        focusOnSelect: true
    });
}); 