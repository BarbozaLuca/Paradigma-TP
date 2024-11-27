import { fechaVenci } from './fechaVencimiento-03.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();

export let lista = [];

let index=0;
let id;

export const TipoDeEstado = {
      Pendiente:"Pendiente" 
    ,  EnCurso:"En Curso"
    , Terminada:"Terminada"
    , Cancelada:"Cancelada"
    , Vacio:"Sin datos"

}
export const TipoDeDificultad={
    Facil:"Facil⭐", Medio:"Medio⭐⭐", Dificil:"Dificil⭐⭐⭐", Vacio:"Sin datos"
}

export function Tarea() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.estado = TipoDeEstado.Pendiente;
    this.creacion = new Date();
    this.ultimaEdicion = new Date();
    this.vencimiento = "";
    this.dificultad = TipoDeDificultad.Facil;
    this.dia = 0;
    this.mes = 0;
    this.anio = 0;
}

Tarea.prototype.setId =  function  (id) {
    this.id = id;
};

 Tarea.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
};

Tarea.prototype.setDescripcion = function (descripcion) {
    this.descripcion = descripcion;
};

Tarea.prototype.setEstado = function (estado) {
    this.estado = estado;
};

Tarea.prototype.setCreacion = function (fecha) {
    this.creacion = fecha;
};

Tarea.prototype.setVencimiento = function (vencimiento) {
    this.vencimiento = vencimiento;
};

Tarea.prototype.setDificultad = function (dificultad) {
    this.dificultad = dificultad;
};


export function crearTarea() {
    console.log("Estas creando una nueva tarea");

    // Creamos una nueva instancia de Tarea
    let nuevaTarea = new Tarea();

    // Asignamos un ID a la nueva tarea
    nuevaTarea.setId(lista.length + 1);

    // Pedimos los datos al usuario
    const titulo = prompt("Ingrese el título: ");
    nuevaTarea.setNombre(titulo);

    const descripcion = prompt("Ingrese la descripción: ");
    nuevaTarea.setDescripcion(descripcion);

    const fecha = new Date();
    nuevaTarea.setCreacion(fecha);
     
    const venci = fechaVenci();
    nuevaTarea.setVencimiento(venci);

    // Selección de la dificultad
    console.log("\tDificultad de la tarea\n[1]Facil\n[2]Medio\n[3]Dificil");
    let opcion = parseInt(prompt("Seleccione una opción: "));

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

    nuevaTarea.setDificultad(dificultad);

    // Agregamos la nueva tarea a la lista
    lista.push(nuevaTarea);

    console.log("<<<Tarea agregada exitosamente>>>");
}