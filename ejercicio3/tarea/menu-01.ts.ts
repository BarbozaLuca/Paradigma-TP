
let opcionUnica;
let bandera=0;
import prompSync from 'prompt-sync';
import { crearTarea } from '../crearTarea/CreandoTareas-02.ts.js';
import { verTareas } from '../verTarea/verTareas.js';
import { buscarTarea } from '../buscarTarea/buscarTarea.js';

const prompt = prompSync();

export function menu(){
  do{
    console.log("\t>>>Menu<<<");
    console.log("[1] Agregar una tarea\n[2] Buscar una tareas\n[3] Ver mis tareas\n[0] Salir");
    opcionUnica=prompt("Ingrese una opcion: ");
    opcionUnica=parseInt(opcionUnica);
    while(opcionUnica<0 || opcionUnica>4){
         console.log("Cuidado, opcion incorrecta!!\nIngrese una opcion valida");
         opcionUnica=prompt("");
        opcionUnica=parseInt(opcionUnica);
       }
       console.clear();
       switch(opcionUnica){
            case 1:
            bandera=1;
             crearTarea();
  
          break;
          case 2:
            if(bandera==0){
                console.log("No hay tareas!!")
            }
            else{    
                buscarTarea();
            }
            break;
          case 3:
          if(bandera==0){
              console.log("No hay tareas!!")
          }
          else{    
              verTareas();
          }
          break;
  }
 }while(opcionUnica!=0);
}
