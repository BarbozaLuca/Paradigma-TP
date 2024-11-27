import { lista } from '../tarea/lista-01.js';
import { fechaVenci } from '../tarea/fechaVencimiento-03.ts.js';
import { TipoDeDificultad } from '../tarea/lista-01.js';
import { TipoDeEstado } from '../tarea/lista-01.js';
import { esperarTeclaParaContinuar } from '../EsperarTecla/esperarTecla.js';
import { menu } from '../tarea/menu-01.ts.js';
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
                console.log(`|Estas editando la tarea: ${tarea.nombre}|`);
                console.log("➡️ Si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
                console.log("➡️ Si deseas dejar en blanco un atributo, presione 0");
                let opcion2 = prompt("1. Ingresa la descripcion: ");
                if (opcion2 == "") {
                    console.log("Descripción no modificada.");
                }
                else if (opcion2 === "0") {
                    tarea.descripcion = "Sin datos"; // Si el usuario ingresa 0, se borra la descripción.
                }
                else {
                    tarea.descripcion = opcion2; // Si se ingresa algo distinto, se actualiza la descripción.
                }
                opcion = parseInt(prompt("2. Estado ([1]Pendiente/[2]En curso/[3]Terminada/[4]Cancelada): "));
                ;
                while (opcion < 0 || opcion > 4) {
                    opcion = parseInt(prompt("Ingrese una opcion valida: "));
                }
                switch (opcion) {
                    case 0:
                        tarea.estado = TipoDeEstado.Vacio;
                        break;
                    case 1:
                        tarea.estado = TipoDeEstado.Pendiente;
                        break;
                    case 2:
                        tarea.estado = TipoDeEstado.EnCurso;
                        break;
                    case 3:
                        tarea.estado = TipoDeEstado.Terminada;
                        break;
                    case 4:
                        tarea.estado = TipoDeEstado.Cancelada;
                        break;
                }
                opcion = parseInt(prompt("3. Dificultad ([1]Facil/[2]Medio/[3]Dificil): "));
                while (opcion < 0 || opcion > 3) {
                    opcion = parseInt(prompt("Ingrese una opcion valida: "));
                }
                switch (opcion) {
                    case 0:
                        tarea.dificultad = TipoDeDificultad.Vacio;
                    case 1:
                        tarea.dificultad = TipoDeDificultad.Facil;
                        break;
                    case 2:
                        tarea.dificultad = TipoDeDificultad.Medio;
                        break;
                    case 3:
                        tarea.dificultad = TipoDeDificultad.Dificil;
                        break;
                }
                tarea.vencimiento = fechaVenci();
                console.log("¡Datos guardados!");
                esperarTeclaParaContinuar();
            }
        }
    }
}
