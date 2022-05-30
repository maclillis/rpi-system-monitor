<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <h1 class="rpi-heading">RPI's</h1>
    <div class="rpi-home-inner">
      <div class="row desc-home-row d-flex m-0">
        <div class="col desc-home-col p-0"><p class="server-info">name</p></div>
        <div class="col desc-home-col p-0">
          <p class="server-info">status</p>
        </div>
      </div>
      <div class="row server-home-row d-flex m-0">
        <div class="col server-home-col p-0">
          <router-link :to="'/glastonbury'"
            ><p class="server-name">Glastonbury</p></router-link
          >
          <p class="server-title">Web Server</p>
        </div>
        <div class="col server-home-col p-0">
          <div
            class="status-light online-light"
            v-if="glastonburyStat == 200"
          ></div>
          <div
            class="status-light offline-light"
            v-if="glastonburyStat != 200"
          ></div>
        </div>
      </div>
      <div class="row server-home-row d-flex m-0">
        <div class="col server-home-col p-0">
          <router-link :to="'/woodstock'"
            ><p class="server-name">Woodstock</p></router-link
          >
          <p class="server-title">NAS & Stream</p>
        </div>
        <div class="col server-home-col p-0">
          <div
            class="status-light online-light"
            v-if="woodstockStat == 200"
          ></div>
          <div
            class="status-light offline-light"
            v-if="woodstockStat != 200"
          ></div>
        </div>
      </div>
      <div class="row server-home-row d-flex m-0">
        <div class="col server-home-col p-0">
          <router-link :to="'/roskilde'"
            ><p class="server-name">Roskilde</p></router-link
          >
          <p class="server-title">Web Server</p>
        </div>
        <div class="col server-home-col p-0">
          <div
            class="status-light online-light"
            v-if="roskildeStat == 200"
          ></div>
          <div
            class="status-light offline-light"
            v-if="roskildeStat != 200"
          ></div>
        </div>
      </div>
      <div class="row server-home-row d-flex m-0">
        <div class="col server-home-col p-0">
          <router-link :to="'/retropie'"
            ><p class="server-name">Retropie</p></router-link
          >
          <p class="server-title">Gaming</p>
        </div>
        <div class="col server-home-col p-0">
          <div
            class="status-light online-light"
            v-if="retropieStat == 200"
          ></div>
          <div
            class="status-light offline-light"
            v-if="retropieStat != 200"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/views/HomeView.scss";

export default {
  name: "HomeView",
  data() {
    return {
      allStatuses: {},
      glastonburyStat: {},
      roskildeStat: {},
      woodstockStat: {},
      retropieStat: {},
    };
  },
};
</script>
