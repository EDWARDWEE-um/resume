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
      <a class="btn" href="./Wee Chee Shen CV.pdf" download> {{ $t("homepage.resume") }} </a>
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
  .btn {
    color:white;
    width: 120px;
    height: 40px;
    outline: none;
    border: none;
    display: block;
    cursor: pointer;
    font-weight: 500;
    margin-left: auto;
    margin-right: auto;
    border-radius: 70px;
    box-shadow: 0 13px 26px rgba(#000, 0.16), 0 2px 4px var(--color-line);
    background: linear-gradient(45deg, var(--bg-secondary) 0%,var(--resume-button-active) 100%);
  }
  h1.title {
    font-variant: bold;
    font-weight: 700;
    font-size: 65px;
    letter-spacing: 0.82px;
    margin-bottom: 5%;
    color: var(--color-primary-text);
  }
  hr {
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
    padding-bottom: 100px;

    margin-left: 3%;
    margin-top: 1%;
    h1.title {
      font-variant: bold;
      font-weight: 700;
      font-size: 35px;
      letter-spacing: 0.82px;
      margin-bottom: 1%;
      margin-top: 4%;
      text-align: center;
    }
    h1.subtitle {
      font-variant: bold;
      font-weight: 500;
      font-size: 20px;
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

</style>