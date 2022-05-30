import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RetropieView from "../views/RetropieView.vue";
import DashboardView from "../views/DashboardView.vue";
import DeviceNotFound from "../views/DeviceNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/glastonbury",
    name: "glastonbury",
    props: true,
    component: DashboardView,
  },
  {
    path: "/roskilde",
    name: "roskilde",
    props: true,
    component: DashboardView,
  },
  {
    path: "/woodstock",
    name: "woodstock",
    props: true,
    component: DashboardView,
  },
  {
    path: "/retropie",
    name: "retropie",
    props: true,
    component: RetropieView,
  },
  {
    path: "*",
    name: "DeviceNotFound",
    component: DeviceNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
