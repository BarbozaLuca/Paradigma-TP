import { verTareas } from "./VerTareas-04.js";
import { esperarTeclaParaContinuar } from "../esperarTecla.js/Tecla-12.js";
import { verDetallesTareas } from "./VerDetalles-08.js";
import { lista } from "./lista-01.js";
export function verTareasPendientes() {
    let hay = 0;
    let opcion = "Pendiente";
    for (let tarea of lista) {
        if (opcion == tarea.estado) {
            hay = 1;
            console.log(`[` + tarea.id + `]`+ tarea.nombre );
        }
    }
    if (hay == 1) {
        console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas pendientes⬆️ ⬆️ ⬆️");
        verDetallesTareas(opcion);
    }
    else {
        console.log("No hay tareas pendientes");
        esperarTeclaParaContinuar();
        verTareas();
    }
}
