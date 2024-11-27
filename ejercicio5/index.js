import { verTareas } from './tarea/VerTareas-04.js';
import { menu } from './menu/menuPrincipal-01.js';
import { buscarTarea } from './tarea/BuscarTarea-13.js';
// import { crearTarea } from './tarea/crearTarea-02.js';
import { crearTarea } from './tarea/lista-01.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();
let opcionUnica,bandera;
do{
 opcionUnica=menu();
 switch (opcionUnica) {
    case 1:
        bandera = 1;
        crearTarea();
        break;
    case 2:
        if (bandera == 0) {
            console.log("No hay tareas!!");
        }
        else {
            buscarTarea();
        }
        break;
    case 3:
        if (bandera == 0) {
            console.log("No hay tareas!!");
        }
        else {
            verTareas();
        }
        break;
}

}while(opcionUnica!=0);