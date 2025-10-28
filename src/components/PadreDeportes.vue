<template>
    <div>
        <h1 style="color:blue">Padre Deportes</h1>
        <h2 style="background-color: yellow;" v-if="favorito">
            Su deporte favorito es: {{ favorito }}
        </h2>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
            <HijoDeporte :nombredeporte="deporte" 
            v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'

export default {
    name: 'PadreDeportes',
    components: {
        HijoDeporte
    },
    data() {
        return {
            deportes: ['Futbol', 'Baloncesto', 'Tenis', 'Ciclismo'],
            favorito: null
        }
    },
    methods: {
        seleccionarFavoritoParent(deporteFavorito) {
            console.log("Yo soy tu padre " + deporteFavorito);
            this.favorito = deporteFavorito;
        }
    }
}
</script>

<style>

ul {
    list-style-type: none;
    padding: 0;
}

</style>