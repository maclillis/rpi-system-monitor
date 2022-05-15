<template>
  <div class="rpi-cpu-temp-wrap rpi-panel-wrap">
    <div class="rpi-cpu-temp-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">cpu temp</p></div>
      <div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon
            class="icon-light"
            icon="fa-solid fa-temperature-half"
          />
        </div>
      </div>

      <div class="rpi-current-temp d-flex justify-content-center mb-2">
        <p class="c-temp-text">40.5°c</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/CPUTemp.scss";
export default {
  name: "CPUTemp",
};
</script>
