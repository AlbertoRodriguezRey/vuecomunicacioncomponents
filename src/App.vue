<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <PadreDeportes/> -->
  <!-- <PadreNumeros/> -->
  <ComicsComponent/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PadreDeportes from './components/PadreDeportes.vue'
// import PadreNumeros from './components/PadreNumeros.vue';
import ComicsComponent from './components/ComicsComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // PadreDeportes
    // PadreNumeros
    ComicsComponent
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
