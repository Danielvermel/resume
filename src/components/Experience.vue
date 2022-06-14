<template>
    <div class="row my-3 justify-content-start">
        <div class="col-md-4">
            <h4> {{ title }} </h4>
            <p>
                {{ date }}
            </p>
        </div>
        <div class="col-md-8 p-0">
            <h4 v-if="role">{{ role }}</h4>
            <h4 v-if="course">{{ course }}</h4>
            <p>
                <ul v-if="experiences" class="dl-index-experience-career-list">
                    <li v-for="(experience, index) in experiences" :key="index">{{ experience }}</li>
                </ul>
                <span v-if="modules">
                    <strong>Modules Included:</strong>
                    {{ modules }}
                     <br>
                </span>

                <span v-if="subjects">
                    <strong>Subjects Included:</strong>
                    {{ subjects }}
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
      title: {
      type: String,
      default: ''
    },
      date: {
      type: String,
      default: ''
    },
      role: {
      type: String,
      default: ''
    },
      experiences: {
      type: Array
    },
      location: {
      type: String,
      default: ''
    },
      website: {
      type: String,
      default: ''
    },
      modules: {
      type: String,
      default: ''
    },
      course: {
      type: String,
      default: ''
    },
      subjects: {
      type: String,
      default: ''
    } 
  }
}
</script>

<style scoped>
.dl-index-experience-career-list {
    margin-left: -20px
}
</style>
