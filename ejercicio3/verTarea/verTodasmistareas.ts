import { lista } from "../tarea/lista-01.js";
import { verDetallesTareas } from "../DetallesTarea/verDetallesTareas.js";

export function verTodasmistareas(){
    console.log("⬇️ ⬇️ ⬇️ Estas son todas tus tareas⬇️ ⬇️ ⬇️");
    for(let tarea of lista){
     console.log(`[`+tarea.id+`] ${tarea.nombre}`);
    }
     verDetallesTareas(0);
}