<template>
  <div class="rpi-warnings-wrap rpi-panel-wrap">
    <div class="rpi-warnings-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">warnings</p></div>
      <!--<div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon
            class="icon-light"
            icon="fa-solid fa-plug-circle-bolt"
          />
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import "@/components/panels/ThrottWarnings.scss";
export default {
  name: "ThrottWarnings",
};
</script>
