<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <PadreDeportes/> -->
  <!-- <PadreNumeros/> -->
  <!-- <ComicsComponent/> -->
  <!-- <SeleccionMultiple/> -->
  <!-- <CheckBoxComponent/> -->
  <!-- <MenuComponent/> -->
   <MenuTablaMultiplicar/>
  <router-view></router-view>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PadreDeportes from './components/PadreDeportes.vue'
// import PadreNumeros from './components/PadreNumeros.vue';
// import ComicsComponent from './components/ComicsComponent.vue';
// import SeleccionMultiple from './components/SeleccionMultiple.vue';
// import CheckBoxComponent from './components/CheckBoxComponent.vue';
// import MenuComponent from './components/MenuComponent.vue';
import MenuTablaMultiplicar from './components/MenuTablaMultiplicar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // PadreDeportes
    // PadreNumeros
    // ComicsComponent
    // SeleccionMultiple
    // CheckBoxComponent
    // MenuComponent
    MenuTablaMultiplicar
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
