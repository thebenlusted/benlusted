$(document).ready(function() {
  $('.about-text').hide();
  $('.contact-info').hide();

  $('#landing-info').animate({
    width: "100%"
  }, 450);
  $('#my-work-tab').animate({
    width: "96%"
  }, 600);
  $('#about-tab').animate({
    width: "92%"
  }, 750);
  $('#home-tab').animate({
    width: "88%"
  }, 900);
});
$(function() {
  let active = "slide-3";
  $('#home-btn').click(function() {
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
  });

  $('#about-btn').click(function() {
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

    $('#my-work-tab').animate({
      width: '96%'
    });



  });

  $('#my-work-btn').click(function() {
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

  $('#contact-btn').click(function() {
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

    $('.contact-info').show();
  });


  $('.skill-category-card').mouseenter(function() {
    
  });
});
