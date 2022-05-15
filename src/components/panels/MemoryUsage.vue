<template>
  <div class="rpi-memory-usage-wrap rpi-panel-wrap">
    <div class="rpi-memory-usage-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">memory</p></div>
      <div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon class="icon-light" icon="fa-solid fa-memory" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/MemoryUsage.scss";
export default {
  name: "MemoryUsage",
};
</script>
