<template>
    <div class="padre-container">
        <h1 class="padre-title">
            Números Padre
        </h1>
        <button @click="nuevoNumero" class="btn-nuevo">
            Nuevo Número
        </button>
        <h2 class="suma-total">
            La suma es: <span class="suma-valor">{{ suma }}</span>
        </h2>
        <hr class="divider"/>
        <ul class="numeros-lista">
            <li v-for="numero in numeros" :key="numero">
                <HijoNumero :numero="numero" 
                v-on:sumarNumeros="sumarNumeros"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';


export default {
    name: 'PadreNumero',
    components: {
        HijoNumero
    },
    methods: {
        sumarNumeros(numeroHijo) {
            console.log("Soy el padre y recibo el numero " + numeroHijo);
            this.suma += numeroHijo;
        },
        nuevoNumero() {
            //Generar un número aleatorio entre 1 y 100
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            this.numeros.push(numeroAleatorio);
        }
    },
    data() {
        return {
            numeros: [22, 37, 41, 56, 73],
            suma: null
        }
    }
}
</script>

<style scoped>
.padre-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.padre-title {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 700;
}

.btn-nuevo {
    display: block;
    margin: 0 auto 1.5rem;
    padding: 12px 30px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
}

.btn-nuevo:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 87, 108, 0.6);
}

.btn-nuevo:active {
    transform: translateY(0);
}

.suma-total {
    text-align: center;
    color: white;
    font-size: 1.8rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    margin: 1.5rem 0;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.suma-valor {
    font-weight: 900;
    color: #ffd700;
    font-size: 2.2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.divider {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    margin: 2rem 0;
}

.numeros-lista {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.numeros-lista li {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>