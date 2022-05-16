<template>
  <div class="rpi-warnings-wrap rpi-panel-wrap">
    <div class="rpi-warnings-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">warnings</p></div>
      <div class="rpi-warn-badges-wrap px-4 py-3">
        <div class="warn-badge filled throttling-on">
          <p class="badge-text">throttling</p>
        </div>
        <div class="warn-badge hollow throttling-occ-on">
          <p class="badge-text">throttling occured</p>
        </div>
        <div class="warn-badge filled undervolt-on">
          <p class="badge-text">undervoltage deteced</p>
        </div>
        <div class="warn-badge hollow undervolt-occ-on">
          <p class="badge-text">undervoltage occured</p>
        </div>
        <div class="warn-badge filled frequency-on">
          <p class="badge-text">arm frequency capped</p>
        </div>
        <div class="warn-badge hollow frequency-occ-on">
          <p class="badge-text">arm frequency occured</p>
        </div>
        <div class="warn-badge filled soft-temp-on">
          <p class="badge-text">soft temp. limit active</p>
        </div>
        <div class="warn-badge hollow soft-temp-occ-on">
          <p class="badge-text">soft temp. limit occured</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/ThrottWarnings.scss";
export default {
  name: "ThrottWarnings",
};
</script>
