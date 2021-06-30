<template>
    <div>
      <!-- Mobile Button-->    
      <div class="dl-index-mobile-navigation nav">    
          <div class="dl-index-mobile-navigation-left col-sm-6" >    
              <span  class="dl-logo-mobile dl-logo-font">
                  D/L
              </span>
          </div>    
          
          <div class="col-sm-6 dl-index-mobile-navigation-right"  > 
              <div class="icon" id="icon" @click="activateIcon($event)">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
        </div>
            <!-- Mobile Menus -->      
            <nav id="nav_mobile_menu" @keydown="nav($event)">
                <ul class="nav_menu"  id="mobile_menu" @click="navMenu()">                          
                    <li class="nav_item" @click="navItem($event)">  <a class="nav_link"  href="#profile">Profile</a></li>
                    <li class="nav_item" @click="navItem($event)">  <a class="nav_link"  href="#experiences">Experiences</a></li>
                    <li class="nav_item" @click="navItem($event)">  <a class="nav_link"  href="#abilities">Abilities</a></li>
                    <li class="nav_item" @click="navItem($event)">  <a class="nav_link"  href="#projects" >Projects</a></li>
                    <li class="nav_item" @click="navItem($event)">  <a class="nav_link"  href="#contacts" >Contacts</a></li>                   
                </ul>
                <!-- ANIMATED BACKGROUND ELEMENT -->
                <div class="splash"></div>
            </nav>
    </div>
   
</template>

