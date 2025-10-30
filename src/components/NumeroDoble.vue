<template>
    <div>
        <h1>Numero Doble {{ doble }}</h1>
        <h2 style="color: red;">
            {{ mensaje }} 
        </h2>
    </div>
</template>

<script>
export default {
    name: 'NumeroDoble',
    mounted() {
        console.log("Param: " + this.$route.params.numero);
        //LOS PARAMETROS SIEMPRE SON STRING, NO IMPORTA SI SON NUMERICOS
        let numero = this.$route.params.numero;
        if (numero == "") {
            this.mensaje = "Sin parametros en Routing"
        } else {
            this.mensaje = "Parametro recibido: " + numero
            this.doble = parseInt(numero) * 2;
        }
    },
    watch: {
        '$route.params.numero'(newVal, oldVal) {
            if (newVal != oldVal) {
                this.mensaje = "Esto ha cambiado: " + this.$route.params.numero;
                this.doble = parseInt(this.$route.params.numero) * 2;
                console.log("Next: " + newVal)
                console.log("Prev: " + oldVal)
            }
        }
    },
    data() {
        return {
            mensaje: "",
            doble: 0
        }
    }
}
</script>

<style scoped></style>