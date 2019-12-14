$(function() {

   // $(".audio-button"").on("click", (function() {
   //    audio.play()
   // }))

   // トップから詳細ページへ
   $('.image').on( "click",(function() {
      if ($(this).hasClass('hidden-image')) {
         $(this).removeClass('hidden-image');
         $(this).addClass('select');
         // $(this).delay(4000).queue(function() {
         //    $(this).addClass('hidden-image');
         // })
      }

       $('.image').not(this).fadeOut(1000);
       $('.center-contents').delay(1000).animate({opacity: 0, marginTop:0}, 1000);
       $(this).delay(1200).fadeOut(1100);
       $('.center-contents').not(this).delay(2000).queue(function() {
          $(this).css('display','none').dequeue();
       });
       // メーター表示
       $('.meter').css('display','block');
       $('.meter').delay(2000).animate({left: 0}, 1200);
       $('.box').find('p').delay(2000).fadeIn(1200);

        // show-slideの処理
       if ($(this).hasClass('image1')) {
          $('#eso-slide').delay(2000).fadeIn(1000);
          $('.move-box').delay(3200).animate({top: '10%', height: '66.6%'}, { duration: 800, easing: 'swing' } );
          $('.move-box').find('.border-top').text('500').delay(3300).fadeIn(1000);
          $('.move-box').find('.border-bottom').text('2500').delay(3300).fadeIn(1000);
          $('#eso-image1').attr("onclick","")
       }

       if ($(this).hasClass('image2')) {
          $('#oct-slide').delay(2000).fadeIn(1000);
          $('.move-box').delay(3200).animate({top: '3.3%', height: '6.6%'}, { duration: 800, easing: 'swing' } );
          $('.move-box').find('.border-top').text('300').delay(3300).fadeIn(1000);
          $('.move-box').find('.border-bottom').text('500').delay(3300).fadeIn(1000);
       }

       if ($(this).hasClass('image3')) {
          $('#ika-slide').delay(2000).fadeIn(1000);
          $('.move-box').delay(3200).animate({top: '6.6%', height: '13.6%'}, { duration: 800, easing: 'swing' } );
          $('.move-box').find('.border-top').text('400').delay(3300).fadeIn(1000);
          $('.move-box').find('.border-bottom').text('800').delay(3300).fadeIn(1000);
       }

        if ($(this).hasClass('image4')) {
           $('#shark-slide').delay(2000).fadeIn(1000);
           $('.move-box').delay(3200).animate({top: '36.6%'}, { duration: 800, easing: 'swing' } );
           $('.move-box').find('.border-top').text('1300').delay(3200).fadeIn(1000);
        }

        if ($(this).hasClass('image5')) {
           $('#kisu-slide').delay(2000).fadeIn(1000);
           $('.move-box').delay(3200).animate({top: '6.6%', height: '13.4%'}, { duration: 800, easing: 'swing' } );
           $('.move-box').find('.border-top').text('400').delay(3300).fadeIn(1000);
           $('.move-box').find('.border-bottom').text('800').delay(3300).fadeIn(1000);
        }

        if ($(this).hasClass('image6')) {
           $('#kurage-slide').delay(2000).fadeIn(1000);
           $('.move-box').delay(3200).animate({top: '60%', height: '40%'}, { duration: 800, easing: 'swing' } );
           $('.move-box').find('.border-top').text('2000').delay(3300).fadeIn(1000);
           $('.move-box').find('.border-bottom').text('7500').delay(3300).fadeIn(1000);
        }

        if ($(this).hasClass('image7')) {
           $('#unagi-slide').delay(2000).fadeIn(1000);
           $('.move-box').delay(3200).animate({top: '10%', height: '83.3%'}, { duration: 800, easing: 'swing' } );
           $('.move-box').find('.border-top').text('550').delay(3300).fadeIn(1000);
           $('.move-box').find('.border-bottom').text('3000').delay(3300).fadeIn(1000);
        }
   }))


   // $('.to-top').on("click",(function() {
   //    // メーターをしまう
   //    $(this).parent().fadeOut(1000);
   //    $('.meter').animate({left: '-15%'}, 1200);
   //    $('.meter').find('p').animate({right: 0}, 1200);
   //    $('.meter').delay(1200).queue(function() {
   //       $(this).css('display', 'none').dequeue();
   //    });
   //     $('.meter').find('p').delay(1200).queue(function() {
   //        $(this).css({display:'none', right: '-3em'}).dequeue();
   //     });
   //     $('.move-box').delay(1200).queue(function() {
   //        $(this).css({top: 0, height: 0}).dequeue();
   //     });
   //     $('.move-box').find('p').delay(1200).queue(function() {
   //        $(this).css( 'right', '-4em').dequeue();
   //     });
   //     if($('.image').find('.select')) {
   //        $('.select').removeClass('select').addClass('hidden-image');
   //     }
   //     // top画面表示
   //    $('.image').delay(1000).fadeIn(1200);
   //    $('.center-contents').css('display','inline-block').animate({opacity: 1.0, marginTop: '20%'}, 2000);
   // }))

   function toTop() {
      $(this).parent().fadeOut(1000);
      $('.meter').animate({left: '-15%'}, 1200);
      $('.meter').find('p').animate({right: 0}, 1200);
      $('.meter').delay(1200).queue(function() {
         $(this).css('display', 'none').dequeue();
      });
       $('.meter').find('p').delay(1200).queue(function() {
          $(this).css({display:'none', right: '-3em'}).dequeue();
       });
       $('.move-box').delay(1200).queue(function() {
          $(this).css({top: 0, height: 0}).dequeue();
       });
       $('.move-box').find('p').delay(1200).queue(function() {
          $(this).css( 'right', '-4em').dequeue();
       });
       if($('.image').find('.select')) {
          $('.select').removeClass('select').addClass('hidden-image');
       }
       // top画面表示
      $('.image').delay(1000).fadeIn(1200);
      $('.center-contents').css('display','inline-block').animate({opacity: 1.0, marginTop: '20%'}, 2000);
   }
});
