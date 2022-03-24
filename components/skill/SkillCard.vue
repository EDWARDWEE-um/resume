<template>
  <div class="card">
    <img :src="icon" class="card-img-top" />
    <h5 class="card-title">{{ name }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 25vw;
  height: 30vh;
  border: none;
  background: var(--bg);
  .card-img-top {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  h5 {
    text-align: center;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    width: 60vw;
    height: 30vh;
  }
}
</style>