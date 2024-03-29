import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin, LayoutPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VGauge from "vgauge";

/* Import FA-icons */
import {
  faUserSecret,
  faBars,
  faMoon,
  faTemperatureHalf,
  faMemory,
  faPlugCircleBolt,
  faWaveSquare,
  faXmark,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

/* Add the icons globally */
library.add(
  faUserSecret,
  faBars,
  faMoon,
  faTemperatureHalf,
  faMemory,
  faPlugCircleBolt,
  faWaveSquare,
  faXmark,
  faSun
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
Vue.use(VGauge);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
