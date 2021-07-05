<template>
  <li class="col-md-6">
    <span class="dl-index-abilities-title">
      {{ title }}
    </span>

    <span class="dl-index-abilities-stars">
      <i
        v-if="stars >= 1"
        class="fas fa-star"
        data-aos="zoom-in"
        data-aos-duration="900"
      />
      <i
        v-if="stars >= 2"
        class="fas fa-star"
        data-aos="zoom-in"
        data-aos-duration="1400"
      />
      <i
        v-if="stars >= 3"
        class="fas fa-star"
        data-aos="zoom-in"
        data-aos-duration="1900"
      />
      <i
        v-if="stars >= 4"
        class="fas fa-star"
        data-aos="zoom-in"
        data-aos-duration="2400"
      />
      <i
        v-if="stars >= 5"
        class="fas fa-star"
        data-aos="zoom-in"
        data-aos-duration="2900"
      />
    </span>
  </li>
</template>

<script>
import AOS from "aos";
export default {
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      default: '',
    },
    stars: {
      type: String,
      default:'',
    }
  },

  mounted() {
    AOS.init({ duration: 1200 });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dl-index-abilities-stars {
  display: inline-block;
}

.dl-index-abilities-title {
  display: inline-block;
  width: 50%;
  text-align: left;
}

.dl-title-color,
.fa-star {
  color: var(--dl-color);
}

.dl-title-color {
  opacity: 0.8;
}
</style>
