$(function() {

    const $header = $('header');
    const $navbar = $('#nav-bar');
    const $home = $('#nHome');
    const $about = $('#nAbout');
    const $blog = $('#nBlog');
    const $team = $('#nTeam');
    const $contact = $('#nContact');
    const $sAbout = $('.about');
    const $sBlog = $('.blog');
    const $sTeam = $('.team');
    const $sContact = $('.contact');
    const $sFooter = $('footer');
    const sectionCoord = [
        [() => {return $home}, () => {return 0}],
        [() => {return $about}, () => {return $sAbout.position().top}],
        [() => {return $blog}, () => {return $sBlog.position().top}],
        [() => {return $team}, () => {return $sTeam.position().top}],
        [() => {return $contact}, () => {return $sContact.position().top}],
        [() => {return null}, () => {return $sFooter.position().top}]
    ];
    let lastChangeIndex = 0;
    const $pageLinks = $('.navigation');
    const $hamburger = $('.socials .hamburger');
    const $scrollButton = $('.scroll-btn');

    const form  = document.getElementById('cForm');
    const name = document.getElementById('cName');
    const nameError = name.nextElementSibling;
    const email = document.getElementById('cEmail');
    const emailError = email.nextElementSibling;
    const phone = document.getElementById('cPhone');
    const message = document.getElementById('cMessage');
    const messageError = message.nextElementSibling;
    const nameRegExp = /[a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const sticky = $navbar.offset().top;
    const btnSticky = $scrollButton.offset().top;

    function navHook() {
        if (!$navbar.hasClass('navColumn') && window.pageYOffset >= sticky) {
            $navbar.addClass("sticky")
        } else {
            $navbar.removeClass("sticky")
        }
        if (window.pageYOffset >= btnSticky) {
            $scrollButton.addClass("btnSticky")
        } else {
            $scrollButton.removeClass("btnSticky")
        }
    };

    function navigator() {
        let i = 1;
        let eLength = sectionCoord.length;
        let currentPosition = scrollY;
        for ( ; i < eLength; i++) {
            if (currentPosition < (sectionCoord[i][1]()  - 360)) {
                if (i !== lastChangeIndex) {
                    $.each(sectionCoord, function(index, value) {
                        if (!value[0]()) {return;};
                        value[0]().removeClass('active');
                    });
                    sectionCoord[i-1][0]().addClass('active');
                    lastChangeIndex = i;
                }
                return;
            }
            if (lastChangeIndex > 4) {
                $scrollButton.hide();
            } else {
                $scrollButton.show();
            }
        }
    };

    function scrollToSection(event, index) {
        event.preventDefault();
        window.scrollTo({
            top: sectionCoord[index][1](),
            behavior: "smooth",
            onAfter: navigator()
        });
    }
    
    function toggleHamburger() {
        $hamburger.toggleClass('open');
        $navbar.toggleClass('navColumn');
        $pageLinks.toggleClass('shown');
        $header.toggleClass('navPadding');
        navHook();
    }

    $hamburger.on('click', function() {
        toggleHamburger();
    });
    
    $scrollButton.on('click', function(event) {
        scrollToSection(event, lastChangeIndex);
    });

    $.each(sectionCoord, function(index, value) {
        if (!value[0]()) {return;};
        value[0]().on('click', function(event) {
            scrollToSection(event, index);
            if ($hamburger.hasClass('open')) {
                toggleHamburger();
            }
        });
    });
    
    window.onscroll = function() {
        navHook();
        navigator();
    };

    $(window).resize(function(){
        if ($hamburger.hasClass('open') && $(window).width() > 900){
            toggleHamburger();
        }
    });
    
    function addEvent(element, event, callback) {
        let previousEventCallBack = element["on"+event];
        element["on"+event] = function (e) {
            let output = callback(e);
        
            if (output === false) return false;
        
            if (typeof previousEventCallBack === 'function') {
                output = previousEventCallBack(e);
                if(output === false) return false;
            }
        }
      };

    function checkValidity(input, result) {
        if (result) {
            input.className = "form-cont valid";
            input.nextElementSibling.innerHTML = "";
            input.nextElementSibling.className = "error";
        } else {
            input.className = "form-cont invalid";
        }
    }

    function errorDisplay(input, message) {
        input.className = "form-cont invalid";
        input.nextElementSibling.innerHTML = message;
        input.nextElementSibling.className = "error active";
    }
      
    name.addEventListener("input", function (event) {
        let result = name.value.length !== 0 && nameRegExp.test(name.value);
        checkValidity(this, result);
      }, false);
      
    email.addEventListener("input", function (event) {
        let result = email.value.length !== 0 && emailRegExp.test(email.value);
        checkValidity(this, result);
      }, false);
      
      message.addEventListener("input", function (event) {
          let result = message.value.length !== 0;
          checkValidity(this, result);
        }, false);
      
    form.addEventListener("submit", function (event) {
        let result = email.value.length !== 0 && emailRegExp.test(email.value) &&
            name.value.length !== 0 && nameRegExp.test(name.value) &&
            message.value.length !== 0;
        if (!result) {
            event.preventDefault();
            if (name.value.length === 0 && !nameRegExp.test(name.value)) {
                errorDisplay(name, "Give us a name for referral.")
            }
            if (email.value.length === 0 && !emailRegExp.test(email.value)) {
                errorDisplay(email, "A valid email adress is required (__@__.__).")
            }
            if (message.value.length === 0) {
                errorDisplay(message, "Please leave a message.")
            }
            phone.className = "form-cont valid";
        }
      }, false);

      navHook();
      navigator();
      
});