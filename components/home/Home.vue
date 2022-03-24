<template>
  <div class="home1">
    <div card="home-top">
      <div v-if="!isMobile">
        <img
          class="app-icon"
          src="~/assets/icons/common/edward.png"
          @click="$router.push('/')"
        />
      </div>
    </div>
    <div class="home-card-background">
      <div class="home-card">
        <Transition name="right" appear>
          <HoUserCard />
        </Transition>
        <Transition name="left" appear>
          <HoUserJumbotron />
        </Transition>
      </div>
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
.left-enter-active,
.left-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.left-enter,
.left-leave-to {
  transform: translateX(100%);
}
.right-enter-active,
.right-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.right-enter,
.right-leave-to {
  transform: translateX(-100%);
}
.app-icon {
  width: 10vw;
  height: auto;
  margin:1%;
}
.home1 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .home-top {
    flex-grow: 1;
    background: white;
    margin-top: 5%;
  }
  .home-card-background {
    display: flex;
    flex-grow: 9;
    justify-content: center;
    background: linear-gradient(to left, var(--bg) 60%, var(--bg-secondary) 0%);
    height: 80vh;
    .home-card {
      margin-top: 4%;
      display: flex;
      justify-content: center;
    }
    .title {
      font-variant: bold;
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 10%;
      .highlight {
        color: #e69a5d;
        font-size: 55px;
      }
    }

    .desc {
      color: #8d8d8d;
      margin-bottom: 20%;
    }
    .text-container {
      padding: 0 10%;
    }
  }
}

@media only screen and (max-width: 800px) {
  .home1 {

    .home-card-background {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: linear-gradient(
        to top,
        var(--bg) 65%,
        var(--bg-secondary) 0%
      );
      height: 140vh;
      .home-card {
        margin-top: 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .title {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.82px;
    .highlight {
      color: #e69a5d;
      font-size: 30px;
    }
    margin-top: 10%;
  }

  .desc {
    color: #8d8d8d;
    font-size: 14px;
    margin-bottom: 10%;
  }

  .app-stores-container {
    margin-bottom: 10%;
  }
}
</style>