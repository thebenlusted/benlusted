$(document).ready(function(){
  $('.about-text').hide();

  $('#landing-info').animate({width: "100%"}, 450);
  $('#slide1').animate({width: "96%"}, 600);
  $('#slide2').animate({width: "92%"}, 750);
  $('#slide3').animate({width: "88%"}, 900);
});
$(function() {
  let active = "slide-3";
    $('#home-btn').click(function(){
    $('#slide3').animate({width: '88%'});
    $('.landing-info-text h1').animate({left:'0'});
    $('.landing-info-text h2').animate({left:'0'});

    $('#slide2').animate({width:'92%'});
    $('.about-text h1').animate({left:'0px'});
    $('.abt-tagline h2').animate({left:'0px'});

    $('#slide1').animate({width:'96%'});
  });

  $('#about-btn').click(function() {
    $('#slide3').animate({width: '60'});
    $('.landing-info-text h1').animate({left:'-1000px'});
    $('.landing-info-text h2').animate({left:'-1000px'});

    $('#slide2').animate({width:'92%'});
    $('.about-text h1').animate({left:'0px'});
    $('.abt-tagline h2').animate({left:'0px'});
    $('.about-text').show();

    $('#slide1').animate({width:'96%'});



  });

  $('#my-work-btn').click(function() {
    $('#slide3').animate({width: '60'});
    $('.landing-info-text h1').animate({left:'-1000px'});
    $('.landing-info-text h2').animate({left:'-1000px'});

    $('#slide2').animate({width: '120'});
    $('.about-text h1').animate({left:'-1000px'});
    $('.abt-tagline h2').animate({left:'-1000px'});

    $('#slide1').animate({width:'96%'});
  });

  $('#contact-btn').click(function() {
    $('#slide3').animate({width:'60'});
    $('.landing-info-text h1').animate({left:'-1000px'});
    $('.landing-info-text h2').animate({left:'-1000px'});

    $('#slide1').animate({width:'180'});

    $('#slide2').animate({width:'120'});
    $('.about-text h1').animate({left:'-1000px'});
    $('.abt-tagline h2').animate({left:'-1000px'});
    $('.about-text').hide();
  });
});