<script>
export default {
  name: 'MobileNavigation',
  
  data(){
    return {
        nav_item_clicked: 0,
        nav_item_id: 'undefined',
        isMenuOpen: false
    }
 },
  methods: {
        activateIcon: function(e){
            let icon = document.getElementById('icon')
            if (icon.classList.contains('nav--open','open')) {
                icon.classList.remove('nav--open','open');         
            } else {
                icon.classList.add('nav--open','open');
            }
            e.preventDefault();
            
            this.isMenuOpen = !this.isMenuOpen;
            // toggle a11y attributes and active class
            document.querySelector('#icon').setAttribute('aria-expanded', String(this.isMenuOpen));  
            document.querySelector('#nav_mobile_menu').classList.toggle('nav--open');
        },

        navMenu: function() {
            document.querySelector('.icon').classList.toggle("open")
            document.querySelector('#nav_mobile_menu').classList.remove("nav--open");
        },

        navItem: function(e) {
            this.nav_item_clicked = 1;
            this.nav_item_id = e.target.hash
        },

        nav: function(e){
            // abort if menu isn't open or modifier keys are pressed
            if (!this.isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }
            
            // listen for tab press and move focus
            // if we're on either end of the navigation
            let menuLinks = document.querySelectorAll('.nav_link');
            if (e.keyCode === 9) {
                if (e.shiftKey) {
                    if (document.activeElement === menuLinks[0]) {
                    document.querySelector('#icon').focus();
                    e.preventDefault();
                    }
                } else if (document.activeElement === document.querySelector('#icon')) {
                    menuLinks[0].focus();
                    e.preventDefault();
                }
            }
        },

        hideMenu: function(){
            let prevScrollpos = window.pageYOffset; 
            window.addEventListener('scroll', function(){
            let nav_item_clicked = 0;    
            
            let mobileNav = document.querySelector(".dl-index-mobile-navigation");
            let currentScrollPos = window.pageYOffset;
            console.log(prevScrollpos + ' < ' + currentScrollPos)
            /* ----- Hide SideNav on Scroll down ----- */
            if ((prevScrollpos < currentScrollPos) || ((nav_item_clicked == "1") && (mobileNav.style.top = "") ) ) {
                mobileNav.style.top = "-" + mobileNav.offsetHeight + "px";
            } else  {
                if((nav_item_clicked == "1") && (window.pageYOffset <  (document.querySelector(this.nav_item_id).offsetTop)) ) {
                    nav_item_clicked = 0;
                }

                if( nav_item_clicked == "0"){
                    mobileNav.style.top = "0px";
                }            
            }
            prevScrollpos = currentScrollPos
             });
        }
    },

    mounted() {
        this.hideMenu()
       
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .dl-logo-mobile{
        position: absolute;
        padding: 15px 15px; 
        border: 3px solid var(--dl-color);
        margin: 0px !important;
    }

    .nav_menu > .nav_item {
        transition: all 0.3s ease;
        z-index: 5;
        width: 100%;
        display: block;
        position: relative;
    }

    .nav--open > .nav_menu > .nav_item li{
        transition: all 0.3s ease;
        position: relative;
    }

    .nav_link {
        color: white;
        display: block;
        text-align: right;
        letter-spacing: 3px;
        font-size: 1.25rem;
        text-decoration: none;
        padding: 1rem;
        z-index: 5;
        width: 100%;
        height: 100%;
    }
  
    .nav_link:hover, .nav_link:focus {
        outline: 0;
    }

    .dl-index-mobile-navigation-left{
        float: left;
        left: 20px;
        top: 20px;
    }

    .dl-index-mobile-navigation-right{
        float: right;
        right: 20px;
        top: 10px;
        width: 100%;
    }

    .dl-index-mobile-navigation{
        position: fixed;
        top: 0;
        width: 100%;
        display: block;
        transition: top 0.5s;
        background: white;
        height: 110px;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
    }


    @media (min-width:726px) {
        .dl-index-mobile-navigation{
            display: none;
        }

        .wrapper-header, .dl-logo{
            display: block;
        }
    }

    @media (max-width:726px) {
        .dl-index-mobile-navigation{
        display:block;
        }
        
        .wrapper-header, .dl-logo{
            display: none;
        }
    }

    .nav_menu {
        right: 0px;  
        justify-content: center;
        height: 100%;
        position: fixed;
        display:block;
        visibility: hidden;
        float:right;
        list-style: none;  
        margin-top: 150px;
        z-index:2;
    }


    /* Responsible for the initial items effect*/
    .nav--open > .nav_menu > li:nth-child(1) {
        transition-delay: 0.4s;
        transform: translateX(-40px)
    }

    .nav--open > .nav_menu > li:nth-child(2) {
        transition-delay: 0.5s;
        transform: translateX(-40px)
    }

    .nav--open > .nav_menu > li:nth-child(3) {
        transition-delay: 0.6s;
        transform: translateX(-40px)
    }

    .nav--open > .nav_menu > li:nth-child(4) {
        transition-delay: 0.7s;
        transform: translateX(-40px)
    }

    .nav--open > .nav_menu > li:nth-child(5) {
        transition-delay: 0.8s;
        transform: translateX(-40px)
    }

    
    .nav_menu > li:nth-child(5) {
        transition-delay: 0.0s;
        opacity: 1;
        transform: translateX(40px);
    }

    .nav_menu > li:nth-child(4) {
        transition-delay: 0.1s;
        opacity: 1;
        transform: translateX(100px);
    }

    .nav_menu > li:nth-child(3) {
        transition-delay: 0.2s;
        opacity: 1;
        transform: translateX(100px);
    }

    .nav_menu > li:nth-child(2) {
        transition-delay: 0.3s;  
        opacity: 1;
        transform: translateX(100px);
    }

    .nav_menu > li:nth-child(1) {
        transition-delay: 0.4s;
        opacity: 1;
        transform: translateX(100px);
    }


    .icon {
        width: 40px;
        position: absolute;
        top: 25px;
        right: 20px;
        z-index: 100;

        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    
    .icon span {
        z-index: 1000;
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background:var(--dl-color);
        border-radius: 9px;
        opacity: 1;
        right: 20px;
        
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    
    .icon span:nth-child(1) {
        top: 0px;
    }
    
    .icon span:nth-child(2) {
        top: 18px;
    }
    
    .icon span:nth-child(3) {
        top: 36px;
    }
    
    .icon.open span:nth-child(1) {
        top: 18px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    
    .icon.open span:nth-child(2) {
        opacity: 0;
        right: 20px;
    }
    
    .icon.open span:nth-child(3) {
        top: 18px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    #nav_mobile_menu{
      height: 100%;
      width: 100%;
      position:relative;
      left: 0;
      top: 0;
      z-index: 10;
      list-style: none;
    }

    .splash {
        position: fixed;  
        top: 40px;
        right: 20px;
        width: 1px;
        height: 1px;
        float: right;
        transform: rotate(90deg)
    }

    .splash::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        background-color: var(--dl-color);
        width: 284vmax;
        height: 284vmax;
        top: -142vmax;
        left: -142vmax;
        transform: scale(0);
        transform-origin: 50% 50%;
        transition: transform 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
        will-change: transform;  
    }

    .nav:target > .splash::after, .nav--open > .splash::after {
        transform: scale(1);
    }

    .nav:target .nav_menu, .nav--open .nav_menu {
        visibility: visible;
    }
    

  .sidenav > ul{
      margin-top: 60px;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .sidenav{
    top: 0;
    font-size: 36px;
  }


  .sidenav-menu-padding{
      padding: 10px 0px;
  }

.dl-index-mobile-navigation{
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.5s;
    z-index: 100;
    background: white;
    height: 110px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 
   
}

.dl-index-mobile-navigation-left{
    float: left;
    left: 20px;
    top: 20px;
}

.dl-index-mobile-navigation-right{
    float: right;
    right: 20px;
    top: 10px;
    width: 100%;
   
}

.dl-logo-mobile{
    position: absolute;
    padding: 15px 15px; 
    border: 3px solid var(--dl-color);
    margin: 0px !important;
}




@media (min-width:726px) {
    .dl-index-mobile-navigation{
        display: none;
    }

    .wrapper-header, .dl-logo{
        display: block;
    }
}

  
@media (max-width:726px) {
    .dl-index-mobile-navigation{
      display:block;
    }
    
    .wrapper-header, .dl-logo{
        display: none;
    }
}

</style>
