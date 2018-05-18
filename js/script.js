$(function() {
    window.onscroll = function() {
        scroller();
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

    var aboutPosition = $('.about').position().top;
    var blogPosition = $('.blog').position().top;
    var teamPosition = $('.team').position().top;
    var contactPosition = $('.contact').position().top;

    var sticky = $navbar.offset().top;

    function scroller() {
        if ((window.pageYOffset >= sticky) && (!$navbar.hasClass('navColumn'))) {
            $navbar.addClass("sticky")
        } else {
            $navbar.removeClass("sticky")
        }
    };

    function navigator() {
        if (scrollY < aboutPosition) {
            $.each(navLinks, function(index, value) {
                value.removeClass('active');
            });
            $nHome.addClass('active');
        } else if (scrollY >= aboutPosition && scrollY < blogPosition) {
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
    //window.onscroll()

    $nHome.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        $.each(navLinks, function(index, value) {
            value.removeClass('active');
        });
        $nHome.addClass('active');
    });

    $nAbout.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: aboutPosition,
            behavior: "smooth"
        });
        $.each(navLinks, function(index, value) {
            value.removeClass('active');
        });
        $nAbout.addClass('active');
    });

    $nBlog.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: blogPosition,
            behavior: "smooth"
        });
        $.each(navLinks, function(index, value) {
            value.removeClass('active');
        });
        $nBlog.addClass('active');
    });

    $nTeam.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: teamPosition,
            behavior: "smooth"
        });
        $.each(navLinks, function(index, value) {
            value.removeClass('active');
        });
        $nTeam.addClass('active');
    });

    $nContact.on('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: contactPosition,
            behavior: "smooth"
        });
        $.each(navLinks, function(index, value) {
            value.removeClass('active');
        });
        $nContact.addClass('active');
    });

    $hamburger.on('click', function() {
        $(this).toggleClass('open');
        $navbar.toggleClass('navColumn');
        $pagelinks.toggleClass('shown');
        $header.toggleClass('navPadding');
    });
    
    navigator();
});