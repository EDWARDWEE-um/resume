export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Edward Wee',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', name: 'og:title', content: 'Edward Wee' },
      { hid: 'og:description', name: 'og:description', content: 'Edward Wee Software Engineer' },
      { hid: 'og:image', name: 'og:image', content: '/edward.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://cdn-icons.flaticon.com/png/512/3665/premium/3665930.png?token=exp=1647496830~hmac=071ae9eddb854df8cff12d2d2d630060' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/global.scss",
    "@/assets/css/main.css",
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/plugins.js", ssr: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],

  axios: {
    proxy: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-material-design-icons',
  ],
  i18n: {
    skipSettingLocaleOnNavigate: true,
    locales: [{
      code: "en_GB",
      file: "en_GB.json",
    }, {
      code: "zh_CN",
      file: "zh_CN.json",
    }, {
      code: "ms_MY",
      file: "ms_MY.json",
    },],
    langDir: "locales/",
    defaultLocale: 'en_GB',
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 600, 700]
      },
      Helvetica: true,
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },
  toast: {
    position: 'top-center',
  },
  fontawesome:{
    icons:{
      solid:true,
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: process.env.PORT
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },


  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    {
      path: '~/components/experience',
      extensions: ['vue'],
      prefix: 'ex',
    },
    {
      path: '~/components/project',
      extensions: ['vue'],
      prefix: 'pr',
    },
    {
      path: '~/components/button',
      extensions: ['vue'],
      prefix: 'bu',
    },
    {
      path: '~/components/contact/',
      extensions: ['vue'],
      prefix: 'cu',
    },
    {
      path: '~/components/skill/',
      extensions: ['vue'],
      prefix: 'sk',
    },
    {
      path: '~/components/home',
      extensions: ['vue'],
      prefix: 'ho',
    },

   
    {
      path: '~/components/common/',
      extensions: ['vue'],
      prefix: 'co',
    }
  ]
}