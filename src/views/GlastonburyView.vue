<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <div class="rpi-main-info-wrap">
      <div class="rpi-title-wrap d-inline-flex align-items-end">
        <h1 class="rpi-name me-3 lh-0">
          {{
            this.deviceName.charAt(0).toUpperCase() + this.deviceName.slice(1)
          }}
        </h1>
        <span class="rpi-status d-inline-flex align-items-center lh-0 mb-1">
          <span class="status-light online-light me-1 align-self-center"></span>
          Online
        </span>
      </div>
      <h2 class="rpi-model">Raspberry PI 4 Model B</h2>

      <div class="rpi-misc-info-wrap my-4">
        <p class="rpi-misc-info">
          <span class="bolded">OS: </span>{{ this.osName }} (Raspberry Pi OS)
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Release: </span>{{ this.releaseVal }}
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Version: </span>{{ this.versionVal }}
        </p>
      </div>
    </div>
    <div class="rpi-panels-wrap pt-2 px-2">
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
                  :value="cpuTemp"
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
                  {{ uptimeVal }}
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
                    {{ String(this.armVal).slice(0, 3) }}
                    <span class="small-caps">Hz</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-detail">CORE</div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-current">
                    {{ String(this.coreVal).slice(0, 3) }}
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
                  :class="{ ' throttling-on': throttling }"
                >
                  <p class="badge-text">throttling</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{ ' throttling-occ-on': throttlingOcc }"
                >
                  <p class="badge-text">throttling occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{ ' undervolt-on': underVolt }"
                >
                  <p class="badge-text">undervoltage deteced</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{ ' undervolt-occ-on': underVoltOcc }"
                >
                  <p class="badge-text">undervoltage occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{ ' frequency-on': armFr }"
                >
                  <p class="badge-text">arm frequency capped</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{ ' frequency-occ-on': armFrOcc }"
                >
                  <p class="badge-text">arm frequency occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{ ' soft-temp-on': softTemp }"
                >
                  <p class="badge-text">soft temp. limit active</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{ ' soft-temp-occ-on': softTempOcc }"
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
      cpuTemp: 40,
      info: null,
      loading: true,
      errored: false,
      deviceName: "",
      osName: null,
      uptimeVal: null,
      armVal: "",
      coreVal: "",
      releaseVal: null,
      versionVal: null,
      armFr: null,
      armFrOcc: null,
      softTemp: null,
      softTempOcc: null,
      throttling: null,
      throttlingOcc: null,
      underVolt: null,
      underVoltOcc: null,
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
  methods: {
    fetchDeviceData() {
      this.axios
        .get(process.env.VUE_APP_GLASTONBURY_BASE_URL + "/system/")
        .then((response) => {
          this.device = response.data;

          this.deviceName = this.device.platform.networkName;
          this.osName = this.device.platform.operatingSystem.name;
          this.releaseVal = this.device.platform.operatingSystem.release;
          this.versionVal = this.device.platform.operatingSystem.version;

          this.cpuTemp = this.device.temperature.systemOnChip.quantity;

          this.uptimeVal = this.device.uptime.formatted;

          this.armVal = this.device.frequency.arm.quantity;
          this.coreVal = this.device.frequency.core.quantity;

          this.armFr = this.device.throttle.armFrequencyCapped;
          this.armFrOcc = this.device.throttle.armFrequencyCappingHasOccurred;
          this.softTemp = this.device.throttle.softTemperatureLimitActive;
          this.softTempOcc =
            this.device.throttle.softTemperatureLimitHasOccurred;
          this.throttling = this.device.throttle.throttling;
          this.throttlingOcc = this.device.throttle.throttlingHasOccurred;
          this.underVolt = this.device.throttle.underVoltageDetected;
          this.underVoltOcc = this.device.throttle.underVoltageHasOccurred;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.fetchDeviceData();
  },
};
</script>
