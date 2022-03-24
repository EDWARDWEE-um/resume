<template>
  <div class="footer-container">
    <div class="footer-1">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/icons/common/edward.png" />
      </NuxtLink>
      <div class="footer-contacts">
        <div class="buttons-container">
          <button class="btn" type="button" @click="github">
            <img class="icons" src="@/assets/icons/common/github.png" />
          </button>
          <button class="btn" type="button" @click="linkedin">
            <img class="icons" src="@/assets/icons/common/linkedin.png" />
          </button>
          <button class="btn" type="button" @click="whatsapp">
            <img class="icons" src="@/assets/icons/common/whatsapp.png" />
          </button>
          <button class="btn" type="button" @click="gmail">
            <img class="icons" src="@/assets/icons/common/gmail.png" />
          </button>
        </div>
      </div>
    </div>
    <p>{{ $t("footer.credit") }}</p>
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

<style lang="scss" scoped>
p {
  text-align: center;
  letter-spacing: 0.82px;
  margin-top: 0%;
}
.footer-container {
  background: red;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .footer-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo {
      width: 12vw;
      height: auto;
      margin-top: 40%;
      margin-left: 20%;
    }
    .footer-contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 3%;
      margin-top: 10%;
      .buttons-container {
        flex-direction: row;
        .icons {
          width: 2vw;
          height: 2vw;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
  p {
    text-align: center;
    letter-spacing: 0.82px;
    margin-top: 0%;
    font-size: 3vw;
  }
  .footer-container {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    .footer-1 {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 0%;
      .logo {
        width: 40vw;
        margin-left: 10%;
        margin-top: 10%;
      }
      .footer-contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 10%;
        margin-left: 8%;
        .buttons-container {
          flex-direction: row;
          .icons {
            width: 8vw;
            height: auto;
          }
        }
      }
    }
  }
}
</style>