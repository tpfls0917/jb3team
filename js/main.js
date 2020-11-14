
  // gnb
$(function(){
  $('#gnb > .depth1 > li').hover(
      function(){
          $('.depth2').stop().show();
          $('#gnb_bg').addClass('show');
      },
      function(){
          $('.depth2').stop().hide();
          $('#gnb_bg').removeClass('show');
      }
  )
});

// lnb
$(function(){
  var menu = 0;

  $('#lnb > .lnb > li > a').click(function(){
      $('#lnb > .lnb > li > a').removeClass();
      $(this).eq(menu).addClass('active');
  });
})

  // bxslider 
$(document).ready(function(){

  $('#visual').imagesLoaded( function() {
    // images have loaded
    $('.slider').bxSlider({
      // 효과: horizontal', 'vertical', 'fade'
      mode: 'fade',
      // 인터벌 시간
      pause: 5000,
      // 자동재생: true | false
      auto: true,
      autoHover: true,
      
      tickerHover: 'false'

      
    });
  });

});


