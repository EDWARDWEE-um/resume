<template>
  <client-only>
    <nav class="navbar" :class="{ shrink: scrollTop >= 200 }" id="nav">
      <div class="app-icon-container">
        <div v-if="isMobile" class="theme-container">
         <img
              v-if="$colorMode.value == 'light'"
              class="themeIcon"
              :src="require('~/assets/icons/common/light-mode.png')"
              @click="$colorMode.preference = 'dark'"
            />
            <img
              v-if="$colorMode.value == 'dark'"
              class="themeIcon"
              :src="require('~/assets/icons/common/dark-mode.png')"
              @click="$colorMode.preference = 'light'"
            />
        </div>
      </div>
      
      <div v-if="!isMobile">
        <div class="buttons-container">
          <div class="button ml-4" v-for="(b, i) in buttons" :key="i">
            <div @click="$router.push({ path: b.route })">
              <h6
                class="pageButton"
                :class="{ pageButtonActive: b.route == currentRoute }"
              >
                {{ $t(b.title) }}
              </h6>
            </div>

            <img
              class="pageIcon"
              :class="{ pageIconActive: b.route == currentRoute }"
              src="~/assets/icons/common/pointer.png"
            />
          </div>

          <div class="vertical-line"></div>

          <div style="display: flex; flex-direction: column">
            <b-dropdown
              id="language-dropdown"
              variant="outline"
              class="mb-2 ml-2"
              toggle-class="test"
              no-caret
            >
              <template #button-content>
                <img
                  class="flagIcon"
                  :src="require('~/assets/icons/common/' + getCurrentLangIcon)"
                />
                <span class="dropdown-title-custom">
                  {{ $t("language") }}
                </span>
              </template>

              <b-dropdown-item
                id="language-dropdown-item"
                v-for="(lang, i) in languages"
                :key="i"
                @click="changeLocale(lang.locale)"
                :active="lang.locale == currentLocale"
              >
                <div class="dropdown-item-custom-div">
                  <span class="dropdown-item-text">
                    <img
                      class="flagIcon"
                      :src="require('~/assets/icons/common/' + lang.icon)"
                    />{{ $t(lang.language) }}</span
                  >
                </div>
              </b-dropdown-item>
            </b-dropdown>
            <img class="pageIcon" src="~/assets/icons/common/pointer.png" />
          </div>
          <div style="margin-left: 20px; margin-bottom: 25px">
            <img
              v-if="$colorMode.value == 'light'"
              class="themeIcon"
              :src="require('~/assets/icons/common/light-mode.png')"
              @click="$colorMode.preference = 'dark'"
            />
            <img
              v-if="$colorMode.value == 'dark'"
              class="themeIcon"
              :src="require('~/assets/icons/common/dark-mode.png')"
              @click="$colorMode.preference = 'light'"
            />
          </div>
        </div>
      </div>
      <Drawer
        v-else
        :buttons="buttons"
        :languages="languages"
        :getCurrentLangIcon="getCurrentLangIcon"
        :currentLocale="currentLocale"
        :changeLocale="changeLocale"
      />
    </nav>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";

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
      languages: [
        {
          language: "english",
          locale: "en_GB",
          icon: "usa.png",
        },
        {
          language: "chinese",
          locale: "zh_CN",
          icon: "china.png",
        },
        {
          language: "malay",
          locale: "ms_MY",
          icon: "malaysia.png",
        },
      ],
      theme: [
        {
          value: "light",
          icon: "light-mode.png",
        },
        {
          value: "dark",
          icon: "dark-mode.png",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      scrollTop: "common/getScrollTop",
      isMobile: "common/getIsMobile",
    }),
    currentRoute() {
      return this.$route.path;
    },
    currentLocale() {
      return this.$i18n.locale;
    },

    getCurrentLangIcon() {
      switch (this.$i18n.locale) {
        case "en_GB":
          return "usa.png";
        case "zh_CN":
          return "china.png";
        case "ms_MY":
          return "malaysia.png";
      }
    },
    getIcon() {
      let g = this.$colorMode.value;
      switch (g) {
        case "light":
          return "~/assets/icons/common/light-mode.png";
        case "dark":
          return "~/assets/icons/common/dark-mode.png";
      }
    },
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    },
    changeTheme(value) {
      this.$colorMode.preference = value;
      localStorage.setItem("theme", value);
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  width: 100%;
  padding: 3% 10%;
  z-index: 1;
  transition: all 0.5s;
  background: transparent;

  div.app-icon-container {
    display: flex;
    flex: 1;

    .theme-container {
      margin-left: 10%;
    }
  }

  div.buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    div.button {
      display: flex;
      flex-direction: column;
      align-items: center;

      .pageButton {
        color: gray;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.21px;
      }

      .pageButtonActive {
        color: #000;
        cursor: default;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  img.app-icon {
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 0%;
  }
}

nav.shrink {
  background: rgba(255, 255, 255, 0.8);
}

img.pageIcon {
  height: 20px;
  width: 20px;
  opacity: 0;
}

img.pageIconActive {
  opacity: 1;
}

img.flagIcon {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
img.themeIcon {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  cursor: pointer;
}
.dropdown-item-text {
  font-size: 14px !important;
}

.dropdown-title-custom {
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: 0.21px !important;
}
div.vertical-line {
  border-left: 1px solid #dbc4b2;
  height: 40px;
  margin-bottom: 15px;
  margin-left: 30px;
}
</style>

<style lang="scss">
#language-dropdown {
  .btn:focus,
  .btn:active {
    outline: none !important;
    box-shadow: none;
  }

  .dropdown-menu.show {
    border-radius: 15px;
    min-width: 60px;
  }

  .dropdown-item.active {
    background-color: var(--bg-secondary) !important;
    color: #000;
  }
}
</style>
