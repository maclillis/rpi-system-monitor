<template>
  <div
    class="rpi-navigation-wrap d-inline-flex px-3 py-2 justify-content-between"
  >
    <div class="rpi-mode-adjuster-outer d-flex align-items-center">
      <ModeAdjuster />
    </div>
    <div class="rpi-hamburger-wrap align-self-center">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </div>
</template>

<script>
import "@/components/navigation/AppNavigation.scss";
import ModeAdjuster from "@/components/partials/ModeAdjuster.vue";
export default {
  name: "AppNavigation",
  components: {
    ModeAdjuster,
  },
};
</script>
