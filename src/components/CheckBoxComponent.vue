<template>
    <form>
        <div>
            <h1>
                Ejemplo Checkbox
            </h1>
            <button @click.prevent="generarCheckbox" type="button">
                Generar checkbox
            </button>
            <div v-for="numero in numeros" :key="numero">
                <input type="checkbox" :id="'numero' + numero" :value="numero" v-model="seleccionados"/>
                <label :for="'numero' + numero">{{ numero }}</label>
            </div>
            <h2 style="color: blue;">
                La suma seleccionada es: {{ sumatorio }}
            </h2>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CheckBoxComponent',
    data() {
        return {
            numeros: [14,22,1,35,8,42,7,19],
            seleccionados: []
        }
    },
    methods: {
        generarCheckbox() {
            //SUMAMOS UN VALOR NUEVO AL ARRAY DE NÚMEROS
            const nuevoNumero = parseInt(Math.random() * 100 + 1);
            this.numeros.push(nuevoNumero);
        }
    },
    computed: {
        sumatorio() {
            let suma = 0;
            this.seleccionados.forEach(num => {
                suma += num;
            });
            return suma;
        }
    }
}
</script>

<style scoped>
form {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%);
  padding: 3rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

form::before {
  content: '🎃';
  position: absolute;
  font-size: 15rem;
  opacity: 0.05;
  top: 10%;
  right: 10%;
  animation: float 6s ease-in-out infinite;
}

form::after {
  content: '🦇';
  position: absolute;
  font-size: 8rem;
  opacity: 0.08;
  bottom: 15%;
  left: 5%;
  animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 20px #ff6b35, 0 0 40px #ff6b35, 0 0 60px #ff6b35; }
  50% { text-shadow: 0 0 30px #ff8c42, 0 0 60px #ff8c42, 0 0 90px #ff8c42; }
}

h1 {
  color: #ff6b35;
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: glow 2s ease-in-out infinite;
  font-weight: 900;
  position: relative;
}

h1::before {
  content: '👻 ';
}

h1::after {
  content: ' 👻';
}

button {
  display: block;
  margin: 0 auto 3rem;
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #1a0b2e;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4), 0 0 20px rgba(255, 140, 66, 0.3);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
}

button::before {
  content: '🎃';
  margin-right: 0.5rem;
}

button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

button:hover::after {
  width: 300px;
  height: 300px;
}

button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.6), 0 0 30px rgba(255, 140, 66, 0.5);
}

button:active {
  transform: translateY(-2px) scale(1.02);
}

div > div {
  background: rgba(45, 27, 78, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 15px;
  padding: 1.2rem 2rem;
  margin: 1rem auto;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

div > div:hover {
  background: rgba(45, 27, 78, 0.9);
  border-color: #ff6b35;
  transform: translateX(10px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

input[type="checkbox"] {
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid #ff6b35;
  border-radius: 8px;
  background: rgba(26, 11, 46, 0.8);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

input[type="checkbox"]:hover {
  border-color: #ff8c42;
  box-shadow: 0 0 15px rgba(255, 107, 53, 0.6);
}

input[type="checkbox"]:checked {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  border-color: #ff8c42;
  animation: pulse 0.5s ease;
}

input[type="checkbox"]:checked::after {
  content: '🎃';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

label {
  color: #ffa07a;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
  flex: 1;
}

label:hover {
  color: #ff8c42;
}

h2 {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 107, 53, 0.15);
  backdrop-filter: blur(10px);
  border: 3px solid #ff6b35;
  border-radius: 20px;
  font-size: 2.2rem;
  font-weight: 800;
  color: #ff8c42 !important;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3), inset 0 0 20px rgba(255, 107, 53, 0.1);
  animation: glow 3s ease-in-out infinite;
  position: relative;
}

h2::before {
  content: '🕷️';
  position: absolute;
  left: 1rem;
  animation: float 4s ease-in-out infinite;
}

h2::after {
  content: '🕸️';
  position: absolute;
  right: 1rem;
  animation: float 5s ease-in-out infinite reverse;
}

/* Efectos de partículas */
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

div > div {
  animation: fadeIn 0.5s ease-out backwards;
}

div > div:nth-child(1) { animation-delay: 0.1s; }
div > div:nth-child(2) { animation-delay: 0.2s; }
div > div:nth-child(3) { animation-delay: 0.3s; }
div > div:nth-child(4) { animation-delay: 0.4s; }
div > div:nth-child(5) { animation-delay: 0.5s; }
div > div:nth-child(6) { animation-delay: 0.6s; }
div > div:nth-child(7) { animation-delay: 0.7s; }
div > div:nth-child(8) { animation-delay: 0.8s; }
</style>