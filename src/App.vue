<template>
  <div id="rpi-app-wrap" class="d-flex flex-column">
    <AppNavigation />
    <router-view />
    <AppNavigationOut />
  </div>
</template>

<style lang="scss">
@import "@/App.scss";
</style>

<script>
import AppNavigation from "@/components/navigation/AppNavigation.vue";
import AppNavigationOut from "@/components/navigation/AppNavigationOut.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppNavigationOut,
  },
};
</script>
