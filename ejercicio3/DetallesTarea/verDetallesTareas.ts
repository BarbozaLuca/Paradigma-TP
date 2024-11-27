import { detalles } from "./detalles.js";
import { lista } from "../tarea/lista-01.js";
import { verTareas } from "../verTarea/verTareas.js";
import prompSync from 'prompt-sync';
const prompt = prompSync();

export function verDetallesTareas(VTT:number|string){
            console.log("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver");
            let opcion = parseInt(prompt("> "));
            
            let tareaEncontrada = null;
        
            for (let tarea of lista) {
                if (VTT == 0 || VTT == tarea.estado) {
                    if (opcion == tarea.id) {
                        tareaEncontrada = tarea;  // Si se encuentra la tarea, la asignamos
                        break;  // Salir del bucle si encontramos la tarea
                    }
                }
            }
        
            // Si encontramos la tarea, mostramos sus detalles
            if (tareaEncontrada) {
                console.clear();
               detalles(tareaEncontrada);
            } else if (opcion != 0) {  // Si la opción no es 0 y no se encontró tarea, pedir una opción válida
                console.log("Opción incorrecta!!!, ingrese una opción válida");
                verDetallesTareas(VTT);  // Volver a llamar a la función para pedir una nueva opción
            }
            if(opcion==0){
                verTareas();
            }
        }