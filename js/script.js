$(function() {
    window.onscroll = function() {scroller()};

    var $header = $('header');
    var $navbar = $('#nav-bar');
    var $pagelinks = $('.navigation');
    var $hamburger = $('.socials .hamburger');

    var sticky = $navbar.offset().top;

    function scroller() {
        if ((window.pageYOffset >= sticky) && (!$navbar.hasClass('navColumn'))) {
            $navbar.addClass("sticky")
        } else {
            $navbar.removeClass("sticky")
        }
    };

    $hamburger.on('click', function() {
        $(this).toggleClass('open');
        $navbar.toggleClass('navColumn');
        $pagelinks.toggleClass('shown');
        $header.toggleClass('navPadding');
    });
});