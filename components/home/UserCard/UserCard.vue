<template>
  <div class="wrapper">
    <div class="top-icons">
      <i class="fas fa-long-arrow-alt-left"></i>
      <i class="fas fa-ellipsis-v"></i>
      <i class="far fa-heart"></i>
    </div>

    <div class="profile">
      <img src="@/assets/images/home/edward.png" class="thumbnail" />
      <div class="check"><i class="fas fa-check"></i></div>
      <h3 class="name">{{ $t("homepage.name") }}</h3>
      <p class="title">{{ $t("homepage.role") }}</p>
    </div>

    <div class="social-icons">
      <button class="btn" type="button" @click="github">
        <img class="icon" src="@/assets/icons/common/github.png" />
      </button>
      <button class="btn" type="button" @click="linkedin">
        <img class="icon" src="@/assets/icons/common/linkedin.png" />
      </button>
      <button class="btn" type="button" @click="whatsapp">
        <img class="icon" src="@/assets/icons/common/whatsapp.png" />
      </button>
      <button class="btn" type="button" @click="gmail">
        <img class="icon" src="@/assets/icons/common/gmail.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gmail() {
      window.open("mailto:edwardwee11@gmail.com");
    },
    whatsapp() {
      window.open("https://wa.me/60172272800");
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/edward-wee-29a814193");
    },
    github() {
      window.open("https://github.com/EDWARDWEE-um");
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 300px;
  height: 500px;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 2px 15px var(--color-secondary);
  background: var(--bg-secondary);

  .top-icons {
    i {
      color: #080911;
      &:nth-of-type(1) {
        float: left;
      }
      &:nth-of-type(2) {
        float: right;
      }
      &:nth-of-type(3) {
        float: right;
        padding-right: 0.8em;
      }
    }
  }
  .profile {
    margin-top: 2.2em;
    position: relative;

    &:after {
      width: 100%;
      height: 1px;
      content: " ";
      display: block;
      margin-top: 1.3em;
      background: #e9eff6;
    }

    .check {
      position: absolute;
      right: 5em;
      bottom: 12.7em;
    }
    .thumbnail {
      width: 200px;
      height: 200px;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5em;
      border-radius: 100%;
      object-fit: cover;
    }
    .name {
      color: var(--color-primary-text);
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }

    .title {
      color: var(--color-secondary-text);
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      padding-top: 0.5em;
      padding-bottom: 0.7em;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .description {
      color: #080911;
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      margin-bottom: 1.3em;
    }

    .btn {
      color: #fff;
      width: 130px;
      height: 42px;
      outline: none;
      border: none;
      display: block;
      cursor: pointer;
      font-weight: 300;
      margin-left: auto;
      margin-right: auto;
      border-radius: 70px;
      box-shadow: 0 13px 26px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.16);
    }
  }

  .social-icons {
    display: flex;
    margin-top: 1.2em;
    justify-content: space-between;

    .icon {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 40px;
      height: 40px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    min-width: 250px;
    min-height: 400px;
    width: 60%;
    height: 50%;
    .social-icons {
      justify-content: space-between;
      margin-top: 5px;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
    .profile {
      margin-top: 10px;
      position: relative;
      .thumbnail {
        width: 150px;
        height: 150px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1.5em;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>