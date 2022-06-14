<template class="dl-index-profile">
  <div class="title-padding">
    <div class="row" itemscope itemtype="http://schema.org/Person">
      <header class="title col-sm-12">
        <h1 class="dl-title-color">Profile</h1>
        <p class="sub" itemprop="jobTitle">{{ role }}</p>
        <hr>
      </header>
      <div class="dl-profile-container mt-4">
        <div class="col-md-4 col-sm-12">
          <div class="text">
            <h3 class="dl-title-color">About me</h3>
            <p itemprop="description">
              {{ description }}
            </p>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 image-container">
          <img
            class="image"
            itemprop="image"
            :id="profileImage"
            :src="filePath"
            alt="profile image"
          />
        </div>

        <div class="col-md-4 col-sm-12">
          <div class="text details">
            <h3 class="dl-title-color">Details</h3>
            <p>
              <strong>Name:</strong>
              <br>
              <span itemprop="givenName">{{ firstName }}</span>
              <span itemprop="familyName" class="ml-1">{{ lastName }}</span>
              <br>
              <strong>Age:</strong> 
              <br>
              <span>{{ getAge(age) }}</span>
              <br>
              <strong>Experience:</strong> 
              <br>
              <span>{{ getExperience()}}</span>
              <br>
              <strong>Location:</strong>
              <br>
              <span itemprop="homeLocation">{{ location }}</span>
            </p>
          </div>
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
    age: {
      default: '19970509',
      type: String
    },
    firstName: String,
    middleName: String,
    lastName: String,
    location: String,
    profileImage: String,
  },
  data() {
    return {
      filePath: "",
      experience: 0
    };
  },  
  updated() {
    this.filePath = require(`@/assets/img/${this.profileImage}.jpg`);
  },
  methods: {
    getAge(dob) {
      let year = Number(dob.substr(0, 4));
      let month = Number(dob.substr(4, 2)) - 1;
      let day = Number(dob.substr(6, 2));
      let today = new Date();
      let age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }
      return age;
    },
    
    getExperience() {
      
      let nowDate =  Date.now();
      
      let firstJob = this.dateDiffInYears('20170801','20171101') // Paralab
      let secondJob = this.dateDiffInYears('20180301','20180701') // IPBRICK
      let thirdJob = this.dateDiffInYears('20180701','20190901') // Altran
      let fourthJob = this.dateDiffInYears('20201001','20210901') // Envolve tech
      let fifthJob = this.dateDiffInYears('20211001','20220101') // Nexus Point
      
      let timeDiff = 1000 * 60 * 60 * 24 * 7 * 4.3;
      let lastJobDate = new Date(2022,1,1).getTime();
      let sixthJob = Math.floor((nowDate - lastJobDate) / timeDiff); // BR-DGE
      
      let monthsOfExperience = firstJob + secondJob + thirdJob + fourthJob + fifthJob + sixthJob;
      let yearsOfExperience = Math.trunc(monthsOfExperience / 12);
      let months = Math.round(((monthsOfExperience % 12) * 12 ) / 10);
      return  `${yearsOfExperience} years and ${months} months`;
      
    },
    
    dateDiffInYears(oldDate, newDate) {
      let oldYearDate = Number(oldDate.substr(0, 4));
      let oldMonthDate = Number(oldDate.substr(4, 2)) - 1;
      let oldDayDate = Number(oldDate.substr(6, 2));
      let d1 = new Date(oldYearDate,oldMonthDate,oldDayDate).getTime();
      
      let newYearDate = Number(newDate.substr(0, 4));
      let newMonthDate = Number(newDate.substr(4, 2)) - 1;
      let newDayDate = Number(newDate.substr(6, 2));
      let d2 = new Date(newYearDate,newMonthDate,newDayDate).getTime();
      
      let timeDiff = 1000 * 60 * 60 * 24 * 7 * 4.3;
      let secDiff = Math.floor((d2- d1) / timeDiff);
      
      return secDiff
    }
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

  .dl-profile-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .text {
      text-align: left;
      font-size: 20px;
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
        border: solid 3px let(--dl-color);
        transform: scale(1.2);
      }
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
