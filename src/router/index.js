import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DeviceDashboardView from "../views/DeviceDashboardView.vue";
import DeviceNotFound from "../views/DeviceNotFound.vue";

Vue.use(VueRouter);

export const routes = [
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
    component: DeviceDashboardView,
  },
  {
    path: "/roskilde",
    name: "roskilde",
    props: true,
    component: DeviceDashboardView,
  },
  {
    path: "/woodstock",
    name: "woodstock",
    props: true,
    component: DeviceDashboardView,
  },
  {
    path: "/retropie",
    name: "retropie",
    props: true,
    component: DeviceDashboardView,
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
