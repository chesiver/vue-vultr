<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Adam Liu's Space</h1>
  <kinesis-container event="move">
    <kinesis-element strength="10" type="rotate">
      <img 
      width="600" height="400"
      src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/120194685_3145559558885908_1170017041477723343_o.png?_nc_cat=106&ccb=3&_nc_sid=8024bb&_nc_ohc=kuykmYcf6RAAX99rhu6&_nc_ht=scontent-nrt1-1.xx&oh=6bd14cc63b1373247ae2a55779e44910&oe=605BF7E8" alt="logrocket logo" />
    </kinesis-element>
  </kinesis-container>
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
