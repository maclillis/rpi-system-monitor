<template>
  <div class="rpi-uptime-wrap rpi-panel-wrap">
    <div class="rpi-uptime-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">uptime</p></div>
      <div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon
            class="icon-light"
            icon="fa-solid fa-plug-circle-bolt"
          />
        </div>
      </div>

      <div class="rpi-current-uptime-holder d-flex justify-content-center">
        <p class="c-uptime-text align-self-center m-0">
          1 <span class="thinner">day,</span><br />
          22<span class="thinner">:</span>47<span class="thinner">:</span>50
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/UpTime.scss";
export default {
  name: "UpTime",
};
</script>
