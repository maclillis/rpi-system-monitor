<template>
  <div class="rpi-freq-wrap rpi-panel-wrap">
    <div class="rpi-freq-inner rpi-panel-inner">
      <div class="rpi-panel-holder">
        <p class="rpi-panel-info">frequency</p>
      </div>
      <div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon
            class="icon-light"
            icon="fa-solid fa-wave-square"
          />
        </div>
      </div>

      <div
        class="rpi-freq-info-wrap d-flex flex-column justify-content-center px-3 mx-2"
      >
        <div class="row">
          <div class="col rpi-freq-info-detail">ARM</div>
        </div>
        <div class="row">
          <div class="col rpi-freq-info-current mb-1">
            700.15 <span class="small-caps">Hz</span>
          </div>
        </div>
        <div class="row">
          <div class="col rpi-freq-info-detail">CORE</div>
        </div>
        <div class="row">
          <div class="col rpi-freq-info-current">
            256.47 <span class="small-caps">Hz</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/ClockFrequency.scss";
export default {
  name: "ClockFrequency",
};
</script>
