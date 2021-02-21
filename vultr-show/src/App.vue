<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Adam Liu's Space</h1>
  <svg ref="chart" />
  <div id="wrapper">
    <textarea v-model="message"></textarea>
    <button @click="redrawChart" id="confirm">Update Diagram</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { select } from "d3";

export default {
  setup() {
    const chart = ref(null);
    const message = ref(null);
    const drawCircles = function(data) {
      const element = chart.value;
      const svg = select(element)
        .attr("width", 400)
        .attr("height", 400);
      const shapes = svg.selectAll(".shapes").data(data).enter();
      shapes
        .append("circle")
        .attr("fill", "red")
        .attr("cx", function (d, i) {
          return (i + 1) * 25;
        })
        .attr("cy", 10)
        .attr("r", 10);
    }
    onMounted(() => {
      drawCircles([1,2,3,4,5]);
    });
    const redrawChart = function() {
      const num = Number(message.value);
      console.log(num);
      drawCircles(Array(num).fill(0));
    }
    return {
      chart,
      message,
      redrawChart,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
#confirm {
  font-size: 20px;
}
</style>
