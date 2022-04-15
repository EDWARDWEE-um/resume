<template>
  <div class="layout-container">
    <NavBar />
    <Nuxt />
    <Footer style=""/>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setWindowDimens: "common/setWindowDimens",
      setScrollTop: "common/setScrollTop",
    }),
    handleResize() {
      this.setWindowDimens(window);
    },
    handleScroll() {
      this.setScrollTop(document.documentElement.scrollTop);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);

    this.handleResize();

    const locale = localStorage.getItem("locale") || "en_GB";
    const preference = localStorage.getItem("theme") || "system";
    this.$i18n.locale = locale;
    this.$colorMode.preference = preference;
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  position: relative;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>