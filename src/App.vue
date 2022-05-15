<template>
  <div id="rpi-app-wrap" class="d-flex flex-column">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script>
import "@/App.scss";
import AppNavigation from "@/components/navigation/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
  },
};
</script>
