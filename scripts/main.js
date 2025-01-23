$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position>=200){
        $('.service').addClass('animation-service')
    }
    else{
        $('.service').removeClass('animation-service')
    }
})