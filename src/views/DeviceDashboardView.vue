<template>
  <div class="rpi-dashboard-wrap d-flex flex-column px-3">
    <div class="rpi-main-info-wrap" v-if="!this.apiErr">
      <div class="rpi-title-wrap d-inline-flex align-items-end">
        <h1 class="rpi-name me-3 lh-0">
          {{
            this.deviceName.charAt(0).toUpperCase() + this.deviceName.slice(1)
          }}
        </h1>
        <span
          v-if="!this.apiErr"
          class="rpi-status d-inline-flex align-items-center lh-0 mb-1"
        >
          <span class="status-light online-light me-1 align-self-center"></span>
          Online
        </span>
      </div>
      <h2 class="rpi-model">Raspberry PI 4 Model B</h2>

      <div class="rpi-misc-info-wrap my-4">
        <p class="rpi-misc-info">
          <span class="bolded">OS: </span>{{ this.deviceOs }} (Raspberry Pi OS)
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Release: </span>{{ this.deviceRelease }}
        </p>
        <p class="rpi-misc-info">
          <span class="bolded">Version: </span>{{ this.deviceVersion }}
        </p>
      </div>
    </div>
    <div class="rpi-panels-wrap pt-2 px-2" v-if="!this.apiErr">
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
                  :value="this.deviceTemp"
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

              <div
                class="rpi-memory-chart-wrap d-flex justify-content-center align-items-center"
              >
                <v-gauge
                  :value="this.deviceMemFree"
                  width="70"
                  height="70"
                  :minValue="0"
                  :maxValue="100"
                  :options="setDOpts"
                  colorStart="#1AA1DB"
                  colorStop="#1AA1DB"
                  gaugeValueClass="rpi-memory-gauge"
                  :donut="true"
                />
                <v-gauge
                  :value="this.deviceMemUsed"
                  width="70"
                  height="70"
                  :minValue="0"
                  :maxValue="100"
                  :options="setCOpts"
                  colorStart="#A0157B"
                  colorStop="#A0157B"
                  gaugeValueClass="rpi-memory-gauge"
                  :donut="true"
                />
                <p class="rpi-memory-current-used">
                  {{ this.deviceMemUsed }}%<br /><span class="smaller"
                    >Used</span
                  >
                </p>
                <p class="rpi-memory-current-free">
                  {{ this.deviceMemFree }}%<br /><span class="smaller"
                    >Free</span
                  >
                </p>
                <p class="rpi-memory-avail">
                  / {{ this.upMemAvail }} <span class="thinner">MB</span>
                </p>
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
                  {{ this.deviceUptime }}
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
                    {{ String(this.deviceArmFreq).slice(0, 3) }}
                    <span class="small-caps">Hz</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-detail">CORE</div>
                </div>
                <div class="row">
                  <div class="col rpi-freq-info-current">
                    {{ String(this.deviceCoreFreq).slice(0, 3) }}
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
                  :class="{ ' throttling-on': this.deviceThrottling }"
                >
                  <p class="badge-text">throttling</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' throttling-occ-on': this.deviceThrottlingOcc,
                  }"
                >
                  <p class="badge-text">throttling occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' undervolt-on': this.deviceUnderVolt,
                  }"
                >
                  <p class="badge-text">undervoltage deteced</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' undervolt-occ-on': this.deviceUnderVoltOcc,
                  }"
                >
                  <p class="badge-text">undervoltage occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' frequency-on': this.deviceWarnArm,
                  }"
                >
                  <p class="badge-text">arm frequency capped</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' frequency-occ-on': this.deviceWarnArmOcc,
                  }"
                >
                  <p class="badge-text">arm frequency occured</p>
                </div>
                <div
                  class="warn-badge filled"
                  :class="{
                    ' soft-temp-on': this.deviceSoftTemp,
                  }"
                >
                  <p class="badge-text">soft temp. limit active</p>
                </div>
                <div
                  class="warn-badge hollow"
                  :class="{
                    ' soft-temp-occ-on': this.deviceSoftTempOcc,
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
    <div class="rpi-api-error" v-if="this.apiErr">
      <div class="rpi-main-info-wrap">
        <div class="rpi-title-wrap d-inline-flex align-items-end">
          <h1 class="rpi-name me-3 lh-0">Retropie</h1>
          <span class="rpi-status d-inline-flex align-items-center lh-0 mb-1">
            <span
              class="status-light offline-light me-1 align-self-center"
            ></span>
            Offline
          </span>
        </div>
        <h5 class="rpi-fail-text lh-0 d-flex mt-3">
          Connection to device timed out.
        </h5>
      </div>
    </div>
    <div
      class="rpi-loading-wrap d-flex justify-content-center"
      v-if="this.loading"
    >
      <div class="rpi-loading-holder align-self-center text-center">
        <img src="@/assets/img/loading.gif" class="rpi-loading-gif" />
        <p class="rpi-loading-text m-0 p-0">Loading device...</p>
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {},
  props: {},
  data() {
    return {
      apiErr: false,
      device: null,
      updateChart: null,
      deviceName: "",
      deviceOs: null,
      deviceRelease: "",
      deviceVersion: "",
      deviceTemp: 40,
      deviceUptime: null,
      deviceArmFreq: "",
      deviceCoreFreq: "",
      deviceMemUsed: null,
      deviceMemFree: null,
      deviceMemAvail: null,
      upMemUsed: null,
      upMemFree: null,
      upMemAvail: null,
      deviceWarnArm: false,
      deviceWarnArmOcc: false,
      deviceSoftTemp: false,
      deviceSoftTempOcc: false,
      deviceThrottling: false,
      deviceThrottlingOcc: false,
      deviceUnderVolt: false,
      deviceUnderVoltOcc: false,
      info: null,
      loading: true,
      minValue: 30,
      maxValue: 90,
      opts: null,
      initValue: 0,
      dMinValue: 0,
      dMaxValue: 100,
      setDOpts: {
        angle: 0.48,
        lineWidth: 0.12,
        radiusScale: 1,
        generateGradient: false,
        highDpiSupport: true,
        colorStart: "#1AA1DB",
        colorStop: "#1AA1DB",
        strokeColor: "#EEEEEE",
      },
      setCOpts: {
        angle: 0.48,
        lineWidth: 0.12,
        radiusScale: 1,
        generateGradient: false,
        highDpiSupport: true,
        colorStart: "#A0157B",
        colorStop: "#A0157B",
        strokeColor: "#EEEEEE",
      },
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
      apiUrl: null,
    };
  },
  methods: {
    chooseRoute() {
      // Spaghetti Code 2000! Yee-haa!

      if (this.$router.currentRoute.matched[0].name === "glastonbury") {
        this.apiUrl = process.env.VUE_APP_GLASTONBURY_BASE_URL;
      } else if (this.$router.currentRoute.matched[0].name === "woodstock") {
        this.apiUrl = process.env.VUE_APP_WOODSTOCK_BASE_URL;
      } else if (this.$router.currentRoute.matched[0].name === "roskilde") {
        this.apiUrl = process.env.VUE_APP_ROSKILDE_BASE_URL;
      } else if (this.$router.currentRoute.matched[0].name === "retropie") {
        this.apiUrl = process.env.VUE_APP_RETROPIE_BASE_URL;
      }
    },
    async fetchWithTimeout(resource, options = {}) {
      const { timeout = 8000 } = options;

      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    },
    async fetchDeviceData() {
      try {
        const response = await this.fetchWithTimeout(this.apiUrl, {
          timeout: 5000,
        });
        const device = await response.json();

        //console.log(device);

        this.loading = false;

        //Main info
        this.deviceName = device.platform.networkName;
        this.deviceOs = device.platform.operatingSystem.name;
        this.deviceRelease = device.platform.operatingSystem.release;
        this.deviceVersion = device.platform.operatingSystem.version;

        // CPU Temp
        this.deviceTemp = device.temperature.systemOnChip.quantity;

        // Uptime
        this.deviceUptime = device.uptime.formatted;

        // Freqs
        this.deviceArmFreq = device.frequency.arm.quantity;
        this.deviceCoreFreq = device.frequency.core.quantity;

        //Memory
        var resultFree = Math.round(
          (device.memory.free.quantity / device.memory.available.quantity) * 100
        );
        var resultUsed = Math.round(
          device.memory.available.quantity - device.memory.free.quantity
        );
        var resultUsedPerc = Math.round(
          (resultUsed / device.memory.available.quantity) * 100
        );
        this.deviceMemFree = resultFree;
        this.deviceMemUsed = resultUsedPerc;

        this.deviceMemAvail = Math.trunc(
          device.memory.available.quantity / Math.pow(1024, 1)
        );

        //Warns
        this.deviceWarnArm = device.throttle.armFrequencyCapped;
        this.deviceWarnArmOcc = device.throttle.armFrequencyCappingHasOccurred;
        this.deviceSoftTemp = device.throttle.softTemperatureLimitActive;
        this.deviceSoftTempOcc =
          device.throttle.softTemperatureLimitHasOccurred;
        this.deviceThrottling = device.throttle.throttling;
        this.deviceThrottlingOcc = device.throttle.throttlingHasOccured;
        this.deviceUnderVolt = device.throttle.underVoltageDetected;
        this.deviceUnderVoltOcc = device.throttle.underVoltageHasOccurred;
      } catch (error) {
        // Timeouts if the request takes
        // longer than 5 seconds
        this.apiErr = true;
        this.loading = false;
      }
    },
    hideMenu() {
      let menu = document.getElementById("menu");

      this.showMobileMenu = !this.showMobileMenu;

      if (!this.showMobileMenu) {
        menu.classList.add("menu-in");
      } else {
        menu.classList.remove("menu-out");
      }
    },
  },
  mounted() {
    this.chooseRoute();
    this.fetchDeviceData();
  },
  beforeUpdate() {
    this.upMemUsed = this.deviceMemUsed;
    this.upMemFree = this.deviceMemFree;
    this.upMemAvail = this.deviceMemAvail;
  },
  watch: {
    "$route.params": function () {
      this.chooseRoute();
      this.fetchDeviceData();
      this.hideMenu();
    },
  },
  created: function () {
    this.chooseRoute();
    this.fetchDeviceData();
    this.hideMenu();
  },
};
</script>
