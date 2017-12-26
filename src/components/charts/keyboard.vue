<template>
  <div class="components-container" style='height:100vh'>
    <div class='chart-container'>
      <keyboard-chart v-if="chartData && chartKeyData"
                        height='100%'
                        width='100%'
                        :chartData="chartData"
                        :chartKeyData="chartKeyData"
                        :name = "charName"
                        ></keyboard-chart>
    </div>
  </div>
</template>

<script>
import keyboardChart from "base/Charts/keyboard";
export default {
  data() {
    return {
      chartData: null,
      chartKeyData: null,
      charName: '小林'
    };
  },
  components: { keyboardChart },
  mounted() {
    let xAxisData = [],
      data = [];
    for (let i = 0; i < 30; i++) {
      xAxisData.push(i + "号");
      data.push(Math.round(Math.random() * 2 + 3));
    }
    this.chartData = xAxisData;
    this.chartKeyData = data;
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
