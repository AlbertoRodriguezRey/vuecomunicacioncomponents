<template>
    <div>
        <h1 style="color:blue">Padre Deportes</h1>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
            <HijoDeporte :nombredeporte="deporte"/>
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
            deportes: ['Futbol', 'Baloncesto', 'Tenis', 'Ciclismo']
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