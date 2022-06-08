<template>
  <div class="rpi-menu-out" id="menu">
    <div class="rpi-menu-out-inner">
      <div class="row head-menu-row d-flex m-0">
        <div class="col head-menu-col d-flex">
          <p class="menu-title align-self-end lh-0">RPI's</p>
        </div>
        <div class="col head-menu-col align-self-center text-end">
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-align-right fa-xmark"
            @click="hideMenu()"
          />
        </div>
      </div>
      <DevicesList></DevicesList>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/components/navigation/AppNavigationOut.scss";
</style>

<script type="text/javascript">
import DevicesList from "@/components/partials/DevicesList.vue";
export default {
  name: "AppNavigationOut",
  components: {
    DevicesList,
  },
  data: function () {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    hideMenu() {
      let menu = document.getElementById("menu");

      this.showMobileMenu = !this.showMobileMenu;

      if (!this.showMobileMenu) {
        menu.classList.add("menu-in");
      } else {
        menu.classList.remove("menu-out");
      }
    },
  },
};
</script>
