<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    },
    // 参数
    chartData: {
      type: Array,
      default: null
    },
    // 数据1
    dataOne: {
      type: Array,
      default: null
    },
    // 数据2
    dataTwo: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      const xAxisData = this.chartData || [];
      const data = this.dataOne || [];
      const data2 = this.dataTwo || [];
      this.chart.setOption({
        backgroundColor: "#08263a",
        xAxis: [
          {
            show: false,
            data: xAxisData
          },
          {
            show: false,
            data: xAxisData
          }
        ],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: [
              "#4a657a",
              "#308e92",
              "#b1cfa5",
              "#f5d69f",
              "#f5898b",
              "#ef5055"
            ]
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#4a657a"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#08263f"
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "back",
            type: "bar",
            data: data2,
            z: 1,
            itemStyle: {
              normal: {
                opacity: 0.4,
                barBorderRadius: 5,
                shadowBlur: 3,
                shadowColor: "#111"
              }
            }
          },
          {
            name: "Simulate Shadow",
            type: "line",
            data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: "linear",
            animationDuration: 1200,
            lineStyle: {
              normal: {
                color: "transparent"
              }
            },
            areaStyle: {
              normal: {
                color: "#08263a",
                shadowBlur: 50,
                shadowColor: "#000"
              }
            }
          },
          {
            name: "front",
            type: "bar",
            data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          }
        ],
        animationEasing: "elasticOut",
        animationEasingUpdate: "elasticOut",
        animationDelay(idx) {
          return idx * 20;
        },
        animationDelayUpdate(idx) {
          return idx * 20;
        }
      });
    }
  }
};
</script>
