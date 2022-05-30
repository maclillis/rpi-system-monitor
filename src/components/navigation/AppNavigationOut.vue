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
      <div class="row desc-menu-row d-flex m-0">
        <div class="col desc-menu-col"><p class="server-info">name</p></div>
        <div class="col desc-menu-col"><p class="server-info">status</p></div>
      </div>
      <div class="row server-menu-row d-flex m-0">
        <div class="col server-menu-col">
          <router-link :to="'/glastonbury'"
            ><p class="server-name">Glastonbury</p></router-link
          >
          <p class="server-title">Web Server</p>
        </div>
        <div class="col server-menu-col">
          <div class="status-light online-light"></div>
        </div>
      </div>
      <div class="row server-menu-row d-flex m-0">
        <div class="col server-menu-col">
          <router-link :to="'/woodstock'"
            ><p class="server-name">Woodstock</p></router-link
          >
          <p class="server-title">NAS & Stream</p>
        </div>
        <div class="col server-menu-col">
          <div class="status-light online-light"></div>
        </div>
      </div>
      <div class="row server-menu-row d-flex m-0">
        <div class="col server-menu-col">
          <router-link :to="'/roskilde'"
            ><p class="server-name">Roskilde</p></router-link
          >
          <p class="server-title">Web Server</p>
        </div>
        <div class="col server-menu-col">
          <div class="status-light warn-light"></div>
        </div>
      </div>
      <div class="row server-menu-row d-flex m-0">
        <div class="col server-menu-col">
          <router-link :to="'/retropie'"
            ><p class="server-name">Retropie</p></router-link
          >
          <p class="server-title">Gaming</p>
        </div>
        <div class="col server-menu-col">
          <div class="status-light offline-light"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/navigation/AppNavigationOut.scss";
export default {
  name: "AppNavigationOut",
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
