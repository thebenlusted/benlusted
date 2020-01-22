$('.about-text').hide();
$('.contact-info').hide();
$('.my-work-content').hide();

$(document).ready(function () {
  $('#landing-info').animate({
    width: "100%"
  }, 450);
  $('#my-work-tab').animate({
    width: "96%"
  }, 600, function () {
    $('.contact-info').show();
  });
  $('#about-tab').animate({
    width: "92%"
  }, 750);
  $('#home-tab').animate({
    width: "88%"
  }, 900);
});

$(function () {
  $('#home-btn').click(function () {

    $('#home-btn').addClass("active").removeClass("nav-link");

    $('#about-btn').removeClass("active").addClass("nav-link");
    $('#contact-btn').removeClass("active").addClass("nav-link");
    $('#my-work-btn').removeClass("active").addClass("nav-link");

    $('#home-tab').animate({
      width: '88%'
    });
    $('.landing-info-text h1').animate({
      left: '0'
    });
    $('.landing-info-text h2').animate({
      left: '0'
    });

    $('#about-tab').animate({
      width: '92%'
    });
    $('.about-text').animate({
      left: '0px'
    });

    $('#my-work-tab').animate({
      width: '96%'
    });
    $('.my-work-content').animate({
      left: '0px'
    });
  });

  $('#about-btn').click(function () {

    $('#about-btn').addClass("active").removeClass("nav-link");

    $('#home-btn').removeClass("active").addClass("nav-link");
    $('#contact-btn').removeClass("active").addClass("nav-link");
    $('#my-work-btn').removeClass("active").addClass("nav-link");

    $('#home-tab').animate({
      width: '60'
    });
    $('.landing-info-text h1').animate({
      left: '-1000px'
    });
    $('.landing-info-text h2').animate({
      left: '-1000px'
    });

    $('#about-tab').animate({
      width: '92%'
    });
    $('.about-text').animate({
      left: '0px'
    });
    $('.about-text').show();

    $('#my-work-tab').animate({ width: '96%' });
    $('.my-work-content').animate({
      left: '0px'
    });
  });

  $('#my-work-btn').click(function () {

    $('#my-work-btn').addClass("active").removeClass("nav-link");

    $('#home-btn').removeClass("active").addClass("nav-link");
    $('#contact-btn').removeClass("active").addClass("nav-link");
    $('#about-btn').removeClass("active").addClass("nav-link");

    $('.my-work-content').show();
    $('#home-tab').animate({
      width: '60'
    });
    $('.landing-info-text h1').animate({
      left: '-1000px'
    });
    $('.landing-info-text h2').animate({
      left: '-1000px'
    });

    $('#about-tab').animate({
      width: '120'
    });
    $('.about-text').animate({
      left: '-1500px'
    });

    $('#my-work-tab').animate({
      width: '96%'
    });
    $('.my-work-content').show();
    $('.my-work-content').animate({
      left: '0px'
    });

  });

  $('#contact-btn').click(function () {

    $('#contact-btn').addClass("active").removeClass("nav-link");

    $('#home-btn').removeClass("active").addClass("nav-link");
    $('#about-btn').removeClass("active").addClass("nav-link");
    $('#my-work-btn').removeClass("active").addClass("nav-link");

    $('#home-tab').animate({
      width: '60'
    });
    $('.landing-info-text h1').animate({
      left: '-1000px'
    });
    $('.landing-info-text h2').animate({
      left: '-1000px'
    });

    $('#my-work-tab').animate({
      width: '180'
    });
    $('.my-work-content').animate({
      left: '-1500px'
    });

    $('#about-tab').animate({
      width: '120'
    });
    $('.about-text').animate({
      left: '-1500px'
    });
  });

  $('.soc-link').mouseenter(function () {
    $(this).children('.tooltip-cont').stop().animate({ y:'-120px', opacity:1 });
  });
  $('.soc-link').mouseleave(function () {
    $(this).children('.tooltip-cont').stop().animate({ y:'-90px', opacity: '0' });
  });
});
