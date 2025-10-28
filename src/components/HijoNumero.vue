<template>
    <div class="hijo-card">
        <h1 class="numero-hijo">
            <span class="numero-label">Nº</span>
            <span class="numero-value">{{ numero }}</span>
        </h1>
        <button @click="callSumarNumeros" class="btn-seleccionar">
            Seleccionar
        </button>
    </div>
</template>

<script>
export default {
    name: 'HijoNumero',
    props: ["numero"],
    methods: {
        callSumarNumeros() {
            this.$emit("sumarNumeros", this.numero);
        }
    },
}
</script>

<style scoped>
.hijo-card {
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.hijo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
}

.numero-hijo {
    color: #667eea;
    text-align: center;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.numero-label {
    font-size: 1rem;
    opacity: 0.7;
    font-weight: 500;
}

.numero-value {
    font-weight: 900;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.btn-seleccionar {
    width: 100%;
    padding: 12px 20px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(79, 172, 254, 0.3);
}

.btn-seleccionar:hover {
    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.5);
}

.btn-seleccionar:active {
    transform: scale(0.98);
}
</style>