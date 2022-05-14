<template>
  <div id="app">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script>
import AppNavigation from "@/components/navigation/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss">
@import url("App.scss");
</style>
