<template>
  <div class="contact-container">
    <div class="contact-container-two">
      <CuContactCard
        :icon="require('@/assets/icons/common/gmail.png')"
        :description="this.$t('contact_page.contact_1_description')"
        :func="email"
      />
      <CuContactCard
        :icon="require('@/assets/icons/common/whatsapp.png')"
        :description="this.$t('contact_page.contact_2_description')"
        :func="whatsapp"
      />
      <CuContactCard
        :icon="require('@/assets/icons/common/linkedin.png')"
        :description="this.$t('contact_page.contact_3_description')"
        :func="linkedin"
      />
      <CuContactCard
        :icon="require('@/assets/icons/common/github.png')"
        :description="this.$t('contact_page.contact_4_description')"
        :func="github"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    email() {
      window.open("mailto:edwardwee11@gmail.com");
    },
    whatsapp() {
      window.open("https://wa.me/60172272800");
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/edward-wee-29a814193");
    },
    github() {
      window.open("https://github.com/EDWARDWEE-um");
    },
  },
};
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 2%;
  min-height: 52vh;
  .contact-container-two {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    width: 1200px;
  }
}
@media only screen and (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    min-height: 100vh;
    .contact-container-two {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: auto;
    }
    .education-container {
      text-align: center;
      width: 40vw;
      margin-right: 1%;
    }
    .professional-container {
      text-align: center;
      width: 40vw;
      margin-left: 1%;
    }
    .vertical-line {
      height: 1vh;
      width: 40vw;
      border-left: 0px;
      border-top: 2px solid grey;
    }
  }
}
</style>