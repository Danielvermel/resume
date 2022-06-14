<template>
  <div>
    <header>
      <MobileNavigation />
    </header>

    <main>
      <section class="dl-index-background">
        <header class="dl-logo dl-logo-font">D/L</header>

        <div class="container-fluid">
          <div
            class="dl-index-background-text-padding row justify-content-start"
            itemscope
            itemtype="http://schema.org/CreativeWork"
          >
            <div class="dl-index-background-text-1 col-sm-12">
              Hi, I'm
              <span class="dl-title-color" itemprop="author">Daniel Leite</span>
            </div>

            <div class="dl-index-background-text-2 col-sm-12">
              This is my web
            </div>
            <div class="dl-index-background-text-3 col-sm-12">
              <span itemprop="abstract">Resume</span>
            </div>
            <div class="dl-index-background-text-arrow-padding col-sm-12">
              <div class="dl-index-background-text-arrow">
                <i class="fas fa-angle-double-down"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header />

      <section class="dl-index-profile container" id="profile">
        <Profile
          :role="profile.role"
          :description="profile.description"
          :profileImage="profile.profileImage"
          :age="profile.age"
          :firstName="profile.firstName"
          :middleName="profile.middleName"
          :lastName="profile.lastName"
          :location="profile.location"
        />
      </section>

      <section class="dl-index-experiences" id="experiences">
        <div class="dl-index-experiences-title-padding container">
          <article>
            <h1 class="dl-index-experiences-title dl-title-color">
              Experiences
            </h1>
            <p class="dl-quotes">
              “Nothing ever becomes real 'til it is experienced.”
              <br />
              ― John Keats
            </p>
            <hr />
            <h3 class="dl-title-color">Careers</h3>

            <Experience
              v-for="(data, index) in careers"
              :key="index"
              :title="data.title"
              :date="data.date"
              :role="data.role"
              :experiences="data.experiences"
              :location="data.location"
              :website="data.website"
            />
          </article>

          <hr />
          <article>
            <h3 class="dl-title-color">Education</h3>

            <Experience
              v-for="(data, index) in education"
              :key="index"
              :title="data.university"
              :date="data.date"
              :course="data.course"
              :subjects="data.subjects"
              :modules="data.modules"
              :location="data.location"
            />
          </article>
        </div>
      </section>

      <section class="dl-index-abilities" id="abilities">
        <div class="dl-index-abilities-title-padding container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="dl-index-abilities-main-title dl-title-color">
                Abilities
              </h1>
              <p class="dl-quotes">
                “Any fool can know. The point is to understand.”
                <br />
                ― Albert Einstein
              </p>
              <hr />
              <h3 class="dl-title-color">Programming</h3>
            </div>
          </div>

          <div class="row justify-content-start dl-index-abilities-skills">
            <div class="col-md-12">
              <ul class="dl-index-abilities-list row">
                <Skills title="HTML/CSS" stars="4" />
                <Skills title="SCSS" stars="4" />
                <Skills title="JavaScript" stars="4" />
                <Skills title="TypeScript" stars="3" />
                <Skills title="Python" stars="4" />
                <Skills title="Java" stars="3" />
                <Skills title="C#" stars="1" />
                <Skills title="SQL" stars="4" />
                <Skills title="PHP" stars="2" />
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <hr>
              <h3 class="dl-title-color">Frameworks & Libraries</h3>
            </div>
          </div>

          <div class="row justify-content-start dl-index-abilities-skills">
            <div class="col-md-12">
              <ul class="dl-index-abilities-list row">
                <Skills title="Vue.js" stars="4" />
                <Skills title="Nuxt.js" stars="3" />
                <Skills title="React.js" stars="2" />
                <Skills title="Next.js" stars="1" />
                <Skills title="Redux" stars="1" />
                <Skills title="Express.js" stars="2" />
                <Skills title="Node.js" stars="2" />
                <Skills title="Sails.js" stars="2" />
                <Skills title="JQuery" stars="4" />
                <Skills title="Bootstrap" stars="4" />
                <Skills title="Spring Boot" stars="3" />
                <Skills title="Thymeleaf" stars="3" />
                <Skills title="Flask" stars="2" />
                <Skills title=".Net" stars="1" />
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <hr />
              <h3 class="dl-title-color">Technologies</h3>
            </div>
          </div>

          <div class="row justify-content-start dl-index-abilities-skills">
            <div class="col-md-12">
              <ul class="dl-index-abilities-list row">
                <Skills title="Jenkins" stars="3" />
                <Skills title="Git" stars="4" />
                <Skills title="Jira" stars="3" />
                <Skills title="JFrog" stars="2" />
                <Skills title="NGINX" stars="1" />
                <Skills title="JMeter" stars="3" />
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <hr />
              <h3 class="dl-title-color">Languages</h3>
            </div>
          </div>

          <div class="row justify-content-start dl-index-abilities-skills">
            <div class="col-md-12">
              <ul class="dl-index-abilities-list row">
                <Skills title="Portuguese" stars="5" />
                <Skills title="English" stars="4" />
                <Skills title="Spanish" stars="3" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="dl-index-projects" id="projects">
          <div class="dl-index-experiences-title-padding container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="dl-index-projects-title dl-title-color">Projects</h1>
                <p class="dl-quotes">
                  “You can do anything you set your mind to.”
                  <br />
                  ― Benjamin Franklin
                </p>
                <hr />
              </div>
            </div>

            <div class="row justify-content-start my-4">
              <Card
                v-for="(project, index) in projects"
                :key="index"
                :projectUrl="project.projectUrl"
                :imagePath="project.imagePath"
                :title="project.title"
                :description="project.description"
                :techStack="project.techStack"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid dl-index-contacts" id="contacts">
          <div class="container dl-index-contacts-margin">
            <div class="row">
              <div
                class="col-md-12 dl-index-contacts-title dl-index-contacts-font"
              >
                <h2>Contacts</h2>
              </div>
            </div>

            <div class="container">
              <p class="dl-quotes-white">
                “If I had asked people what they wanted, they would have said
                faster horses.”
                <br>
                ― Henry Ford
              </p>
              <hr class="bg-white w-100" />

              <div class="dl-index-contacts-font row">
                <Contacts :data="contacts.email" className="far fa-envelope" />
                <Contacts
                  :data="contacts.phoneNumber"
                  className="fas fa-mobile-alt"
                />
                <Contacts :data="contacts.github" className="fab fa-github" />
                <Contacts
                  :data="contacts.linkedin"
                  className="fab fa-linkedin-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Card from "./components/Card";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
