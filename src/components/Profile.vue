<template>
  <div class="dl-index-profile-title-padding">
    <div class="row" itemscope itemtype="http://schema.org/Person">
      <header class="dl-index-profile-title col-md-12">
        <h1 class="dl-title-color">Profile</h1>
        <p class="dl-profile-sub" itemprop="jobTitle">{{ role }}</p>
        <hr />
      </header>
      <div class="col-md-4">
        <div class="dl-index-profile-text">
          <h3 class="dl-title-color">About me</h3>
          <p itemprop="description">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="col-md-4 dl-index-profile-image-padding">
        <img
          class="dl-index-profile-image"
          itemprop="image"
          :id="profileImage"
          :src="filePath"
          alt="profile image"
        />
      </div>

      <div class="col-md-4">
        <div class="dl-index-profile-text dl-index-profile-details">
          <h3 class="dl-title-color">Details</h3>
          <p>
            <strong>Name:</strong>
            <span itemprop="givenName">{{ firstName }}</span>
            <span itemprop="additionalName">{{ middleName }}</span>
            <span itemprop="familyName">{{ lastName }}</span>
            <br />
            <strong>Age:</strong> <span>{{ age }}</span>
            <br />
            <strong>Location:</strong>
            <span itemprop="homeLocation">{{ location }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    title: String,
    role: String,
    description: String,
    age: Number,
    firstName: String,
    middleName: String,
    lastName: String,
    location: String,
    profileImage: String,
  },
  data() {
    return {
      filePath: "",
    };
  },

  updated() {
    this.filePath = require(`@/assets/img/${this.profileImage}.jpg`);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dl-index-profile-title {
  justify-content: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: black;
}

.dl-index-profile-text {
  text-align: left;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.dl-profile-sub {
  text-align: center;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
}

.dl-index-profile-image {
  border-radius: 50%;
  justify-content: center;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: solid 4px var(--dl-color);
}

.dl-index-profile-image-padding {
  margin: 20px 0px;
}

@media (max-width: 580px) {
  .dl-index-profile-image {
    width: 60%;
  }
}

@media (min-width: 580px) {
  .dl-index-profile-image {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .dl-index-profile-image {
    width: 80%;
  }
}

@media (min-width: 992px) {
  .dl-index-profile-image {
    width: 60%;
  }
}

@media (min-width: 1200px) {
  .dl-index-profile-image {
    width: 60%;
  }
}
</style>
