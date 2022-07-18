const burgerButton = document.getElementById('icon_burger');
const closeButton = document.getElementById('icon_close');
const mobileMenu = document.getElementById('mobile-menu');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

burgerButton.addEventListener('click', function handleClick() {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function handleClick() {
  mobileMenu.style.display = 'none';
});


$('#slick_container').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false
});

if((screenWidth > 1024 && screenWidth <= 1920)){
$('#slick_container2').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
});


$('#slick_container3').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 9,
  slidesToScroll: 1,

});
}else if((screenWidth <= 1024 && screenWidth > 820)){
  $('#slick_container2').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  
  
  $('#slick_container3').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
  
  });
} else{
  $('#slick_container2').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  
  $('#slick_container3').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
  
  });
};

