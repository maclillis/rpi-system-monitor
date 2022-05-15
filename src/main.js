import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin, LayoutPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import FA-icons */
import {
  faUserSecret,
  faBars,
  faMoon,
  faTemperatureHalf,
  faMemory,
  faPlugCircleBolt,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";

/* Add the icons globally */
library.add(
  faUserSecret,
  faBars,
  faMoon,
  faTemperatureHalf,
  faMemory,
  faPlugCircleBolt,
  faWaveSquare
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
