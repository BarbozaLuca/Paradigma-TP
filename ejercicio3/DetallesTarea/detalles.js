import { editarTarea } from "../EditarTarea/editarTarea.js";
export function detalles(tarea) {
    console.log("Esta es la tarea que elegiste\n" + `Título: ${tarea.nombre}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Crecion: ${tarea.creacion}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    console.log(`Dificultad: ${tarea.dificultad}`);
    editarTarea(tarea.id);
}
