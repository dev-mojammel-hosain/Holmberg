new VenoBox({
    selector: ".my-link"
});
new WOW().init();
$(function(){
    $('.customer-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false,
        asNavFor: '.customer-details'
        // fade: true,
        // cssEase: 'linear'
      });
    $('.customer-details').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        dots: true,
        asNavFor: '.customer-img'
        // fade: true,
        // cssEase: 'linear'
      });

      
      $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
					$('.top-btn').removeClass('gone');
          $('.top-btn').fadeIn(200);
				} else {
					$('.top-btn').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.top-btn').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 90);
			})
      $('.burger').click(function(){
        $('.b-menu').css('transform','translateX(0%)');
        $('.b-menu').css('opacity','1');
        $('.b-menu').css('visibility','visible');
      })
      $('.cross').click(function(){
        $('.b-menu').css('transform','translateX(100%)');
        $('.b-menu').css('opacity','0');
        $('.b-menu').css('visibility','hidden');
      })
      $('.b-menu').click(function(){
        $('.b-menu').css('transform','translateX(100%)');
        $('.b-menu').css('opacity','0');
        $('.b-menu').css('visibility','hidden');
      })
})

// Navbar

function checkScrolled() {
  if ($(window).scrollTop() > 50) {
      $("nav").addClass("scrolled");
      document.getElementById("nav-img").innerHTML = '<img src="images/footer-logo.png" alt="Logo">';
  } else {
      $("nav").removeClass("scrolled");
      document.getElementById("nav-img").innerHTML = '<img src="images/logo.png" alt="Logo">';
  };
}

$(window).scroll(function () {
  checkScrolled();
});
