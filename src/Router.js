import { createRouter, createWebHistory } from "vue-router";
import PadreDeportes from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import SeleccionMultiple from "./components/SeleccionMultiple.vue";
import CheckBoxComponent from "./components/CheckBoxComponent.vue";
import NumeroDoble from "./components/NumeroDoble.vue";


const myRoutes = [
    {path: '/deportes', component: PadreDeportes},
    {path: '/comics', component: ComicsComponent},
    {path: '/numeros', component: PadreNumeros},
    {path: '/seleccionMultiple', component: SeleccionMultiple},
    {path: '/checkbox', component: CheckBoxComponent},
    {path: '/numeroDoble/:numero?', component: NumeroDoble}]

    const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
    })

export default router;