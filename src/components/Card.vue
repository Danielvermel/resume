<template class="dl-index-card">
  <div class="col-md-6 my-3">
    <a :href="projectUrl" class="text-white" target="_blank">
      <figure class="dl-index-project-effect">
        <img class="dl-index-projects-images" :src="filePath" :alt="title" />
        <figcaption>
          <h3>{{ title }}</h3>

          <p>{{ description }}</p>

          <p>
            <strong>Tags:</strong>
            <br>
            <button v-for=" tag, index in techStack" :key="index">{{tag}}</button>
          </p>
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    projectUrl: {
      type: String,
      default: ''
    }, 
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    techStack: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      filePath: "",
    };
  },
  created() {
    this.filePath = require(`@/assets/img/${this.imagePath}.jpg`);
  },
};
</script>

<style scoped lang="scss">
.dl-index-card {
  .dl-index-projects-images {
    height: 100%;
  }
  
}





.dl-index-project-effect {
  background-color: var(--dl-color);
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 0;

  img {
    width: -webkit-calc(100% + 20px);
    width: calc(100% + 20px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
    &:hover{

    img {
      opacity: 0.05;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    h3 {
      opacity: 1;
      &::after {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
 
    p {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  figcaption {
    text-align: left;
    padding: 20px 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;  
    h3 {
      position: relative;
      overflow: hidden;
      padding-bottom: 20px;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #fff;
        content: "";
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }
    p {
      padding-top: 10px;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }






}

</style>
