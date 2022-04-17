<template>
  <div class="card" @click="func">
    <img :src="icon" class="card-img-top transition" />
    <h5 class="card-title">{{ description }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    func: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 300px;
  height: 300px;
  border: none;
  background: var(--bg);
  cursor: pointer;

  .card-img-top {
    width: 40%;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
  }
  .card-img-top:hover {
    transform: translateY(-20px);
  }

  h5 {
    text-align: center;
    text-align: center;
    font-variant: bold;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.82px;
    margin-top: 6%;
    color: var(--color-primary-text);
  }
}
@media only screen and (max-width: 768px) {
  .card {
    width: 200px;
    height: 180px;
    padding-bottom: 50px;
    h5 {
      font-size: 20px;
    }
  }
}
</style>