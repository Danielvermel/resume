<template>
  <nav class="wrapper-header">
    <div id="navbar-header" class="header">
      <div id="navbar" class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav dl-index-menu">
              <li
                id="profile-menu"
                class="nav-item dl-index-menu-item"
                data-aos="fade-up"
                data-aos-duration="500">
                <a
                  class="nav-link dl-index-menu-item-link"
                  @mouseover="activateMenu($event)"
                  @mouseleave="deactivateMenu($event)"
                  href="#profile">
                  Profile
                </a>
              </li>
              <li
                id="experiences-menu"
                class="nav-item dl-index-menu-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a
                  class="nav-link dl-index-menu-item-link"
                  @mouseover="activateMenu($event)"
                  @mouseleave="deactivateMenu($event)"
                  href="#experiences">
                  Experiences
                </a>
              </li>
              <li
                id="abilities-menu"
                class="nav-item dl-index-menu-item"
                data-aos="fade-up"
                data-aos-duration="1500">
                <a
                  class="nav-link dl-index-menu-item-link"
                  @mouseover="activateMenu($event)"
                  @mouseleave="deactivateMenu($event)"
                  href="#abilities">
                  Abilities
                </a>
              </li>
              <li
                id="projects-menu"
                class="nav-item dl-index-menu-item"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <a
                  class="nav-link dl-index-menu-item-link"
                  @mouseover="activateMenu($event)"
                  @mouseleave="deactivateMenu($event)"
                  href="#projects">
                  Projects
                </a>
              </li>
              <li
                id="contacts-menu"
                class="nav-item dl-index-menu-item"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <a
                  class="nav-link dl-index-menu-item-link"
                  @mouseover="activateMenu($event)"
                  @mouseleave="deactivateMenu($event)"
                  href="#contacts">
                  Contacts
                </a>
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
  name: "Header",

  mounted: function () {
    window.onscroll = function () {
      // let prevScrollpos = window.pageYOffset;

      let navbar = document.querySelector("#navbar");
      let navbarHeader = document.querySelector("#navbar-header");
      let profileMenu = document.querySelector("#profile-menu");
      let profile = document.querySelector("#profile");
      let experiencesMenu = document.querySelector("#experiences-menu");
      let experiences = document.querySelector("#experiences");
      let abilitiesMenu = document.querySelector("#abilities-menu");
      let abilities = document.querySelector("#abilities");
      let projectsMenu = document.querySelector("#projects-menu");
      let projects = document.querySelector("#projects");
      let contactsMenu = document.querySelector("#contacts-menu");
      let contacts = document.querySelector("#contacts");

      if (
        window.pageYOffset >= navbar.offsetTop &&
        window.pageYOffset >= navbarHeader.offsetTop
      ) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
        profileMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
      }

      // /* ----- Profile ----- */
      if (
        window.pageYOffset >= profile.offsetTop &&
        window.pageYOffset < experiences.offsetTop
      ) {
        experiencesMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
        profileMenu.children[0].classList.add(
          "dl-index-active",
          "text-white"
        );
      }

      //  /* ----- Experiences ----- */
      if (
        window.pageYOffset >= experiences.offsetTop &&
        window.pageYOffset < abilities.offsetTop
      ) {
        abilitiesMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
        experiencesMenu.children[0].classList.add(
          "dl-index-active",
          "text-white"
        );
        profileMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
      }

      //  /* ----- Abilities ----- */
      if (
        window.pageYOffset >= abilities.offsetTop &&
        window.pageYOffset < projects.offsetTop
      ) {
        experiencesMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
        abilitiesMenu.children[0].classList.add(
          "dl-index-active",
          "text-white"
        );
        projectsMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
      }

      //  /* ----- Projects ----- */
      if (
        window.pageYOffset >= projects.offsetTop &&
        window.pageYOffset < contacts.offsetTop
      ) {
        abilitiesMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
        contactsMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
        projectsMenu.children[0].classList.add(
          "dl-index-active",
          "text-white"
        );
      }

      // /* ----- Contacts ----- */
      if (window.pageYOffset >= contacts.offsetTop - 15) {
        contactsMenu.children[0].classList.add(
          "dl-index-active",
          "text-white"
        );
        projectsMenu.children[0].classList.remove(
          "dl-index-active",
          "text-white"
        );
      }
    };
  },

  methods: {
    activateMenu: function (e) {
      e.target.classList.add("dl-index-active", "text-white");
    },
    deactivateMenu: function (e) {
      e.target.classList.remove("dl-index-active", "text-white");
    },
  },
};
</script>

<style scoped>
body {
  max-width: 100%;
  overflow-x: hidden;
  --dl-color: #ff7f50;
  --dl-mobile-right: 10%;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
} 

.dl-index-menu-item-link {
  text-align: center;
  padding: 7px 30px;
  color: var(--dl-color);
  margin: 10px 0px;
}

.dl-index-active {
  background-color: var(--dl-color);
  color: white;
  cursor: pointer;
  border-radius: 7em / 7em;
}

a:hover {
  color: white;
}

.wrapper-header {
  height: 0px;
}

@media (min-width: 726px) {
  .wrapper-header{
    display: block;
  }
}

@media (max-width: 726px) {
  .wrapper-header {
    display: none;
  }
}
</style>
