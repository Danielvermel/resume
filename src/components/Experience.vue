<template>
    <div class="row dl-index-experiences-education-padding justify-content-start">
        <div class="col-md-4">
            <h4> {{title}} </h4>
            <p>
                {{date}}
            </p>
        </div>
        <div class="col-md-8 p-0">
            <h4 v-if="role">{{role}}</h4>
            <h4 v-if="course">{{course}}</h4>
            <p>
                <ul v-if="experiences" class="dl-index-experience-career-list">
                    <li v-for="(experience, index) in experiences" :key="index">{{experience}}</li>
                </ul>
                <span v-if="modules">
                    <strong>Modules Included:</strong>
                    {{modules}}
                     <br>
                </span>

                <span v-if="subjects">
                    <strong>Subjects Included:</strong>
                    {{subjects}}
                    <br>
                </span>
        
                <span class="dl-title-color">
                    <i class="fas fa-map-marker-alt"></i>
                    {{location}} <span v-if="website"> | </span>
                    <i class="fas fa-link" v-if="website"></i> 
                    <a  v-if="website" :href="website" class="dl-title-color">{{website}}</a>
                </span>

            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
      title: String,
      date: String,
      role: String,
      experiences: Array,
      location: String,
      website: String,
      modules: String,
      course: String,
      subjects: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dl-index-experiences-title, .dl-index-abilities-main-title, .dl-index-projects-title, .dl-index-contacts-title{
    justify-content: center;
    text-align: center;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    text-decoration: none;
  }

  .dl-index-experiences, .dl-index-abilities, .dl-index-projects, .dl-index-experiences-title-padding, .dl-index-abilities-title-padding{
    padding: 50px 0px;
  }

  .dl-index-experiences-education{
      text-align: left;
      font-size: 20px;
  }

  .dl-index-experiences-education-padding{
      padding: 20px 0px;
  }

  .dl-index-experiences-education-2column-padding{
    padding: 0px 0px;
  }

  .dl-index-experience-career-list{
    margin-left: -20px
  }
</style>
