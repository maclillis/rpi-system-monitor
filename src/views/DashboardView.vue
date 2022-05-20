<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <MainInfo />
    <div class="rpi-panels-wrap pt-2 px-2">
      <div class="row">
        <div class="col px-0 pe-2">
          <CPUTemp />
        </div>
        <div class="col px-0">
          <MemoryUsage />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col px-0 pe-2">
          <UpTime />
        </div>
        <div class="col px-0">
          <ClockFrequency />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col px-0">
          <ThrottWarnings />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainInfo from "@/components/panels/MainInfo.vue";
import CPUTemp from "@/components/panels/CPUTemp.vue";
import MemoryUsage from "@/components/panels/MemoryUsage.vue";
import ClockFrequency from "../components/panels/ClockFrequency.vue";
import UpTime from "../components/panels/UpTime.vue";
import ThrottWarnings from "../components/panels/ThrottWarnings.vue";

import "@/views/DashboardView.scss";

export default {
  name: "DashboardView",
  components: {
    MainInfo,
    CPUTemp,
    MemoryUsage,
    ClockFrequency,
    UpTime,
    ThrottWarnings,
  },
};
</script>
