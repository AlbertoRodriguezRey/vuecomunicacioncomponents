<template>
    <div>
        <h1>Menu rutas tabla multiplicar</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/tablaMultiplicar/' + num">Tabla del {{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'MenuTablaMultiplicar',
  data() {
    return {
        //generamos numeros aleatorios para las tablas de multiplicar
        numeros: 0
    }
  },
    mounted() {
        this.numeros = [];
        for (let i = 1; i <= 5; i++) {
            const nuevoNumero = parseInt(Math.random() * 100 + 1);
            this.numeros.push(nuevoNumero);
        }
    },
}
</script>

<style scoped>
/* Contenedor principal centrado */
div {
  max-width: 900px;
  margin: 20px auto;
  padding: 32px 24px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(28, 45, 60, 0.1);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  text-align: center;
}

/* Título principal */
h1 {
  margin: 0 0 24px 0;
  font-size: 2rem;
  color: #1c2d3c;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Lista de enlaces */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  display: block;
}

/* Enlaces estilo pill moderno */
a {
  display: inline-block;
  padding: 10px 18px;
  color: #2563eb;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 220ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
}

/* Hover con elevación y color intenso */
a:hover,
a:focus {
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
  border-color: rgba(37, 99, 235, 0.1);
}

/* Estado activo */
.router-link-active {
  color: #ffffff !important;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 6px 18px rgba(29, 78, 216, 0.3);
  border-color: rgba(29, 78, 216, 0.2);
}

/* Focus visible para accesibilidad */
a:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.3);
  outline-offset: 3px;
}

/* Animación de entrada */
li {
  animation: fadeInUp 0.4s ease-out backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Escalonar la animación de cada elemento */
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

/* Responsive */
@media (max-width: 640px) {
  div {
    padding: 24px 18px;
    max-width: 90%;
  }
  
  h1 {
    font-size: 1.6rem;
  }
  
  ul {
    flex-direction: column;
    gap: 10px;
  }
  
  a {
    width: 100%;
    text-align: center;
    padding: 12px 18px;
  }
}
</style>