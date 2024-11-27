import { verTodasmistareas } from './verTodasmistareas.js';
import { verTareasPendientes } from './VerTareaspendientes.js';
import { verTareasEnCurso } from './verTareasencurso.js';
import { verTareasTerminada } from './verTareasterminadas.js';
import { menu } from '../tarea/menu-01.ts.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();

let opcion;
export function verTareas(){
         console.log("¿Que tareas deseas ver?\n[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[0] Volver");
         opcion=parseInt(prompt("> "));
         while(opcion<0 || opcion>4){
            console.log("opcion incorrecta!, ingrese una opcion valida");
            opcion=prompt("> ");
            opcion=parseInt(opcion);
         }
         console.clear();
         switch(opcion){
             case 0:
                menu();
                break;
             case 1:
                verTodasmistareas();
                break; 
             case 2:
                verTareasPendientes();
                break;
             case 3:
                verTareasEnCurso();
                break;
             case 4:
                verTareasTerminada();
                break;
            }
        }