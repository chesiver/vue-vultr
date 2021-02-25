<template>
    <h1>D3 Playground</h1>
    <responsive-line-chart :data="data" />
    <div class="buttons">
        <button @click="addData">Add data</button>
        <button @click="filterData">Filter data</button>
    </div>
</template>

<script>
// import { ref, onMounted } from "vue";
import ResponsiveLineChart from "./ResponsiveLineChart.vue";

export default {
    name: "D3_show",
    setup() {},
    components: {
        ResponsiveLineChart,
    },
    data() {
        return {
            data: [1, 2, 0, 4, 10, 8, 12, 4, 5],
        };
    },
    methods: {
        addData() {
            // add random value from 0 to 50 to array
            this.data = [...this.data, Math.round(Math.random() * 50)];
        },
        filterData() {
            this.data = this.data.filter((v) => v <= 35);
        },
    },
};
</script>

<style>
.buttons {
    margin-top: 2rem;
    font-size: 5em;
    display: flex;
    justify-content: space-around;
}
</style>