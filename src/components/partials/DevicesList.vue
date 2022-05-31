<template>
  <div class="rpi-home-inner">
    <div class="row desc-home-row d-flex m-0">
      <div class="col desc-home-col p-0">
        <p class="server-info">name</p>
      </div>
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
        <div class="status-light online-light" v-if="this.glasOnline"></div>
        <div class="status-light offline-light" v-if="!this.glasOnline"></div>
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
        <div class="status-light online-light" v-if="this.woodOnline"></div>
        <div class="status-light offline-light" v-if="!this.woodOnline"></div>
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
        <div class="status-light online-light" v-if="this.rosOnline"></div>
        <div class="status-light offline-light" v-if="!this.rosOnline"></div>
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
        <div class="status-light online-light" v-if="this.retrOnline"></div>
        <div class="status-light offline-light" v-if="!this.retrOnline"></div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/components/partials/DevicesList.scss";
export default {
  name: "DevicesList",
  data() {
    return {
      glasOnline: false,
      rosOnline: false,
      woodOnline: false,
      retrOnline: false,
    };
  },
  methods: {
    async fetchStatuses() {
      try {
        const results = await Promise.allSettled([
          fetch(process.env.VUE_APP_GLASTONBURY_BASE_URL).then((response) =>
            response.json()
          ),
          fetch(process.env.VUE_APP_ROSKILDE_BASE_URL).then((response) =>
            response.json()
          ),
          fetch(process.env.VUE_APP_WOODSTOCK_BASE_URL).then((response) =>
            response.json()
          ),
          fetch(process.env.VUE_APP_RETROPIE_BASE_URL).then((response) =>
            response.json()
          ),
        ]);
        /*console.log(
          results[0].status,
          results[1].status,
          results[2].status,
          results[3].status
        );*/

        if (results[0].status === "fulfilled") {
          this.glasOnline = true;
        }
        if (results[1].status === "fulfilled") {
          this.rosOnline = true;
        }
        if (results[2].status === "fulfilled") {
          this.woodOnline = true;
        }
        if (results[3].status === "fulfilled") {
          this.retrOnline = true;
        }
      } catch (error) {
        //console.error(error);
      }
    },
  },
  mounted() {
    this.fetchStatuses();
  },
};
</script>
