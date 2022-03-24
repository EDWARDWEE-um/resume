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
    font-size: 4vw;
    line-height: 67px;
    letter-spacing: 0.82px;
    text-align: center;
    .highlight {
      color: var(--bg-secondary);
    }
  }

  p {
    color: #8d8d8d;
    text-align: center;
    font-size: 1.5vw;
  }
  .line {
    width: 50%;
    margin: auto;
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