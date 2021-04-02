// banner-part start
$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
});
// banner-part end
// videp-part start
$('.venobox').venobox();
// videp-part end
// ss-part start
$('.pain').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
});
// ss-part end



// feedback-part start
$('.texts').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.imgs',
});
$('.imgs').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.texts',
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  focusOnSelect: true,
});
// feedback-part end