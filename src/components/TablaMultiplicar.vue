<template>
    <div>
        <ul>
            <li v-for="i in 10" :key="i">
                {{ $route.params.numero }} x {{ i }} = {{ $route.params.numero * i }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TablaMultiplicar',
    mounted() {
        console.log("Param: " + this.$route.params.numero);
        let numero = this.$route.params.numero;
        //AQUI HACEMOS LA LÓGICA DE LA TABLA DE MULTIPLICAR
        this.resultados = [];
        for (let i = 1; i <= 10; i++) {
            this.resultados.push(numero * i);
        }
    },
    data() {
        return {
            resultados: []
        }
    },
    watch: {
        '$route.params.numero'(newVal, oldVal) {
            if (newVal != oldVal) {
                console.log("Esto ha cambiado: " + this.$route.params.numero + " antes era " + oldVal);
                let numero = this.$route.params.numero;
                this.resultados = [];
                for (let i = 1; i <= 10; i++) {
                    this.resultados.push(numero * i);
                }
            }
        }
    }

}

</script>

<style scoped>
/* Contenedor principal */
div {
  max-width: 700px;
  margin: 20px auto;
  padding: 36px 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(28, 45, 60, 0.12);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* Lista de resultados */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

/* Cada item de la tabla */
li {
  padding: 16px 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 4px solid #3b82f6;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e40af;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideIn 0.4s ease-out backwards;
}

/* Hover effect */
li:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.18);
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-left-color: #2563eb;
}

/* Animación de entrada escalonada */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Retraso escalonado para cada elemento */
li:nth-child(1) { animation-delay: 0.05s; }
li:nth-child(2) { animation-delay: 0.1s; }
li:nth-child(3) { animation-delay: 0.15s; }
li:nth-child(4) { animation-delay: 0.2s; }
li:nth-child(5) { animation-delay: 0.25s; }
li:nth-child(6) { animation-delay: 0.3s; }
li:nth-child(7) { animation-delay: 0.35s; }
li:nth-child(8) { animation-delay: 0.4s; }
li:nth-child(9) { animation-delay: 0.45s; }
li:nth-child(10) { animation-delay: 0.5s; }

/* Efecto de alternancia de colores */
li:nth-child(even) {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border-left-color: #a855f7;
  color: #7e22ce;
}

li:nth-child(even):hover {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-left-color: #9333ea;
}

/* Responsive */
@media (max-width: 640px) {
  div {
    padding: 24px 18px;
    max-width: 90%;
  }
  
  li {
    font-size: 1rem;
    padding: 14px 16px;
  }
}
</style>