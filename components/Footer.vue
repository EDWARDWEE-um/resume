<template>
  <div class="footer-container">
    <div class="footer-1">
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
    <div class="footer-1">
      <div class="button" v-for="(b, i) in buttons" :key="i">
        <div @click="$router.push({ path: b.route })">
          <h6
            class="pageButton"
            :class="{ pageButtonActive: b.route == currentRoute }"
          >
            {{ $t(b.title) }}
          </h6>
        </div>
      </div>
    </div>
    <p>{{ $t("footer.credit") }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: "home",
          route: "/",
        },
        {
          title: "Experience",
          route: "/experience",
        },
        {
          title: "Skills",
          route: "/skills",
        },
        {
          title: "Projects",
          route: "/project",
        },
        {
          title: "Contact",
          route: "/contact",
        },
      ],
    };
  },
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
  margin-top: 1%;
  color: var(--color-primary-text);
}

.footer-container {
  background: var(--bg-footer);
  max-width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .footer-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .logo {
      width: 40px;
      height: auto;
    }
    .footer-contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .buttons-container {
        margin-top: 10%;
        margin-bottom: 5%;
        flex-direction: row;
        .icons {
          width: 3vw;
          height: auto;
        }
      }
    }
    .button {
      .pageButton {
        color: var(--color-primary-text);
        cursor: pointer;
        font-weight: 600;
        font-size: 1vw;
        line-height: 18px;
        letter-spacing: 0.21px;
        margin-left: 25px;
        margin-right: 25px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  p {
    text-align: center;
    letter-spacing: 0.82px;
    font-size: 2vw;
  }
  .footer-container {
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .footer-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      .footer-contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .buttons-container {
          margin-top: 10%;
          margin-bottom: 5%;
          flex-direction: row;
          .icons {
            width: 5vw;
            height: auto;
          }
        }
      }
      .button {
        .pageButton {
          cursor: pointer;
          font-weight: 600;
          font-size: 2vw;
          margin: 0;
        }
      }
    }
  }
}
</style>