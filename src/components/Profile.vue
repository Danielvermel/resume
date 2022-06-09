<template class="dl-index-profile">
  <div class="title-padding">
    <div class="row" itemscope itemtype="http://schema.org/Person">
      <header class="title col-md-12">
        <h1 class="dl-title-color">Profile</h1>
        <p class="sub" itemprop="jobTitle">{{ role }}</p>
        <hr>
      </header>
      <div class="col-md-4">
        <div class="text">
          <h3 class="dl-title-color">About me</h3>
          <p itemprop="description">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="col-md-4 image-container">
        <img
          class="image"
          itemprop="image"
          :id="profileImage"
          :src="filePath"
          alt="profile image"
        />
      </div>

      <div class="col-md-4">
        <div class="text details">
          <h3 class="dl-title-color">Details</h3>
          <p>
            <strong>Name:</strong>
            <br>
            <span itemprop="givenName">{{ firstName }}</span>
            <span itemprop="familyName">{{ lastName }}</span>
            <br>
            <strong>Age:</strong> 
            <br>
            <span>{{ age }}</span>
            <br>
            <strong>Location:</strong>
            <br>
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

<style scoped lang="scss">
.dl-index-profile {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", 
    "Helvetica Neue", sans-serif;
  
  .title {
    justify-content: center;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    color: black;
  }
  
  .text {
    text-align: left;
    font-size: 20px;
  }

  .sub {
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

  .image-container {
    margin: 20px 0px;
    .image {
      border-radius: 50%;
      justify-content: center;
      text-align: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: solid 3px var(--dl-color);
      transform: scale(1.2);
    }
  }

  @media (max-width: 580px) {
    .image {
      width: 60%;
    }
  }

  @media (min-width: 580px) {
    .image {
      width: 50%;
    }
  }

  @media (min-width: 768px) {
    .image {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .image {
      width: 60%;
    }
  }

  @media (min-width: 1200px) {
    .image {
      width: 60%;
    }
  }
}

</style>
