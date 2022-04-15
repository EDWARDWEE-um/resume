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
  width: 250px;
  height: 300px;
  border: none;
  background: var(--bg);
  .card-img-top {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  h5 {
    text-align: center;
    color:var(--color-primary-text);
  }
}
</style>