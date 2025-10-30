<template>
  <form @submit.prevent class="christmas-form">
    <div class="snow-container">
      <span class="snowflake" style="left: 10%; animation-delay: 0s;">❄️</span>
      <span class="snowflake" style="left: 25%; animation-delay: 1s;">❅</span>
      <span class="snowflake" style="left: 40%; animation-delay: 2s;">❄️</span>
      <span class="snowflake" style="left: 55%; animation-delay: 1.5s;">❅</span>
      <span class="snowflake" style="left: 70%; animation-delay: 0.5s;">❄️</span>
      <span class="snowflake" style="left: 85%; animation-delay: 2.5s;">❅</span>
    </div>
    <div class="christmas-decoration">
      <span class="ornament ornament-left">🎄</span>
      <h1>🎅 Selección Navideña 🎄</h1>
      <span class="ornament ornament-right">🎁</span>
    </div>
    <div class="bells">🔔✨🔔</div>
    <multiselect
      v-model="seleccionados"
      :options="opciones"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="🎁 Selecciona tus regalos favoritos..."
      class="christmas-select"
    />
    <div class="result-container">
      <div class="santa-helper">🤶</div>
      <h2>
        <span class="gift-icon">🎁</span>
        {{ seleccionados.length > 0 ? seleccionados.join(' 🎄 ') : '¡Aún no has elegido tus regalos!' }}
        <span class="gift-icon">🎁</span>
      </h2>
      <div class="santa-helper santa-right">🎅</div>
    </div>
    <div class="footer-decoration">
      ⭐ ❄️ ⭐ ❄️ ⭐ ❄️ ⭐
    </div>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: 'SeleccionMultipleComponent',
  components: { Multiselect },
  data() {
    return {
      opciones: [
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4",
        "Elemento 5",
        "Elemento 6",
        "Elemento 7",
        "Elemento 8"
      ],
      seleccionados: []
    }
  }
}
</script>

<style scoped>
/* Fondo navideño con animación de nieve */
.christmas-form {
  max-width: 750px;
  margin: 2.5rem auto;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 8px #c0392b, 0 0 0 16px #27ae60;
  position: relative;
  overflow: hidden;
  border: 5px solid #ffd700;
  animation: glowBorder 3s infinite alternate;
}

@keyframes glowBorder {
  0% { 
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 8px #c0392b, 0 0 0 16px #27ae60, 0 0 25px #ffd700; 
  }
  100% { 
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 8px #27ae60, 0 0 0 16px #c0392b, 0 0 45px #ffd700; 
  }
}

.christmas-form::before {
  content: '🎄';
  position: absolute;
  font-size: 18rem;
  opacity: 0.04;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

/* Decoración navideña superior */
.christmas-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 10;
}

.ornament {
  font-size: 3.5rem;
  animation: swing 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.ornament-left {
  animation-delay: 0s;
}

.ornament-right {
  animation-delay: 1s;
}

@keyframes swing {
  0%, 100% { transform: rotate(-12deg); }
  50% { transform: rotate(12deg); }
}

.bells {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  animation: jingle 1.2s infinite;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.6));
}

@keyframes jingle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(-18deg) scale(1.05); }
  75% { transform: rotate(18deg) scale(1.05); }
}

h1 {
  color: #fff;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 
    0 0 15px #ffd700,
    0 0 25px #ffd700,
    0 0 35px #e74c3c,
    3px 3px 6px rgba(0, 0, 0, 0.9);
  animation: colorShift 4s infinite alternate;
  position: relative;
  z-index: 10;
  margin: 0;
  line-height: 1.2;
}

@keyframes colorShift {
  0% { 
    text-shadow: 
      0 0 15px #ffd700,
      0 0 25px #ffd700,
      0 0 35px #e74c3c,
      3px 3px 6px rgba(0, 0, 0, 0.9);
  }
  100% { 
    text-shadow: 
      0 0 15px #27ae60,
      0 0 25px #27ae60,
      0 0 35px #ffd700,
      3px 3px 6px rgba(0, 0, 0, 0.9);
  }
}

/* Multiselect navideño */

.christmas-select {
  width: 100%;
  font-size: 1.2rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(231, 76, 60, 0.4), 0 0 20px #ffd700;
  border: 4px solid #ffd700;
  margin-bottom: 18.5rem;
  background: rgba(255, 255, 255, 0.98);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 10;
}

.christmas-select:focus-within {
  box-shadow: 0 0 0 6px #27ae60, 0 10px 40px rgba(39, 174, 96, 0.6);
  border-color: #27ae60;
  transform: scale(1.03);
}

/* Estilos del multiselect - sin superposición */
.multiselect__tags {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #27ae60 100%);
  border-radius: 16px 16px 0 0;
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 800;
  font-size: 1.2rem;
  min-height: 56px;
  box-shadow: 
    inset 0 3px 10px rgba(255, 255, 255, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.3);
  border-bottom: 4px solid #ffd700;
  border: none;
}

