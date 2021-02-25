<template>
    <h1>D3 Playground</h1>
    <el-select
        v-model="selected_chart"
        placeholder="Select"
    >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
    </el-select>
    <div class="buttons">
        <button @click="addData">Add data</button>
        <button @click="filterData">Filter data</button>
    </div>
    <responsive-line-chart v-if="selected_chart === 'Line_Chart'" :data="data" />
</template>

<script>
// import { ref, onMounted } from "vue";
import ResponsiveLineChart from "./ResponsiveLineChart.vue";
import { ElSelect } from "element-plus";

export default {
    name: "D3_show",
    setup() {},
    components: {
        ResponsiveLineChart,
        ElSelect,
    },
    data() {
        return {
            data: [1, 2, 0, 4, 10, 8, 12, 4, 5],
            options: [
                {
                    value: "Line_Chart",
                    label: "Line Chart",
                },
            ],
            selected_chart: "",
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