import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DeviceDashboardView from "../views/DeviceDashboardView.vue";

Vue.use(VueRouter);

export const routes = [
  {
    //path: process.env.VUE_APP_RPI_PATH,
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
];

const router = new VueRouter({
  //mode: "history",
  routes,
});

export default router;
