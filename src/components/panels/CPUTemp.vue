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

      <div
        class="rpi-current-temp-gauge-wrap d-flex justify-content-center pt-3"
      >
        <v-gauge
          :value="value"
          width="150"
          height="85"
          :minValue="minValue"
          :maxValue="maxValue"
          :options="setOpts"
          colorStart="#6F6EA0"
          colorStop="#C0C0DB"
          unit="°c"
          gaugeValueClass="rpi-temp-gauge"
          :decimalPlace="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/panels/CPUTemp.scss";
export default {
  name: "CPUTemp",
  data() {
    return {
      value: 40,
      minValue: 30,
      maxValue: 90,
      opts: null,
      setOpts: {
        angle: -0,
        lineWidth: 0.26,
        radiusScale: 1,
        pointer: {
          length: 0.49,
          strokeWidth: 0.062,
          color: "#494949",
        },
        generateGradient: true,
        highDpiSupport: true,
        staticZones: [
          { strokeStyle: "#31d016", min: 30, max: 40 }, // Green
          { strokeStyle: "#FCE300", min: 40.5, max: 50 }, // Yellow
          { strokeStyle: "#FB840E", min: 50.5, max: 70 }, // Orange
          { strokeStyle: "#f83434", min: 70.5, max: 80 }, // Red
          { strokeStyle: "#b50000", min: 80.5, max: 90 }, // Deep Red
        ],
      },
    };
  },
};
</script>
