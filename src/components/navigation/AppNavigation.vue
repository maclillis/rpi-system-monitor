<template>
  <div
    class="rpi-navigation-wrap d-inline-flex px-3 py-2 justify-content-between"
  >
    <div class="rpi-mode-adjuster-outer d-flex align-items-center">
      <ModeAdjuster />
    </div>
    <div class="rpi-hamburger-wrap align-self-center">
      <font-awesome-icon icon="fa-solid fa-bars" @click="showMenu()" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/components/navigation/AppNavigation.scss";
</style>

<script>
import ModeAdjuster from "@/components/partials/ModeAdjuster.vue";
export default {
  name: "AppNavigation",
  components: {
    ModeAdjuster,
  },
  data: function () {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      let menu = document.getElementById("menu");

      this.showMobileMenu = !this.showMobileMenu;

      if (this.showMobileMenu) {
        menu.classList.add("menu-out");
      } else {
        menu.classList.remove("menu-in");
      }
    },
  },
};
</script>