// import axios from 'axios';

export default {
  name: "App",
  components: {
    Card,
    Skills,
    Experience,
    Profile,
    Contacts,
    Header,
    MobileNavigation,
  },
  data() {
    return {
      profile: {},
      education: [],
      careers: [],
      projects: [],
      contacts: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch("./data.json");
        const response = await res.json();
        this.profile = response.profile;
        this.education = response.education;
        this.careers = response.careers;
        this.projects = response.projects;
        this.contacts = response.contacts;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss">
/* ---- Apply to all Categories ---- */
html,
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

.dl-title-color,
.fa-star {
  color: var(--dl-color);
}

.dl-title-color {
  opacity: 0.8;
}

.dl-quotes {
  text-align: center;
  font-size: 21px;
  color: #727878;
}

@media (max-width: 580px) {
  .container {
    padding: 10px 30px !important;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
/* ---- END Apply to all Categories ---- */

.dl-index-experiences,
.dl-index-projects {
  background-image: url("./assets/img/texture.png");
  background-attachment: fixed;
  background-position: center;
}

.dl-index-experiences-title,
.dl-index-abilities-main-title,
.dl-index-projects-title,
.dl-index-contacts-title {
  justify-content: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
}

/* ----- Start Title ----- */

@media (max-width: 420px) {
  .dl-index-background {
    min-height: 800px;
    background-position-y: -150px;
  }

  .dl-index-background-text-padding {
    text-align: center !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-bottom: 100px !important;
    padding-top: 0px !important;
    top: 0px;
  }

  .dl-index-profile {
    margin-top: 0px !important;
  }
}

  .dl-index-background {
    background-image: url("./assets/img/background-image-1.jpg");
    background-position-y: -150px;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat; /* Do not repeat the image */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    overflow-y: 30px;
  }

  .dl-index-background-text-padding {
    padding: 250px;
    text-align: center;
  }

  .dl-index-background-text-1 {
    font-size: 45px;
    font-family: "Anton", sans-serif;
    letter-spacing: 3px;
    position: relative;
    opacity: 0.8;
    z-index: 0;
    top: 50px;
    text-align: center;

    -webkit-animation-name: texto-inicial-1; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-delay: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-fill-mode: both; /* Safari 4.0 - 8.0 */
    animation-name: text-inicial-1;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-fill-mode: both;
  }

  .dl-index-background-text-2 {
    font-size: 45px;
    font-family: "Anton", sans-serif;
    letter-spacing: 3px;
    text-align: center;
    align-items: center;
    position: relative;
    opacity: 0.8;
    z-index: 0;
    top: 50px;

    -webkit-animation-name: texto-inicial-2; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-delay: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-fill-mode: both; /* Safari 4.0 - 8.0 */
    animation-name: text-inicial-2;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-fill-mode: both;
  }

  .dl-index-background-text-3 {
    font-size: 25px;
    font-family: "Anton", sans-serif;
    letter-spacing: 3px;
    position: relative;
    opacity: 0.8;
    z-index: 0;
    top: 70px;
    padding-bottom: 80px;

    -webkit-animation-name: texto-inicial-3; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 3s; /* Safari 4.0 - 8.0 */
    -webkit-animation-delay: 3s; /* Safari 4.0 - 8.0 */
    -webkit-animation-fill-mode: both; /* Safari 4.0 - 8.0 */
    animation-name: text-inicial-3;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-fill-mode: both;
  }

  .dl-index-background-text-arrow-padding {
    animation-name: rotate;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: e;
  }

  .dl-index-background-text-arrow {
    font-size: 30px;
  }

  @keyframes rotate {
    0% {
      top: 0px;
    }
    50% {
      top: 7px;
    }
    100% {
      top: 0px;
    }
  }

@-webkit-keyframes texto-inicial-1 {
  from {
    left: -900px;
  }
  to {
    left: 0px;
  }
}

/* Standard syntax */
@keyframes text-inicial-1 {
  from {
    left: -900px;
  }
  to {
    left: 0px;
  }
}

@-webkit-keyframes texto-inicial-2 {
  from {
    right: -900px;
  }
  to {
    right: 0px;
  }
}

/* Standard syntax */
@keyframes text-inicial-2 {
  from {
    right: -900px;
  }
  to {
    right: 0px;
  }
}

@-webkit-keyframes texto-inicial-3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Standard syntax */
@keyframes text-inicial-3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ----- END Start Title ----- */

/* ------ Menus ----- */
.dl-logo {
  background: transparent;
  position: absolute;
  padding: 15px 15px;
  font-size: 1.5em;
  top: 50px;
  left: 55px;
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
  0% {
    border: 3px solid transparent;
  }
  100% {
    border: 3px solid var(--dl-color);
  }
}

.dl-logo-font {
  color: var(--dl-color);
  font-weight: 600;
  font-family: "Segoe UI", sans-serif;
}

.dl-index-menu {
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 15px 0px;
}

a:hover {
  color: white;
}
/* ------ END Menus ----- */

/* ----- Profile ----- */

.dl-index-profile,
.dl-index-experiences,
.dl-index-abilities,
.dl-index-projects {
  padding: 100px 0px;
  margin-top: 50px;
}
/* ----- END Profile ----- */

/* ----- Abilities ----*/

.dl-index-abilities-skills {
  padding: 10px 0px;
}

.dl-index-abilities-list {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;

  li {
    padding: 10px 0px;
    font-size: 1.25rem;
    font-weight: 400; 
  }
}

/* ----- END Abilities ----- */

/* ----- Contacts ----- */

.dl-index-contacts {
  background-color: var(--dl-color);
}

.dl-index-contacts-margin {
  padding: 100px 0px;
  padding-bottom: 150px !important;
}

.dl-index-contacts-font {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.dl-quotes-white {
  text-align: center !important;
  font-size: 21px;
  color: white;
  font-weight: 300;
}
/* ----- END Contacts ----- */

@media (max-width: 726px) {
  .dl-logo {
    display: none;
  }
}
</style>
