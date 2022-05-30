<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <p>{{ $route.path }}</p>
    <p>{{ device }}</p>
    <div class="rpi-main-info-wrap" v-if="status == 200">
      <div class="rpi-title-wrap d-inline-flex align-items-end">
        <h1 class="rpi-name me-3 lh-0">
          {{
            device.platform.networkName.charAt(0).toUpperCase() +
            device.platform.networkName.slice(1)
          }}
        </h1>
        <span
          v-if="status == 200"
          class="rpi-status d-inline-flex align-items-center lh-0 mb-1"
        >
          <span class="status-light online-light me-1 align-self-center"></span>
          Online
        </span>
        <span
          v-if="status != 200"
          class="rpi-status d-inline-flex align-items-center lh-0 mb-1"
        >
          <span
            class="status-light offline-light me-1 align-self-center"
          ></span>
          Offline
        </span>
      </div>
      <h2 class="rpi-model">Raspberry PI 4 Model B</h2>

      <div class="rpi-misc-info-wrap my-4">
        <p class="rpi-misc-info">
          <span class="bolded">OS: </span
          >{{ device.platform.operatingSystem.name }} (Raspberry Pi OS)
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Release: </span
          >{{ device.platform.operatingSystem.release }}
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Version: </span
          >{{ device.platform.operatingSystem.version }}
        </p>
      </div>
    </div>
    <div class="rpi-panels-wrap pt-2 px-2" v-if="status == 200">
      <div class="row">
        <div class="col px-0 pe-2">
          <div class="rpi-cpu-temp-wrap rpi-panel-wrap">
            <div class="rpi-cpu-temp-inner rpi-panel-inner">
              <div class="rpi-panel-holder">
                <p class="rpi-panel-info">cpu temp</p>
              </div>
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
                  :value="device.temperature.systemOnChip.quantity"
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
        </div>
        <div class="col px-0">
          <div class="rpi-memory-usage-wrap rpi-panel-wrap">
            <div class="rpi-memory-usage-inner rpi-panel-inner">
              <div class="rpi-panel-holder">
                <p class="rpi-panel-info">memory</p>
              </div>
              <div class="rpi-panel-icon-wrap">
                <div class="rpi-panel-icon-inner">
                  <font-awesome-icon
                    class="icon-light"
                    icon="fa-solid fa-memory"
                  />
                </div>
              </div>

              <div class="rpi-memory-chart-wrap">
                <p class="rpi-memory-current-used">
                  95%<br /><span class="smaller">Used</span>
                </p>
                <Doughnut
                  :chart-options="chartOptions"
                  :chart-data="chartData"
                  :chart-id="chartId"
                  :dataset-id-key="datasetIdKey"
                  :plugins="plugins"
                  :css-classes="cssClasses"
                  :styles="styles"
                  :width="width"
                  :height="height"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col px-0 pe-2">
          <div class="rpi-uptime-wrap rpi-panel-wrap">
            <div class="rpi-uptime-inner rpi-panel-inner">
              <div class="rpi-panel-holder">
                <p class="rpi-panel-info">uptime</p>
              </div>
              <div class="rpi-panel-icon-wrap">
                <div class="rpi-panel-icon-inner">
                  <font-awesome-icon
                    class="icon-light"
                    icon="fa-solid fa-plug-circle-bolt"
                  />
                </div>
              </div>

              <div
                class="rpi-current-uptime-holder d-flex justify-content-start ps-4"
              >
                <p class="c-uptime-text align-self-center m-0">
                  {{ device.uptime.formatted }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col px-0">
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
                    {{ String(device.frequency.arm.quantity).slice(0, 3) }}
                    <span class="small-caps">Hz</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-detail">CORE</div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-current">
                    {{ String(device.frequency.core.quantity).slice(0, 3) }}
                    <span class="small-caps">Hz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col px-0">
          <div class="rpi-warnings-wrap rpi-panel-wrap">
            <div class="rpi-warnings-inner rpi-panel-inner">
              <div class="rpi-panel-holder">
                <p class="rpi-panel-info">warnings</p>
              </div>
              <div class="rpi-warn-badges-wrap px-4 py-3">
                <div
                  class="warn-badge filled"
                  :class="{ ' throttling-on': device.throttle.throttling }"
                >
                  <p class="badge-text">throttling</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' throttling-occ-on': device.throttle.throttlingHasOccurred,
                  }"
                >
                  <p class="badge-text">throttling occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' undervolt-on': device.throttle.underVoltageDetected,
                  }"
                >
                  <p class="badge-text">undervoltage deteced</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' undervolt-occ-on':
                      device.throttle.underVoltageHasOccurred,
                  }"
                >
                  <p class="badge-text">undervoltage occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' frequency-on': device.throttle.armFrequencyCapped,
                  }"
                >
                  <p class="badge-text">arm frequency capped</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' frequency-occ-on':
                      device.throttle.armFrequencyCappingHasOccurred,
                  }"
                >
                  <p class="badge-text">arm frequency occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' soft-temp-on': device.throttle.softTemperatureLimitActive,
                  }"
                >
                  <p class="badge-text">soft temp. limit active</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' soft-temp-occ-on':
                      device.throttle.softTemperatureLimitHasOccurred,
                  }"
                >
                  <p class="badge-text">soft temp. limit occured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

import "@/views/Views.scss";

export default {
  name: "GlastonburyView",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 130,
    },
    height: {
      type: Number,
      default: 130,
    },
    cssClasses: {
      default: "rpi-memory-chart-core",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cpuTemp: 20,
      info: null,
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
      chartData: {
        labels: ["Used", "Free"],
        datasets: [
          {
            backgroundColor: ["#F0625B", "#246178"],
            data: [20, 80],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            align: "center",
            position: "bottom",
            labels: {
              boxWidth: 12,
              pointStyle: "circle",
              usePointStyle: true,
            },
          },
        },
      },
    };
  },
};
</script>