.multiselect__tag {
  background: linear-gradient(135deg, #ffd700 0%, #f39c12 100%);
  color: #2c3e50;
  font-weight: 700;
  padding: 0.5rem 1.5rem 0.5rem 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.3rem;
  margin-right: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.multiselect__tag-icon {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 8px 8px 0;
}

.multiselect__tag-icon:hover {
  background: #e74c3c;
}

.multiselect__content-wrapper {
  border: none;
  border-radius: 0 0 16px 16px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.05);
  max-height: 300px;
  overflow-y: auto;
}

.multiselect__option--highlight {
  background: linear-gradient(90deg, #27ae60 0%, #2ecc71 50%, #ffd700 100%);
  color: #fff;
  font-weight: 800;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transform: translateX(5px);
  transition: all 0.3s;
}

.multiselect__option--selected {
  background: linear-gradient(90deg, #e74c3c 0%, #c0392b 50%, #ffd700 100%);
  color: #fff;
  font-weight: 800;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
}

.multiselect__option--selected::after {
  content: '✓';
  position: absolute;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: 900;
}

.multiselect__option {
  font-size: 1.15rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin: 0.4rem 0.5rem;
  transition: all 0.3s;
  border-left: 5px solid transparent;
}

.multiselect__option:hover {
  border-left-color: #ffd700;
}

.multiselect__input {
  background: transparent;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  font-weight: 600;
  border: none;
}

.multiselect__input::placeholder {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

.multiselect__placeholder {
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  font-weight: 600;
  padding-top: 0.5rem;
}

.multiselect__single {
  background: transparent;
  color: #fff;
  font-weight: 700;
  padding-top: 0.5rem;
}

/* Contenedor de resultados - sin superposición */


.result-container {
  position: relative;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  z-index: 10;
  flex-wrap: wrap;
  min-height: 100px;
}

.santa-helper {
  font-size: 3.5rem;
  animation: wave 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
  flex-shrink: 0;
}

.santa-right {
  animation-delay: 1s;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(25deg) scale(1.1); }
  75% { transform: rotate(-25deg) scale(1.1); }
}

h2 {
  color: #ffd700;
  background: linear-gradient(135deg, rgba(231, 76, 60, 0.96) 0%, rgba(192, 57, 43, 0.96) 50%, rgba(39, 174, 96, 0.96) 100%);
  border-radius: 18px;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  box-shadow: 
    0 6px 25px rgba(255, 215, 0, 0.5),
    inset 0 3px 10px rgba(255, 255, 255, 0.25);
  letter-spacing: 1px;
  border: 4px solid #ffd700;
  text-shadow: 
    0 3px 10px rgba(0, 0, 0, 0.9),
    0 0 20px #fff;
  animation: pulse 2.5s infinite;
  flex: 1;
  max-width: 550px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  word-break: break-word;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.gift-icon {
  font-size: 1.8rem;
  display: inline-block;
  animation: rotate 3s linear infinite;
  flex-shrink: 0;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Decoración inferior */
.footer-decoration {
  margin-top: 2rem;
  text-align: center;
  font-size: 2.5rem;
  animation: twinkle 2s infinite;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.6));
}

@keyframes twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.95); }
}

/* Contenedor de copos de nieve - sin superposición */
.snow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

/* Copos de nieve animados mejorados */
.snowflake {
  position: absolute;
  top: -50px;
  color: #fff;
  font-size: 2.5rem;
  opacity: 0.85;
  text-shadow: 0 0 15px #fff, 0 0 25px #4fc3f7;
  animation: snow 10s linear infinite;
  will-change: transform;
}

@keyframes snow {
  0% { 
    transform: translateY(-50px) rotate(0deg) translateX(0); 
    opacity: 0;
  }
  10% {
    opacity: 0.85;
  }
  90% {
    opacity: 0.85;
  }
  100% { 
    transform: translateY(750px) rotate(360deg) translateX(100px); 
    opacity: 0; 
  }
}

/* Espaciado entre elementos */
br {
  display: none;
}

/* Responsive mejorado */
@media (max-width: 768px) {
  .christmas-form {
    padding: 2rem 1.5rem;
    margin: 1.5rem auto;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
    min-height: 70px;
  }
  
  .ornament {
    font-size: 2.5rem;
  }
  
  .santa-helper {
    font-size: 2.5rem;
  }
  
  .bells {
    font-size: 1.8rem;
  }
  
  .result-container {
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .gift-icon {
    font-size: 1.5rem;
  }
  
  .footer-decoration {
    font-size: 2rem;
  }
  
  .snowflake {
    font-size: 2rem;
  }
  
  .christmas-decoration {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .christmas-form {
    padding: 1.5rem 1rem;
  }
  
  h1 {
    font-size: 1.6rem;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1rem;
    padding: 1rem 1.2rem;
    min-height: 60px;
  }
  
  .ornament {
    font-size: 2rem;
  }
  
  .santa-helper {
    font-size: 2rem;
  }
  
  .bells {
    font-size: 1.5rem;
  }
  
  .result-container {
    gap: 0.8rem;
  }
  
  .multiselect__option {
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
  
  .christmas-select {
    font-size: 1rem;
  }
}

/* Scroll personalizado para el dropdown */
.multiselect__content-wrapper::-webkit-scrollbar {
  width: 10px;
}

.multiselect__content-wrapper::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.multiselect__content-wrapper::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #e74c3c, #27ae60);
  border-radius: 10px;
}

.multiselect__content-wrapper::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #c0392b, #229954);
}
</style>