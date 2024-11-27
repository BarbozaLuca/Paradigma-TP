import { objecto } from '../tarea/lista-01.js';
import { TipoDeDificultad } from '../tarea/lista-01.js';
import { lista } from '../tarea/lista-01.js';
import { fechaVenci } from '../tarea/fechaVencimiento-03.ts.js';
import prompSync from 'prompt-sync';
let opcion;
const prompt = prompSync();
let index = 0;
export function crearTarea() {
    let nuevaTarea = Object.assign({}, objecto);
    console.log("Estas creando una nueva tarea");
    index = index + 1;
    nuevaTarea.id = index;
    nuevaTarea.nombre = prompt("Ingrese el titulo: ");
    nuevaTarea.descripcion = prompt("Ingrese la descripcion: ");
    nuevaTarea.creacion = new Date();
    nuevaTarea.vencimiento = fechaVenci();
    console.log("\tDificultad de la tarea\n[1]Facil\n[2]Medio\n[3]Dificil");
    opcion = parseInt(prompt("Seleccione una opcion: "));
    switch (opcion) {
        case 1:
            nuevaTarea.dificultad = TipoDeDificultad.Facil;
            break;
        case 2:
            nuevaTarea.dificultad = TipoDeDificultad.Medio;
            break;
        case 3:
            nuevaTarea.dificultad = TipoDeDificultad.Dificil;
            break;
        default:
            nuevaTarea.dificultad = TipoDeDificultad.Facil;
    }
    lista.push(nuevaTarea);
    console.clear();
    console.log("<<<Tarea agregada exitosamente>>>");
}
