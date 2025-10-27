<template>
    <div>
        <h1 style="color:red">Hijo hace {{ nombredeporte }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HijoDeporte',
    props: ['nombredeporte'],
    mounted() {
        console.log(this.nombredeporte);
    }
}
</script>

<style>

</style>