<template>
    Line Chart
    <div ref="resizeRef">
        <svg
            ref="svgRef"
            width="600"
            height="500"
        >
            <g class="x-axis" />
            <g class="y-axis" />
        </svg>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
import {
    select,
    scaleLinear,
    min,
    max,
    curveBasis,
    line,
    axisBottom,
    axisLeft,
} from "d3";

export default {
    name: "ResponsiveLineChart",
    props: ["data"],
    setup(props) {
        const svgRef = ref(null);
        onMounted(() => {
            const svg = select(svgRef.value);
            watchEffect(() => {
                const width = svg.attr("width"),
                    height = svg.attr("height");
                const margin = { left: 30, right: 30, top: 30, bottom: 30 };
                const xScale = scaleLinear()
                    .domain([0, props.data.length - 1])
                    .range([margin.left, width - margin.right]);
                const yScale = scaleLinear()
                    .domain([min(props.data), max(props.data)])
                    .range([height - margin.bottom, margin.top]);

                const lineGen = line()
                    .curve(curveBasis)
                    .x((value, index) => xScale(index))
                    .y((value) => yScale(value));

                svg.selectAll(".line")
                    .data([props.data]) // pass entire data array
                    .join("path")
                    .attr("class", "line")
                    .attr("stroke", "green")
                    .attr("fill", "none")
                    .attr("d", lineGen);

                const xAxis = axisBottom(xScale);
                svg.select(".x-axis")
                    .attr(
                        "transform",
                        `translate(0, ${height - margin.bottom})`
                    ) // position on the bottom
                    .call(xAxis);

                const yAxis = axisLeft(yScale);
                svg.select(".y-axis")
                    .attr("transform", `translate(${margin.left}, 0)`)
                    .call(yAxis);
                svg.nodes()[0].scrollIntoView();
            });
        });

        return { svgRef };
    },
};
</script>