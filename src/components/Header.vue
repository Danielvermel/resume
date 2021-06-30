<template>
    <nav class="wrapper-header">
        <div class="header" id="navbar-header">
            <div class="container-fluid" id="navbar">
                <div class="row" >
                    <div class="col-md-12 " >
                        <ul class="nav dl-index-menu">
                            <li class="nav-item  dl-index-menu-item"  id="profile-menu" data-aos="fade-up"  data-aos-duration="500">
                                <a class="nav-link dl-index-menu-item-link" @mouseover="activateMenu($event)" @mouseleave="deactivateMenu($event)" href="#profile">Profile</a>
                            </li>
                            <li class="nav-item  dl-index-menu-item"  id="experiences-menu" data-aos="fade-up"  data-aos-duration="1000">
                                <a class="nav-link dl-index-menu-item-link" @mouseover="activateMenu($event)" @mouseleave="deactivateMenu($event)" href="#experiences">Experiences</a>
                            </li>
                            <li class="nav-item  dl-index-menu-item" id="abilities-menu" data-aos="fade-up"  data-aos-duration="1500">
                                <a class="nav-link dl-index-menu-item-link"  @mouseover="activateMenu($event)" @mouseleave="deactivateMenu($event)" href="#abilities">Abilities</a>
                            </li>
                            <li class="nav-item  dl-index-menu-item" id="projects-menu" data-aos="fade-up"  data-aos-duration="2000">
                                <a class="nav-link dl-index-menu-item-link"  @mouseover="activateMenu($event)" @mouseleave="deactivateMenu($event)" href="#projects" >Projects</a>
                            </li>
                            <li class="nav-item  dl-index-menu-item"  id="contacts-menu" data-aos="fade-up"  data-aos-duration="2500">
                                <a class="nav-link dl-index-menu-item-link" @mouseover="activateMenu($event)" @mouseleave="deactivateMenu($event)" href="#contacts" >Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',

       mounted: function() {
        window.onscroll = function() {

          // let prevScrollpos = window.pageYOffset; 
    
        let navbar = document.querySelector("#navbar");
        let navbarHeader = document.querySelector("#navbar-header");
        let profileMenu = document.querySelector("#profile-menu");
        let profile =  document.querySelector("#profile");
        let experiencesMenu = document.querySelector("#experiences-menu");
        let experiences = document.querySelector("#experiences");
        let abilitiesMenu = document.querySelector("#abilities-menu");
        let abilities = document.querySelector("#abilities");
        let projectsMenu = document.querySelector("#projects-menu");
        let projects = document.querySelector("#projects");
        let contactsMenu = document.querySelector("#contacts-menu");
        let contacts = document.querySelector("#contacts");

        if (window.pageYOffset >= (navbar.offsetTop) && window.pageYOffset >= (navbarHeader.offsetTop)) {
            navbar.classList.add("sticky");
            
        } else {
            navbar.classList.remove("sticky");
            profileMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
        }

        // /* ----- Profile ----- */
        if (window.pageYOffset >= profile.offsetTop && window.pageYOffset < experiences.offsetTop) {
            experiencesMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
            profileMenu.children[0].classList.add("dl-index-actives", "dl-index-font-actives");   
        } 

        //  /* ----- Experiences ----- */
        if (window.pageYOffset >= experiences.offsetTop && window.pageYOffset < abilities.offsetTop) {
            
            abilitiesMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");          
            experiencesMenu.children[0].classList.add("dl-index-actives", "dl-index-font-actives");
            profileMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");  
        } 

        //  /* ----- Abilities ----- */
        if (window.pageYOffset >= abilities.offsetTop && window.pageYOffset < projects.offsetTop) {
            
            experiencesMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
            abilitiesMenu.children[0].classList.add("dl-index-actives", "dl-index-font-actives");
            projectsMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
        } 

        //  /* ----- Projects ----- */
        if (window.pageYOffset >= projects.offsetTop && window.pageYOffset < contacts.offsetTop) {
            
            abilitiesMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
            contactsMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
            projectsMenu.children[0].classList.add("dl-index-actives", "dl-index-font-actives");  
        } 
        
        // /* ----- Contacts ----- */
        if (window.pageYOffset >= contacts.offsetTop-15) {  
            contactsMenu.children[0].classList.add("dl-index-actives", "dl-index-font-actives");  
            projectsMenu.children[0].classList.remove("dl-index-actives", "dl-index-font-actives");
        } 

        }
    },

    methods: {
         activateMenu: function(e) {
            e.target.classList.add("dl-index-active", "dl-index-font-active")
        },
        deactivateMenu: function(e){
            e.target.classList.remove("dl-index-active", "dl-index-font-active")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    max-width: 100%;
    overflow-x: hidden;
    --dl-color:  #FF7F50;
    --dl-mobile-right: 10%;
}
 .sticky {
    position: fixed;
    top: 0;
    left:0;
    right:0;
    background-color: white;
    z-index:10;
  }


/* ------ Menus ----- */
.dl-logo{
    background: transparent;
    position: absolute;  
    padding: 15px 15px; 
    font-size: 1.5em;
    top:50px; 
    left:55px;  
    border: 3px solid transparent;
    animation: logoss 3s linear infinite;
    /*Effects */  
    animation: logo 2s linear 0.5s 1 normal forwards; 
    animation-duration: 2s; 
    animation-delay: 2s;
    animation-iteration-count: 1;  
    animation-timing-function: e; 
}

@keyframes logo {
    0%   {border: 3px solid transparent}
    100% {border: 3px solid var(--dl-color)}
}

.dl-logo-font{
    color: var(--dl-color) ;
    font-weight: 600;
    font-family: 'Segoe UI', sans-serif;
}

.dl-index-menu{
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 15px 0px;
}

.dl-index-menu-item{
    padding: 0px 2px;
}

.dl-index-menu-item-link{
    text-align: center;
    padding: 7px 30px;
    color:var(--dl-color);
    margin: 10px 0px;
}

.dl-index-active, .dl-index-actives{
    background-color:var(--dl-color);
    color: white;
    cursor:  pointer;
    border-radius: 7em / 7em;
}

.dl-index-font-active, .dl-index-font-actives {
    color:white;  
}

.dl-index-active{
    background-color: var(--dl-color);
    cursor:  pointer;
}

.dl-index-font-active {
    color:white; 
}

a:hover{
    color: white;
}

.wrapper-header{
    height: 0px;
}
/* ------ END Menus ----- */




/* ------ MOBILE Menus ----- */



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
    z-index: 5;
    background: white;
    height: 110px;
    width: 100%;
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



.icon {
    width: 40px;
    position: absolute;
    top: 25px;
    right: 20px;
    z-index: 2;

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
    z-index: 10;
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

  .nav--open > .nav_menu > .nav_item li{
    transition: all 0.3s ease;
    position: relative;
  }

/* Responsável pelo efeito inicial dos itens*/
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

  

 .nav_menu > .nav_item {
    transition: all 0.3s ease;
    z-index: 5;
    width: 100%;
    display: block;
    position: relative;
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

  .nav:target .nav_menu, .nav--open .nav_menu {
    visibility: visible;
  }

  .viewport {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: white;
  }

  

</style>
