import { verTareas } from "./VerTareas-04.js";
import { verDetallesTareas } from "./VerDetalles-08.js";
import { lista } from "./lista-01.js";
import { esperarTeclaParaContinuar } from "../esperarTecla.js/Tecla-12.js";
export function verTareasTerminada() {
    let hay = 0;
    let opcion = "Terminada";
    for (let tarea of lista) {
        if (opcion === tarea.estado) {
            hay = 1;
            console.log(`[` + tarea.id + `] ` + tarea.nombre);
        }
    }
    if (hay == 1) {
        console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas terminadas⬆️ ⬆️ ⬆️");
        verDetallesTareas(opcion);
    }
    else {
        console.log("No hay tareas terminadas");
        esperarTeclaParaContinuar();
        verTareas();
    }
}