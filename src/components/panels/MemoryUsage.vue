<template>
  <div class="rpi-memory-usage-wrap rpi-panel-wrap">
    <div class="rpi-memory-usage-inner rpi-panel-inner">
      <div class="rpi-panel-holder"><p class="rpi-panel-info">memory</p></div>
      <div class="rpi-panel-icon-wrap">
        <div class="rpi-panel-icon-inner">
          <font-awesome-icon class="icon-light" icon="fa-solid fa-memory" />
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

import "@/components/panels/MemoryUsage.scss";
export default {
  name: "MemoryUsage",
  components: { Doughnut },
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
