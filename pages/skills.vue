<template>
  <div class="experience-page-container">
    <Transition name="top" appear>
      <CoTitle
        class="section"
        :title_part_1="this.$t('skills_page.title_1')"
        :title_part_2="this.$t('skills_page.title_2')"
        :subtitle="this.$t('skills_page.subtitle')"
      />
    </Transition>
    <Transition name="bottom" appear>
      <SkSkillsList />
    </Transition>
    <!-- ADD BOOBS HERE --> 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-enter-active,
.top-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.top-enter,
.top-leave-to {
  transform: translateY(-100%);
}
.bottom-enter-active,
.bottom-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.bottom-enter,
.bottom-leave-to {
  transform: translateY(100%);
}

div.experience-page-container {
 
  background: var(--bg);
 
}
</style>
