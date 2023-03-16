// scorll top 

$('.back-2-top').click(function(){
  $('html,body').animate({
    scrollTop:0
  },2000)
})
// menu bar fixed
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 20) {
    $('header').addClass('fmenu')
  }
  else {
    $('header').removeClass('fmenu')
  }
  if (scrolling > 20) {
    $('.back-2-top').fadeIn('fmenu')
  }
  else {
    $('.back-2-top').fadeOut('fmenu')
  }
  
  
});




// banner slick slider
$(".banner-part").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
// screenshot slick slider 

$('.screenshot-slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
// video section 
new VenoBox({
  selector: '.venobox'
});

// feedback section 

$('.feedback-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.feed-img'
});
$('.feed-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.feedback-inner',
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding:'0px',
  focusOnSelect: true
});
