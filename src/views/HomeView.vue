<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <h1 class="rpi-heading">RPI's</h1>
    <DevicesList></DevicesList>
  </div>
</template>
<script>
import "@/views/HomeView.scss";
import DevicesList from "@/components/partials/DevicesList.vue";

export default {
  name: "HomeView",
  components: {
    DevicesList,
  },
};
</script>
