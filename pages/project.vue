<template>
  <div class="experience-page-container">
    <Transition name="top" appear>
      <CoTitle
        class="section"
        :title_part_1="this.$t('projects_page.title_1')"
        :title_part_2="this.$t('projects_page.title_2')"
        :subtitle="this.$t('projects_page.subtitle')"
      />
    </Transition>
    <PrProject />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>