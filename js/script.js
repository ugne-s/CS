$(function() {
    window.onscroll = function() {
        navHook();
        btnHook();
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
    var $scrollButton = $('.scroll-btn');
    var $arrow = $('.scroll-btn i');
    var $sAbout = $('.about');
    var $sBlog = $('.blog');
    var $sTeam = $('.team');
    var $sContact = $('.contact');
    var $form = $('#cForm');

    var sticky = $navbar.offset().top;
    var btnSticky = $scrollButton.offset().top;

    function navHook() {
        if ((window.pageYOffset >= sticky) && (!$navbar.hasClass('navColumn'))) {
            $navbar.addClass("sticky")
        } else {
            $navbar.removeClass("sticky")
        }
    };

    function btnHook() {
        if (window.pageYOffset >= btnSticky) {
            $scrollButton.addClass("btnSticky")
        } else {
            $scrollButton.removeClass("btnSticky")
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
        if (scrollY >= contactPosition) {
            $arrow.removeClass('fa-angle-down');
            $arrow.addClass('fa-angle-up');
        } else {
            $arrow.removeClass('fa-angle-up');
            $arrow.addClass('fa-angle-down');
        }
    };

    $hamburger.on('click', function() {
        $(this).toggleClass('open');
        $navbar.toggleClass('navColumn');
        $pagelinks.toggleClass('shown');
        $header.toggleClass('navPadding');
        navHook();
    });

    $scrollButton.on('click', function(event) {
        event.preventDefault();
        var aboutPosition = $sAbout.position().top;
        var blogPosition = $sBlog.position().top;
        var teamPosition = $sTeam.position().top;
        var contactPosition = $sContact.position().top;
        if (scrollY < (aboutPosition)) {
            window.scrollTo({
                top: aboutPosition + 1,
                behavior: "smooth",
                onAfter: navigator()
            });
        } else if (scrollY >= (aboutPosition) && scrollY < blogPosition) {
            window.scrollTo({
                top: $sBlog.position().top + 1,
                behavior: "smooth",
                onAfter: navigator()
            });
        } else if (scrollY >= blogPosition && scrollY < teamPosition) {
            window.scrollTo({
                top: $sTeam.position().top + 1,
                behavior: "smooth",
                onAfter: navigator()
            });
        } else if (scrollY >= teamPosition && scrollY < contactPosition) {
            window.scrollTo({
                top: $sContact.position().top + 1,
                behavior: "smooth",
                onAfter: navigator()
            });
        } else if (scrollY >= contactPosition) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
                onAfter: navigator()
            });
        }
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
    btnHook();
    navigator();
    
	$form.validate();
});