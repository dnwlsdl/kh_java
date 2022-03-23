$("#desktopNav input").focus(function(){
     $("#desktopNav form").animate({ "width": "200px" 
    }, 300, function() {}); 
}); 
$("#desktopNav input").blur(function(){
     $("#desktopNav form").animate({ 
         "width": "60px" 
    }, 300, function() {}); 
}); 
$("#desktopNav form").click(function(){
         $("#desktopNav input").focus(); 
        });


 $(document).ready(function () {
     var setTime = 500;
     $('#p_drink1').animate({
         opacity: '1'
     }, setTime, function () {
         $('#p_drink2').animate({
             opacity: '1'
         }, setTime, function () {
             $('#p_drink3').animate({
                 opacity: '1'
             }, setTime);
         });
     });
 });


// 스타벅스 매장 찾기 : 김우진 
let blink1= document.getElementById('b_image1');
let blink2= document.getElementById('b_image2');
let blink3= document.getElementById('b_image3');
let slide1= document.getElementById('d_slide1');
let slide2= document.getElementById('d_slide2');
let slide3= document.getElementById('d_slide3');



// 스크롤 이벤트가 일어날때 마다 기능 불러오기
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value < 2350) {
        slide1.style.animation = "d_slide1 2s ease-out forwards";
        slide2.style.animation = "d_slide2 2s ease-out forwards";
        slide3.style.animation = "d_slide3 2s ease-out forwards";        
    }else{
        slide1.style.animation = "slide1 2s ease-out";
        slide2.style.animation = "slide2 2s ease-out";
        slide3.style.animation = "slide3 2s ease-out";      
    }
});


    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        console.log("scrollY", value);
    if (value < 2350) {
        blink1.style.animation = "blink 2s";      
        blink2.style.animation = "blink 2s";      
             
    }else{
        blink1.style.animation = "twinkle 2.5s";        
        blink2.style.animation = "twinkle 2.5s";        
        ;        
    }
// RESERVE MAGAZINE 화면 : 김우진
    if(value<1950){
        blink3.style.animation = "blink 2s"; 
    }else{
        blink3.style.animation = "twinkle 2s"
    }
});

// 프로모션 카드 열리고 닫힘
function popOnOff(data) {
    // 펼쳐있을 때(닫는 행동)
    if(data == 'off') {
        document.getElementById("promotion_before").style.display = 'block';
        document.getElementById("promotion_after").style.display = 'none';
        document.getElementById("view_After").style.display = 'block';
    } else {
        document.getElementById("promotion_after").style.display = 'block';
        document.getElementById("promotion_before").style.display = 'none';
        document.getElementById("view_After").style.display = 'none';
    }
}

// 스크롤 시 애니메이션 적용(Spring Season)
let season_ani = document.getElementById('inline_season');
let spring_font_ani = document.getElementById('spring_font');

window.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log("scrollY : " + value);

    if(value < 70) {
        season_ani.style.animation = 'left_reverse 2s ease-out forwards';
        spring_font_ani.style.animation = 'right_reverse 2s ease-out forwards'
    } else {
        season_ani.style.animation = 'left 2s ease-out';
        spring_font_ani.style.animation = 'right 2s ease-out';
    }
})

// 스크롤 시 애니메이션 적용(PICK YOUR FAVORITE)
let pick_ani = document.getElementById('pick_animation');

window.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log("scrollY : " + value);

    if(value < 1030) {
        pick_ani.style.animation = 'pick_reverse 4s ease-out forwards';
    } else {
        pick_ani.style.animation = 'pick_left 4s ease-out';
    }
})

$(document).ready(function(){
    $("1").click(function(){
      $("#view_After").slidedown('slow');
    });
  });