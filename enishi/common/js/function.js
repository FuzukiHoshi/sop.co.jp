

//////////////////////////////

$win = $(window),
winH = $win.height(),
winW = $win.width(),
$footer = $('#footer'),
footerOffset = $(document).height(),
afterOffset = footerOffset + winH,
$container = $('.l-container')
$ito = $('.p-ito')
// containerOffset

//////////////////////////////

$(window).on('load',function() {
    load()
    $("html, body").scrollTop(footerOffset)
    setTimeout(function() {
        $footer.css('position','relative')
        $("html, body").scrollTop(afterOffset)
        $("html, body").animate({scrollTop:0}, 1000,function(){
		fadeIn()
        first()
	   });
   },2500)
})
function fadeIn() {
    $win.on("load scroll resize", function(){
        $container.each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 2){
                $(this).addClass('is-fadeIn')
            }
        });
    });
    $win.on("load scroll resize", function(){
        $ito.each(function(){
            var imgPos = $(this).offset().top;
            var itoFlag = $(this).hasClass('start')
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 3){
                $(this).addClass('start')
                if(!itoFlag) {
                    ito()
                }
            }
        });
    });
}

function load() {
    $('#footer').addClass('is-start')
}

function first() {
    $('#concept').addClass('is-fadeIn')
    new Vivus('itoAnimetion1', {
        duration: 80 ,
        start: 'autostart',
        type: 'sync'
    });
}

function ito() {
    new Vivus('itoAnimetion1', {
        duration: 80 ,
        start: 'autostart',
        type: 'sync'
    });
    new Vivus('itoAnimetion2', {
        duration: 80 ,
        start: 'autostart',
        type: 'sync'
    });
    new Vivus('itoAnimetion3', {
        duration: 80 ,
        start: 'autostart',
        type: 'sync',
        reverseStack: 'true'
    });
}

$(function(){
    $footer.css('height', winH)
    $('#itoAnimetion').css('width',winW)

    //gnav
    var $gnavBtn = $('#gnavBtn')
    var $gnav = $('#gnav')

    $gnavBtn.on('click',function() {
        $gnav.toggleClass('is-open')
        $(this).toggleClass('is-open')
    })

    ////  shop
    var $shopLink1 = $('.p-shop-link01')
    var $shopLink2 = $('.p-shop-link02')
    var $shopLink3 = $('.p-shop-link03')
    var $item = $('.p-shop-item')
    var $item1 = $('.p-shop-item--01')
    var $item2 = $('.p-shop-item--02')
    var $item3 = $('.p-shop-item--03')
    $shopLink1.on('click',function() {
        $item.fadeOut(300)
        $item1.fadeIn(300)
    })
    $shopLink2.on('click',function() {
        $item.fadeOut(300)
        $item2.fadeIn(300)
    })
    $shopLink3.on('click',function() {
        $item.fadeOut(300)
        $item3.fadeIn(300)
    })


    ////  project popup
    var $popupBtn = $('#popupBtn')
    var $popup = $('#popup')
    var $popupItem = $('.p-popup-item')
    var $popupPrev = $('.p-popup-btn--prev')
    var $popupNext = $('.p-popup-btn--next')
    var $popupFirst = $('.p-popup-btn--first')
    var $popupLast = $('.p-popup-btn--last')
    $popupBtn.on('click',function() {
        $(this).toggleClass('is-open')
        $popup.fadeToggle(300)
    })
    $popupPrev.on('click',function() {
        $popupItem.fadeOut(500)
        $(this).parents('.p-popup-item').prev('.p-popup-item').fadeIn(500)
    })
    $popupNext.on('click',function() {
        $popupItem.fadeOut(500)
        $(this).parents('.p-popup-item').next('.p-popup-item').fadeIn(500)
    })
    $popupFirst.on('click',function() {
        $popupItem.fadeOut(500)
        $(this).parents('.p-popup-inner').find('.p-popup-item').eq(0).fadeIn(500)
    })
    $popupLast.on('click',function() {
        $popupItem.fadeOut(500)
        $(this).parents('.p-popup-inner').find('.p-popup-item').eq(-1).fadeIn(500)
    })




    //spMenu
    var $menuAreaBtn = $('.p-menu-item dt')
    $menuAreaBtn.on('click' , function() {
        $(this).next('dd').fadeToggle(300)
        $(this).toggleClass('is-open')
    })
})

//link
$(document).ready(function(){
    $('a[href^="#"]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});
