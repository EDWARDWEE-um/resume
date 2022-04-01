<template>
  <div class="drawer-container">
    <b-button
      v-b-toggle.sidebar-right
      class="hamburger-icon-button shadow-none"
    >
      <img
        class="hamburger-icon"
        src="~/assets/icons/common/menu.png"
      />
    </b-button>
    <b-sidebar id="sidebar-right" right shadow no-header width="100%">
      
      <template #default="{ hide }">
        <div class="nav-background">
          <nav class="mb-3">
            <b-nav id="drawer-nav" vertical>
              <div class="sidebar-header">
                <img
                  class="sidebar-icon"
                  src="~/assets/icons/common/edward.png"
                  @click="$router.push('/')"
                />

                <b-nav-item active @click="hide">
                  <img
                    class="sidebar-close-icon"
                    src="~/assets/icons/common/close.png"
                /></b-nav-item>
              </div>
              <div
                class="button"
                v-for="(b, i) in buttons"
                :key="i"
                @click="$router.push({ path: b.route })"
              >
                <img
                  class="pageIcon"
                  :class="{ pageIconActive: b.route == $route.path }"
                  src="~/assets/icons/common/pointer-side.png"
                />
                <h6
                  class="pageButton"
                  :class="{ pageButtonActive: b.route == $route.path }"
                >
                  {{ $t(b.title) }}
                </h6>
              </div>
            </b-nav>
          </nav>
          <div class="language-container">
            <div class="language-button">
              <b-button
                v-b-modal.modal-custom
                variant="outline"
                id="language-modal"
              >
                <div class="dropdown-row-contents">
                  <img
                    class="flagIcon"
                    :src="
                      require('~/assets/icons/common/' + getCurrentLangIcon)
                    "
                  />
                  <span class="dropdown-title-custom">
                    {{ $t("language") }}
                  </span>
                </div>
              </b-button>

              <b-modal
                id="modal-custom"
                centered
                hide-header-close
                hide-footer
                hide-header
              >
                <b-button
                  v-for="(lang, i) in languages"
                  :key="i"
                  variant="outline"
                  @click="changeLocale(lang.locale)"
                  :id="
                    lang.locale == currentLocale
                      ? 'button-item-active'
                      : 'button-item'
                  "
                >
                  <img
                    class="icons"
                    :src="require('~/assets/icons/common/' + lang.icon)"
                  />
                  <span class="button-text"> {{ $t(lang.language) }}</span>
                </b-button>
              </b-modal>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: [],
    },
    languages: {
      type: Array,
      default: [],
    },
    getCurrentLangIcon: {
      type: String,
      default: "",
    },
    changeLocale: {
      type: Function,
      default: "",
    },
    currentLocale: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
div.drawer-container {
  max-width: 100vw;
  overflow: hidden;
}

.hamburger-icon-button {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: transparent !important;
  justify-content: center;
  img.hamburger-icon {
    margin-top: 0px;
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
}

.nav-background {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background-image: linear-gradient(var(--bg)15%, var(--bg-secondary));

  .sidebar-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin-top: 8%;
    margin-bottom: 10%;

    .sidebar-icon {
      height: 100px;
      width: 150px;
      margin-left: 20px;
    }

    .sidebar-close-icon {
      height: 50px;
      width: 50px;
    }
  }
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 10%;
  margin-left: 8%;
  h6.pageButton {
    color: gray;
    cursor: pointer;
    font-size: 18px;
    font-weight: 550;
  }

  h6.pageButtonActive {
    color: #000;
    cursor: default;
  }

  img.pageIcon {
    margin-right: 20px;
    height: 20px;
    width: 20px;
    opacity: 0;
  }

  img.pageIconActive {
    opacity: 1;
  }
}

div.language-container {
  display: flex;
  flex: 1;
  justify-content: center;

  .language-button {
    display: flex;
    align-self: flex-end;
    border-radius: 20px;
    background-color: #ded0bf;
    padding: 8px;
    margin-bottom: 20px;

    div.dropdown-row-contents {
      display: flex;
      flex-direction: row;
      width: 30vh;

      .button-text {
        font-size: 20px !important;
      }

      img.flagIcon {
        height: 30px;
        width: 30px;
        margin-right: 20px;
        margin-left: 10px;
      }

      .dropdown-title-custom {
        font-weight: 600 !important;
        font-size: 20px !important;
        line-height: 30px !important;
        letter-spacing: 0.21px !important;
      }
    }
  }
}

.modal-content {
  width: 30vh;
}
</style>

<style lang="scss">
#language-modal:focus {
  outline: none !important;
  box-shadow: none;
}

#modal-custom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .modal-content {
    background-color: #ffffffc7;
    width: 70%;
    margin: auto;
    border-radius: 15px;
    margin-bottom: 80%;
    padding: 0;
    .modal-body {
      padding-left: 0;
      padding-right: 0;
      #button-item {
        display: flex;
        outline: none !important;
        box-shadow: none;
        width: 100%;
        justify-content: flex-start;

        .icons {
          width: 10%;
          margin-right: 10%;
          margin-left: 10%;
        }
      }
      #button-item-active {
        background-color: #ded0bf !important;
        display: flex;
        outline: none !important;
        box-shadow: none;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        .icons {
          width: 10%;
          margin-right: 10%;
          margin-left: 10%;
        }
      }
    }
  }
}
</style>