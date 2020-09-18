$(function () {
    //アコーディオンメニュー
    $('#acMenu dt').on('click', function () {
        $(this).next().slideToggle(300);
        // return false;
    });

    //FVを超えたらheaderが固定する
    $(window).on('load scroll',function (){
        var fvHeight = $('.fv').outerHeight(),
            value = $(this).scrollTop();
        if(value > fvHeight){
            $('.header').addClass('fixed');
        }else {
            $('.header').removeClass('fixed');
        }
    });

    //hamburgerを押したらnavが全画面表示される
    $('.hamburger').on('click',function (){
        $(this).toggleClass('close');
        $('.header-nav').toggleClass('open');
        $('body').toggleClass('noscroll');
        //#でページ上部に行くのを防ぐ
        return false;
    });

    //nav(sm)のリンクを押した時
    $('.header-nav__item > a').on('click',function (){
        $('.header-nav').removeClass('open');
        $('.hamburger').removeClass('close');
        $('body').removeClass('noscroll');
    });

});