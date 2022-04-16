<template>
  <div class="jumbotron">
    <h1 class="display-6 title">
      {{ $t("homepage.greeting") }}
    </h1>
    <h1 class="subtitle">{{ $t("homepage.about_me") }}</h1>
    <hr />
    <p>
      {{ $t("homepage.description") }}
    </p>
    <div>
      <a href="/Wee Chee Shen CV.pdf" download> Resume</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ isMobile: "common/getIsMobile" }),
    shouldSwap() {
      return this.isMobile && this.swap;
    },
  },
};
</script>

<style scoped lang="scss">
.jumbotron {
  width: 400px;
  height: 600px;
  margin-left: 3%;
  margin-top: 1%;
  h1.title {
    font-variant: bold;
    font-weight: 700;
    font-size: 65px;
    letter-spacing: 0.82px;
    margin-bottom: 5%;
      color: var(--color-primary-text);

  }
  hr{
      color: var(--color-line);
    
  }
  h1.subtitle {
    font-variant: bold;
    font-weight: 500;
    font-size: 45px;
    letter-spacing: 0.82px;
      color: var(--color-primary-text);

  }
  p {
    text-align: justify;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.21px;
      color: var(--color-primary-text);

  }
}
@media only screen and (max-width: 768px) {
  .jumbotron {
    width: 70vw;
    height: 60vh;
    margin-left: 3%;
    margin-top: 1%;
    h1.title {
      font-variant: bold;
      font-weight: 700;
      font-size: 10vw;
      letter-spacing: 0.82px;
      margin-bottom: 1%;
      margin-top: 4%;
      text-align: center;
    }
    h1.subtitle {
      font-variant: bold;
      font-weight: 500;
      font-size: 7vw;
      letter-spacing: 0.82px;
      text-align: center;
    }
    p {
      text-align: justify;
      font-size: 14px;
    }
    .lead {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
}
@media only screen and (max-width: 320px) {
  .jumbotron {
    p {
      text-align: justify;
      font-size: 3vw;
    }
  }
}
</style>