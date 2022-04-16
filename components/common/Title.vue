<template>
  <div class="about-PIF">
    <div class="text-container">
      <h1 class="title">{{title_part_1}}<span class="highlight">{{title_part_2}}</span></h1>
      <p class="desc">{{subtitle}}</p>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title_part_1: {
      type: String,
      default: "",
    },
    title_part_2: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
div.about-PIF {
  padding-top: 10%;
  margin: 0 auto;
  // background: transparent linear-gradient(180deg, #fdedd8dd 0%, #ffffff9a 100%)
  //   0% 0% no-repeat padding-box;

  .title {
    margin-top: 2%;
    font-variant: bold;
    font-weight: 700;
    font-size: 65px;
    line-height: 67px;
    letter-spacing: 0.82px;
    text-align: center;
    color: var(--color-primary-text);
    .highlight {
      color: var(--bg-secondary-text);
    }
  }

  p {
    color: var(--color-subtitle-text);
    text-align: center;
    font-size: 30px;
  }
  .line {
    width: 50%;
    margin: auto;
    color:var(--color-line);
  }
  .text-container {
    padding: 0 10%;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 20%;

    .title {
      font-size: 8vw;
      margin-top: 5%;
    }
    p{
      font-size: 3vw;
    }

    .left {
      text-align: center;
    }
  }
}
</style>