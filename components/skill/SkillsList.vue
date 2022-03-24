<template>
  <div class="skill-container">
    <SkSkillCard :icon="require('@/assets/icons/skill/css.png')" :name="this.$t('skills_page.skill_1')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/django.png')" :name="this.$t('skills_page.skill_2')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/docker.png')" :name="this.$t('skills_page.skill_3')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/flask.png')" :name="this.$t('skills_page.skill_4')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/flutter.png')" :name="this.$t('skills_page.skill_5')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/git.png')" :name="this.$t('skills_page.skill_6')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/heroku.png')" :name="this.$t('skills_page.skill_7')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/html.png')" :name="this.$t('skills_page.skill_8')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/i18n.png')" :name="this.$t('skills_page.skill_9')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/netlify.png')" :name="this.$t('skills_page.skill_10')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/nuxt.png')" :name="this.$t('skills_page.skill_11')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/postgres.png')" :name="this.$t('skills_page.skill_12')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/postman.png')" :name="this.$t('skills_page.skill_13')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/python.png')" :name="this.$t('skills_page.skill_14')"/>
    <SkSkillCard :icon="require('@/assets/icons/skill/vue.png')" :name="this.$t('skills_page.skill_15')"/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.skill-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 1%;
}
@media only screen and (max-width: 768px) {
  .skill-container {
    flex-direction: column;
    justify-content:flex-start;
    align-content: center;

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