// seb2_1.js


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
  

