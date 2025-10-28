<template>
    <div>
        <h1 style="color:red">Hijo {{ nombredeporte }}</h1>
        <button @click="seleccionarFavorito">
            Seleccionar favorito
        </button>
    </div>
</template>

<script>
export default {
    name: 'HijoDeporte',
    props: ['nombredeporte'],
    mounted() {
        console.log(this.nombredeporte);
    },
    methods: {
        seleccionarFavorito() {
            console.log("Soy el hijo " + this.nombredeporte)
            //PARA ENVIAR INFORMACIÓN SE REALIZA A PARTIR DE LA LLAMADA
            //CON CADA PARAMETRO SEPARADO CON COMAS, DENTRO DEL METODO
            //$emit
            this.$emit("seleccionarFavoritoParent", this.nombredeporte);
        }
    },
}
</script>

<style>

</style>