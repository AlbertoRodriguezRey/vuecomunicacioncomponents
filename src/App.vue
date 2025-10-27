<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PadreDeportes/>
  <HijoDeporte/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PadreDeportes from './components/PadreDeportes.vue'
import HijoDeporte from './components/HijoDeporte.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    PadreDeportes,
    HijoDeporte
  }
}
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
</style>
