<template>
  <div class="experience-container">
    <div
      class="education-container"
    >
      <h1>{{ $t("experience_page.education") }}</h1>
      <ExExperienceText
        :date="this.$t('experience_page.education_3.date')"
        :experience="this.$t('experience_page.education_3.experience')"
        :description="this.$t('experience_page.education_3.description')"
      />
      <ExExperienceText
        :date="this.$t('experience_page.education_2.date')"
        :experience="this.$t('experience_page.education_2.experience')"
        :description="this.$t('experience_page.education_2.description')"
      />
      <ExExperienceText
        :date="this.$t('experience_page.education_1.date')"
        :experience="this.$t('experience_page.education_1.experience')"
        :description="this.$t('experience_page.education_1.description')"
      />
    </div>
    <div class="vertical-line"></div>
    <hr />
    <div
      class="professional-container"
    >
      <h1>{{ $t("experience_page.professional") }}</h1>
      <ExExperienceText
        :date="this.$t('experience_page.professional_3.date')"
        :experience="this.$t('experience_page.professional_3.experience')"
        :description="this.$t('experience_page.professional_3.description')"
      />
      <ExExperienceText
        :date="this.$t('experience_page.professional_2.date')"
        :experience="this.$t('experience_page.professional_2.experience')"
        :description="this.$t('experience_page.professional_2.description')"
      />
      <ExExperienceText
      :date="this.$t('experience_page.professional_1.date')"
        :experience="this.$t('experience_page.professional_1.experience')"
        :description="this.$t('experience_page.professional_1.description')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
  font-variant: bold;
  font-weight: 700;
  font-size: 3vw;
  letter-spacing: 0.82px;
}
.experience-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin-top: 5%;
  .education-container {
    text-align: right;
    width: 40vw;
    margin-right: 1%;
  }
  .professional-container {
    text-align: left;
    width: 40vw;
    margin-left: 1%;
  }
  .vertical-line {
    height: 70vh;
    border-left: 2px solid grey;
  }
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 7vw;
  }
  .experience-container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    .education-container {
      text-align: center;
      width: 90%;
    }
    .professional-container {
      text-align: center;
      width: 90%;
    }
    .vertical-line {
      height: 1vh;
      width: 80vw;
      border-left: 0px;
      border-top: 2px solid grey;
    }
  }
}
</style>