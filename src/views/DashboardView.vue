<template>
  <div class="dashboard">
    <MainInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import MainInfo from "@/components/panels/MainInfo.vue";

export default {
  name: "DashboardView",
  components: {
    MainInfo,
  },
};
</script>
