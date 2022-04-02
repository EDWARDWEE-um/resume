<template>
  <div class="text-container">
    <h2>{{ date }}</h2>
    <h1>{{ experience }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: "",
    },
    experience: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.text-container {
  margin-top: 6%;
  h1 {
    font-variant: bold;
    font-weight: 700;
    font-size: 1.4vw;
    letter-spacing: 0.82px;
    margin-top: 2%;
    color: var(--color-primary-text);

  }
  h2 {
    font-variant: bold;
    font-weight: 600;
    font-size: 1.4vw;
    letter-spacing: 0.82px;
    margin-top: 2%;
    color: var(--color-primary-text);

  }
  p {
    font-size: 1vw;
    line-height: 32px;
    letter-spacing: 0.21px;
    margin-top: 2%;
    color: var(--color-primary-text);

  }
}
@media only screen and (max-width: 768px) {
  .text-container {
    margin-top: 5%;
    h1 {
      font-size: 4vw;
      margin-top: 0;
    }
    h2 {
      font-size: 3vw;
      margin-top: 0;
    }
    p {
      font-size: 2.5vw;
      margin-top: 0;
    }
  }
}
</style>