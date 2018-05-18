$(function() {
    window.onscroll = function() {
        navHook();
        navigator();
    };

    var $header = $('header');
    var $navbar = $('#nav-bar');
    var $nHome = $('#nHome');
    var $nAbout = $('#nAbout');
    var $nBlog = $('#nBlog');
    var $nTeam = $('#nTeam');
    var $nContact = $('#nContact');
    var $pagelinks = $('.navigation');
    var $hamburger = $('.socials .hamburger');
    var navLinks = [$nHome, $nAbout, $nBlog, $nTeam, $nContact];
    var $sAbout = $('.about');
    var $sBlog = $('.blog');
    var $sTeam = $('.team');
    var $sContact = $('.contact');

    var sticky = $navbar.offset().top;

    function navHook() {
        if ((window.pageYOffset >= sticky) && (!$navbar.hasClass('navColumn'))) {
            $navbar.addClass("sticky")
        } else {
            $navbar.removeClass("sticky")
        }
    };

    function navigator() {
        var aboutPosition = $sAbout.position().top - 360;
        var blogPosition = $sBlog.position().top - 360;
        var teamPosition = $sTeam.position().top - 360;
        var contactPosition = $sContact.position().top - 360;
        if (scrollY < (aboutPosition)) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nHome.addClass('active');
        } else if (scrollY >= (aboutPosition) && scrollY < blogPosition) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nAbout.addClass('active');
        } else if (scrollY >= blogPosition && scrollY < teamPosition) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nBlog.addClass('active');
        } else if (scrollY >= teamPosition && scrollY < contactPosition) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nTeam.addClass('active');
        } else if (scrollY >= contactPosition) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nContact.addClass('active');
        }
    };

    $hamburger.on('click', function() {
        $(this).toggleClass('open');
        $navbar.toggleClass('navColumn');
        $pagelinks.toggleClass('shown');
        $header.toggleClass('navPadding');
    });

    $nHome.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            onAfter: navigator()
        });
    });

    $nAbout.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: $sAbout.position().top,
            behavior: "smooth",
            onAfter: navigator()
        });
    });

    $nBlog.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: $sBlog.position().top,
            behavior: "smooth",
            onAfter: navigator()
        });
    });

    $nTeam.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: $sTeam.position().top,
            behavior: "smooth",
            onAfter: navigator()
        });
    });

    $nContact.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: $sContact.position().top,
            behavior: "smooth",
            onAfter: navigator()
        });
    });

    navHook();
    navigator();
});