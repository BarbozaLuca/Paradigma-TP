import { verTareas } from "./VerTareas-04.js";
import { esperarTeclaParaContinuar } from "../esperarTecla.js/Tecla-12.js";
import { verDetallesTareas } from "./VerDetalles-08.js";
import { lista } from "./lista-01.js";
export function verTareasEnCurso() {
    let hay = 0;
    let opcion = "En curso";
    for (let tarea of lista) {
        if (opcion == tarea.estado) {
            hay = 1;
            console.log(`[` + tarea.id + `] ` + tarea.nombre);
        }
    }
    if (hay == 1) {
        console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas en curso⬆️ ⬆️ ⬆️");
        verDetallesTareas(opcion);
    }
    else {
        console.log("No hay tareas en curso");
        esperarTeclaParaContinuar();
        verTareas();
    }
}
