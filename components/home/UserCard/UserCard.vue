<template>
  <div class="card">
    <div class="upper-card">
      <img class="avatar" src="@/assets/images/home/edward.png" />
      <h1>
        {{ $t("homepage.name") }}
      </h1>
      <h3>
        {{ $t("homepage.role") }}
      </h3>
    </div>
    <div class="lower-card">
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
.card {
  width: 30vw;
  height: 65vh;
  min-width: 50%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 20px 0 grey;
  border-radius: 25px;
  border: none;
  background: var(--bg);
  .upper-card {
    flex-grow: 5;
    background-color: var(--bg-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    .avatar {
      width: 20vw;
      height: 20vw;
      border-radius: 50%;
      object-fit: cover;
      margin-top: 5%;
    }
    h1 {
      text-align: center;
      font-variant: bold;
      font-weight: 700;
      font-size: 3vw;
      letter-spacing: 0.82px;
      margin-top: 5%;
      color: var(--color-primary-text);
    }
    h3 {
      text-align: center;
      font-size: 2vw;
      letter-spacing: 0.82px;
      color: var(--color-primary-text);
    }
  }
  .lower-card {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .icons {
      width: 3vw;
      height: 3vw;
    }
  }
}
@media only screen and (max-width: 1024px) and (orientation: portrait) {
  .card {
    height: 35vh;
  }
}
@media only screen and (max-width: 800px) {
  .card {
    height: 50vh;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    width: 70vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 20px 0 grey;
    border-radius: 25px;
    border: none;
    margin-top: 10%;
    .upper-card {
      flex-grow: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      .avatar {
        margin-top: 5%;
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
      }
      h1 {
        font-size: 9vw;
      }
      h3 {
        font-size: 6vw;
      }
    }
    .lower-card {
      flex-grow: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .icons {
        width: 6vw;
        height: 6vw;
      }
    }
  }
  @media only screen and (orientation: landscape) {
    .card {
      width: 60vw;
      height: 75vw;
      margin-top: 50%;
      .upper-card {
        flex-grow: 5;
        .avatar {
          margin-top: 5%;
          width: 30vw;
          height: 30vw;
        }
        h1 {
          font-size: 6vw;
        }
        h3 {
          font-size: 4vw;
        }
      }
      .lower-card {
        flex-grow: 3;
      }
    }
  }
}
@media only screen and (max-width: 320px) and (orientation: landscape) {
  .card {
    height: 40vh;
    margin-top: 0%;
  }
}
</style>