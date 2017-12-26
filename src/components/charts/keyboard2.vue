<template>
  <div class="components-container" style='height:100vh'>
    <div class='chart-container'>
      <keyboard-chart2 height='100%'
                        width='100%'
                        v-if="chartData && data1 && data2"
                        :chartData="chartData"
                        :dataOne="data1"
                        :dataTwo="data2"></keyboard-chart2>
    </div>
  </div>
</template>

<script>
import keyboardChart2 from "base/Charts/keyboard2";

export default {
  data() {
    return {
      chartData: null,
      data1: null,
      data2: null
    };
  },
  components: { keyboardChart2 },
  mounted() {
    let xAxisData = [],
      data = [],
      data2 = [];
    for (let i = 0; i < 50; i++) {
      xAxisData.push(i);
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
    }
    this.chartData = xAxisData;
    this.data1 = data;
    this.data2 = data2;
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 90%;
}
</style>

