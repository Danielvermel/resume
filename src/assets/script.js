/* constnats */
var nav_item_clicked = 0;    
var nav_item_id = "nenhum" ;
  
  AOS.init({duration: 1200,});

        $(document).ready(function(){
            
                $(".nav-item").hover(function(){

                    $(this).children().addClass("dl-index-active");
                    $(this).children().addClass("dl-index-font-active");
                },
                function(){
                  
                    $(this).children().removeClass("dl-index-active");
                    $(this).children().removeClass("dl-index-font-active");              
                 }
                );
         

            // Select all links with hashes
            $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
                ) {
                // Figure out element to scroll to
                var target = $(this.hash);
               // console.log("target:"+target);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1200, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                    });
                }
                }
            });
                
           
            const nav = document.querySelector('#nav_mobile_menu');
            const menu = document.querySelector('#mobile_menu');
            const menuToggle = document.querySelector('#icon');
            let isMenuOpen = false;

            //Hamburguer / cross Effect
            $('.icon').click(function(){
                $(this).toggleClass('nav--open open');
               /* if($('#nav_mobile_menu').hasClass('nav--open')){
                  
                    $('#nav_mobile_menu').removeClass('nav--open');
                }*/
            });

            $('.nav_menu').click(function(){
                 $('.icon').toggleClass('open');
                $('#nav_mobile_menu').removeClass('nav--open');
            });

            $('.nav_item').click(function(){  
                nav_item_clicked = 1;
                nav_item_id = $(this).attributes("name");
              
           });
            
            // TOGGLE MENU ACTIVE STATE
            menuToggle.addEventListener('click', e => {
              e.preventDefault();
              
              isMenuOpen = !isMenuOpen;
              
              // toggle a11y attributes and active class
              menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
              
              nav.classList.toggle('nav--open');
            });
            
            
            // TRAP TAB INSIDE NAV WHEN OPEN
            nav.addEventListener('keydown', e => {
              // abort if menu isn't open or modifier keys are pressed
              if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
                return;
              }
              
              // listen for tab press and move focus
              // if we're on either end of the navigation
              const menuLinks = menu.querySelectorAll('.nav_link');
              if (e.keyCode === 9) {
                if (e.shiftKey) {
                  if (document.activeElement === menuLinks[0]) {
                    menuToggle.focus();
                    e.preventDefault();
                  }
                } else if (document.activeElement === menuToggle) {
                  menuLinks[0].focus();
                  e.preventDefault();
                }
              }
            });
            
        });



        /* Hide SideNav on Scroll down */
        var prevScrollpos = window.pageYOffset;  

        window.onscroll = function() {myFunction()};
        
        function myFunction() {
        /*  console.log("navbar: "+$("#navbar").offset().top);
            console.log("window: "+$("#navbar-header").offset().top);
            console.log("navbar-header : "+window.pageYOffset);
            */            
            
            if (window.pageYOffset >=  ($("#navbar").offset().top) && window.pageYOffset >= ($("#navbar-header").offset().top)) {
                $("#navbar").addClass("sticky");
               
            } else {
                $("#navbar").removeClass("sticky");
                $("#profile-menu").children().removeClass("dl-index-actives");
                $("#profile-menu").children().removeClass("dl-index-font-actives");
                
            }

            /* ----- Profile ----- */
            if (window.pageYOffset >= $("#profile").offset().top && window.pageYOffset < $("#experiences").offset().top ) {
              
                $("#experiences-menu").children().removeClass("dl-index-actives");
                $("#experiences-menu").children().removeClass("dl-index-font-actives");
                
                $("#profile-menu").children().addClass("dl-index-actives");
                $("#profile-menu").children().addClass("dl-index-font-actives");
                
            } 

             /* ----- Experiences ----- */

            if (window.pageYOffset >= $("#experiences").offset().top && window.pageYOffset < $("#abilities").offset().top) {
                
                $("#profile-menu").children().removeClass("dl-index-actives");
                $("#profile-menu").children().removeClass("dl-index-font-actives");

                $("#abilities-menu").children().removeClass("dl-index-actives");
                $("#abilities-menu").children().removeClass("dl-index-font-actives");

                $("#experiences-menu").children().addClass("dl-index-actives");
                $("#experiences-menu").children().addClass("dl-index-font-actives");
            } 

             /* ----- Abilities ----- */
            if (window.pageYOffset >= $("#abilities").offset().top && window.pageYOffset < $("#projects").offset().top) {
                
                $("#experiences-menu").children().removeClass("dl-index-actives");
                $("#experiences-menu").children().removeClass("dl-index-font-actives");

                $("#projects-menu").children().removeClass("dl-index-actives");
                $("#projects-menu").children().removeClass("dl-index-font-actives");

                $("#abilities-menu").children().addClass("dl-index-actives");
                $("#abilities-menu").children().addClass("dl-index-font-actives");
            } 

             /* ----- Projects ----- */
            if (window.pageYOffset >= $("#projects").offset().top && window.pageYOffset < $("#contacts").offset().top) {
                
                $("#abilities-menu").children().removeClass("dl-index-actives");
                $("#abilities-menu").children().removeClass("dl-index-font-actives");

                $("#contacts-menu").children().removeClass("dl-index-actives");
                $("#contacts-menu").children().removeClass("dl-index-font-actives");

                $("#projects-menu").children().addClass("dl-index-actives");
                $("#projects-menu").children().addClass("dl-index-font-actives");
                
            } 
         
            /* ----- Contacts ----- */
            if (window.pageYOffset >= $("#contacts").offset().top-15) {
                
                $("#projects-menu").children().removeClass("dl-index-actives");
                $("#projects-menu").children().removeClass("dl-index-font-actives");

                $("#contacts-menu").children().addClass("dl-index-actives");
                $("#contacts-menu").children().addClass("dl-index-font-actives");
            } 


            /* ----- Hide SideNav on Scroll down ----- */
            var mobileNavHeight = - $( '.dl-index-mobile-navigation' ).height();      
            var currentScrollPos = window.pageYOffset;

            if ((prevScrollpos < currentScrollPos) ||  ((nav_item_clicked=="1") && ($(".dl-index-mobile-navigation").css('top') == "0px") ) ) {
               
                $(".dl-index-mobile-navigation").css('top',+ mobileNavHeight);
            } else  {
                if((nav_item_clicked=="1") && (window.pageYOffset <  ($("#"+nav_item_id).offset().top)) ) {
                    nav_item_clicked = 0;
                }

                if(nav_item_clicked=="0"){
                    $(".dl-index-mobile-navigation").css('top','0px');
                }            
            }
            prevScrollpos = currentScrollPos;
        }
