<template>
  <div id="app">
    <apexchart
      :options="options"
      :series="series"
      height="600"
    />
  </div>
</template>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts';
export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'Revenue',
          type: 'area',
          data: ['12', '20', '50']
        },
        {
          name: 'Quota',
          type: 'line',
          data: ['45', '45', '45']
        },
      ],
      options: {
        xaxis: { categories: ['January', 'February', 'March'] },
        chart: {
          animations: { easing: 'cubic-bezier(.25,.46,.45,.94)', speed: 1000 },
          zoom: false,
          toolbar: { show: false },
        },
        colors: ['#0F4DE6', '#000'],
        dataLabels: { enabled: false},
        fill: { colors: ['rgba(44,105,205,0.1)', '#000'] },
        stroke: {
          colors: ['#0F4DE6', '#000'],
          curve: 'straight',
          width: 2
        },
        markers: {
          size: 6,
          strokeColors: ['#0F4DE6', '#000'],
          strokeWidth: 2,
          colors: ['#ffffff'],
          fillOpacity: 1,
          shape: "circle",
          hover: { size: undefined, sizeOffset: 0 }
        },
      },
    }
  },
}
</script>
