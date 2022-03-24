import Vue from "vue";
import AOS from "aos";
import { BootstrapVue } from 'bootstrap-vue'
import * as VeeValidate from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material-design-icons/styles.css'
import {fas} from '@fortawesome/free-solid-svg-icons'

Vue.use(BootstrapVue);
Vue.use(fas)
Vue.use(AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  }));
Vue.use(MenuIcon);
Vue.use(VeeValidate);

Vue.component("ValidationProvider", VeeValidate.ValidationProvider);
Vue.component("ValidationObserver", VeeValidate.ValidationObserver);

VeeValidate.extend("email", email)
VeeValidate.extend("required", {
    ...required,
    message: field => `${$nuxt.$t("contact.field_required_1")} ${field.charAt(0).toUpperCase() +field.substr(1).toLowerCase()} ${$nuxt.$t("contact.field_required_2")}`
});