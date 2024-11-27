import { crearNuevaTarea,setId,setAgregarTitulo,setDescripcion,setCreacion,setDificultad,setVencimiento,TipoDeDificultad,lista,TipoDeEstado, setEstado } from './lista-01.js';
import { fechaVenci } from './fechaVencimiento-03.js';
import prompSync from 'prompt-sync';
let opcion;
const prompt = prompSync();
let index = 0;
export function crearTarea(){
    console.log("Estas creando una nueva tarea");
    // Creamos una nueva tarea basada en el objeto base
    let nuevaTarea = crearNuevaTarea();
    index = index + 1;
    setId(nuevaTarea , index);
    let titulo=prompt("Ingrese el titulo: ");
    setAgregarTitulo(nuevaTarea ,titulo);
    const descripcion=prompt("Ingrese la descripcion: ");
    setDescripcion(nuevaTarea, descripcion);
    const fecha = new Date();
    setCreacion(nuevaTarea, fecha);
    const stado=TipoDeEstado.Pendiente;
    setEstado(nuevaTarea, stado);
    const venci=fechaVenci();
    setVencimiento(nuevaTarea, venci);
    console.log("\tDificultad de la tarea\n[1]Facil\n[2]Medio\n[3]Dificil");
    opcion = parseInt(prompt("Seleccione una opcion: "));
    let dificultad;
    switch (opcion) {
        case 1:
            dificultad = TipoDeDificultad.Facil;
            break;
        case 2:
            dificultad = TipoDeDificultad.Medio;
            break;
        case 3:
            dificultad = TipoDeDificultad.Dificil;
            break;
        default:
            dificultad = TipoDeDificultad.Facil;
            break;
    }
    setDificultad(nuevaTarea, dificultad);            

    // Clonamos el objeto 'tarea' antes de agregarlo a la lista
    // let nuevaTarea = Object.assign({}, tarea); // Clonamos 'tarea'
    lista.push(nuevaTarea); // Agregamos la nueva tarea a la lista

    console.log("<<<Tarea agregada exitosamente>>>");
}