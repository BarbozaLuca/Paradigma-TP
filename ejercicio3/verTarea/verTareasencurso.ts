import { lista } from "../tarea/lista-01.js";
import { verDetallesTareas } from "../DetallesTarea/verDetallesTareas.js";
import { verTareas } from "./verTareas.js";
import { esperarTeclaParaContinuar } from "../EsperarTecla/esperarTecla.js";

export function verTareasEnCurso(){
    let hay=0;
    let opcion="En curso";
    for(let tarea of lista){
       if(opcion==tarea.estado){
         hay=1;
         console.log(`[`+tarea.id+`] ${tarea.nombre}`);
       }
    }
    if(hay==1){
    console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas en curso⬆️ ⬆️ ⬆️");
    verDetallesTareas(opcion);
    }else{
        console.log("No hay tareas en curso");
        esperarTeclaParaContinuar();
        verTareas();
    }
}