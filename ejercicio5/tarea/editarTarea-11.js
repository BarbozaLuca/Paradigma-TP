import { fechaVenci } from './fechaVencimiento-03.js';
import { lista,TipoDeDificultad,TipoDeEstado } from './lista-01.js';
import { menu } from '../menu/menuPrincipal-01.js';
import { esperarTeclaParaContinuar } from '../esperarTecla.js/Tecla-12.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();
export function editarTarea(id) {
    console.log("➡️ Si deseas editarla, presione 1, o presiona 0 para volver al menu principal");
    let opcion = parseInt(prompt(""));
    while (opcion < 0 || opcion > 1) {
        opcion = parseInt(prompt("opcion incorrecta.Ingrese una opcion valida: "));
    }
    console.clear();
    if (opcion == 0) {
        menu();
    }
    else if (opcion == 1) {
        for (let tarea of lista) {
            if (id == tarea.id) {
                console.log("|Estas editando la tarea: "+ tarea.id +"|");
                console.log("➡️ Si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
                console.log("➡️ Si deseas dejar en blanco un atributo, presione 0");
                let opcion2 = prompt("1. Ingresa la descripcion: ");
                if (opcion2 == "") {
                    console.log("Descripción no modificada.");
                }
                else if (opcion2 === "0") {
                    const descripcion = "Sin datos"; // Si el usuario ingresa 0, se borra la descripción.
                    tarea.setDescripcion(descripcion);
                 
                    
                }
                else {
                    tarea.setDescripcion(opcion2);
                }
                opcion = parseInt(prompt("2. Estado ([1]Pendiente/[2]En curso/[3]Terminada/[4]Cancelada): "));
                ;
                while (opcion < 0 || opcion > 4) {
                    opcion = parseInt(prompt("Ingrese una opcion valida: "));
                }
                let estado;
                switch (opcion) {
                    case 0:
                        estado = TipoDeEstado.Vacio;
                        break;
                    case 1:
                        estado = TipoDeEstado.Pendiente;
                        break;
                    case 2:
                        estado = TipoDeEstado.EnCurso;
                        break;
                    case 3:
                        estado = TipoDeEstado.Terminada;
                        break;
                    case 4:
                        estado = TipoDeEstado.Cancelada;
                        break;
                }
                tarea.setEstado(estado);
                opcion = parseInt(prompt("3. Dificultad ([1]Facil/[2]Medio/[3]Dificil): "));
                while (opcion < 0 || opcion > 3) {
                    opcion = parseInt(prompt("Ingrese una opcion valida: "));
                }
                let dificultad
                switch (opcion) {
                    case 0:
                        dificultad = TipoDeDificultad.Vacio;
                    case 1:
                        dificultad = TipoDeDificultad.Facil;
                        break;
                    case 2:
                        dificultad = TipoDeDificultad.Medio;
                        break;
                    case 3:
                        dificultad = TipoDeDificultad.Dificil;
                        break;
                }
                tarea.setDificultad(dificultad);
                const venci = fechaVenci();
                tarea.setVencimiento(venci);
                console.log("¡Datos guardados!");
                esperarTeclaParaContinuar();
            }
        }
    }
}
