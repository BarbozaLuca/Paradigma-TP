import { verDetallesTareas } from './VerDetalles-08.js';
import { esperarTeclaParaContinuar } from '../esperarTecla.js/Tecla-12.js';
import { lista } from './lista-01.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();
export function buscarTarea() {
    let buscar;
    console.log("Introduce el título de una tarea para buscarla:");
    buscar = prompt("> ");
    // Convertir la búsqueda a minúsculas para hacer la búsqueda case-insensitive
    buscar = buscar.toLowerCase();
    let tareasEncontradas = lista.filter(tarea => tarea.nombre.toLowerCase().includes(buscar));
    if (tareasEncontradas.length > 0) {
        console.log("Estas son las tareas relacionadas:");
        for (let tarea of tareasEncontradas) {
            console.log(`[${tarea.id}] ${tarea.nombre}`);
        }
        console.log(verDetallesTareas(0));
    }
    else {
        console.log("No hay tareas relacionadas con la búsqueda.");
        esperarTeclaParaContinuar();
    }
}
