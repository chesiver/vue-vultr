<template>
    <div style="display: flex; justify-content: space-around; ">
        <h1 style="font-size: 5em;">Adam Liu's Space</h1>
        <kinesis-container event="move">
            <kinesis-element
                strength="10"
                type="rotate"
            >
                <img
                    width="500"
                    height="300"
                    src="./assets/yukino.png"
                    alt="logrocket logo"
                />
            </kinesis-element>
        </kinesis-container>
    </div>
    <div style="display: flex; justify-content: space-around; ">
        <router-link to="/">
            <h1>Go to Home</h1>
        </router-link>
        <router-link to="/d3_show">
            <h1>Go to D3 Playground</h1>
        </router-link>
        <br />
        <router-link to="/about">
            <h1>Go to About</h1>
        </router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {};
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
