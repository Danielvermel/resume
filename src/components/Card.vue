<template>
    <div class="col-md-6 my-3">
        <a :href="projectUrl" class="text-white" target="_blank">
            <figure class="dl-index-project-effect">
                <img class="dl-index-projects-images" :src="filePath" :alt="title">
                <figcaption>
                    <h3>{{title}}</h3>
                    
                    <p> {{description}}
                    </p>

                    <p>
                        <strong> Tags:</strong>
                        <br>
                        "{{techStack}}"
                    </p>
                </figcaption>
            </figure>
        </a>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    projectUrl: String,
    imagePath: String,
    title: String,
    description: String,
    techStack: String
  },
  data(){
      return{
          filePath: ''
      }
  },
      created() {
        this.filePath = require(`@/assets/img/${this.imagePath}.jpg`)  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dl-index-projects-images{
    height:100%;
}

.dl-index-projects-images-resize{
  height: 270px;
  width: 490px;
}

figure {
    position: relative;
    overflow: hidden;
    margin: 0;

}

figcaption{
    text-align: left;
    padding: 20px 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
}

.dl-index-project-effect {
    background-color: var(--dl-color);
    color: #FFF;
}

figure.dl-index-project-effect img {
	width: -webkit-calc(100% + 20px);
	width: calc(100% + 20px);
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-10px,0,0);
	transform: translate3d(-10px,0,0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

figure.dl-index-project-effect:hover img {
	opacity: 0.05;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}


figure.dl-index-project-effect h3 {
	position: relative;
	overflow: hidden;
	padding-bottom: 20px;
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.dl-index-project-effect:hover h3 {
	opacity: 1;
}

figure.dl-index-project-effect h3::after {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 2px;
	background: #fff;
	content: '';
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(-100%,0,0);
	transform: translate3d(-100%,0,0);
}

figure.dl-index-project-effect:hover h3::after {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.dl-index-project-effect p {
	padding-top: 10px;
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(100%,0,0);
	transform: translate3d(100%,0,0);
}

figure.dl-index-project-effect:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.dl-index-projects-padding{
    padding: 10px 10px;
}
</style>
