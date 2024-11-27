import prompSync from 'prompt-sync';

const prompt = prompSync();

export let lista:tarea [] = [];//lista está declarada como un array de objetos del tipo Tarea

let index=0;

export enum TipoDeEstado{
      Pendiente="Pendiente"
    , EnCurso="En Curso"
    , Terminada="Terminada"
    , Cancelada="Cancelada"
    , Vacio="Sin datos"

}
export enum TipoDeDificultad{
    Facil="Facil⭐", Medio="Medio⭐⭐", Dificil="Dificil⭐⭐⭐", Vacio="Sin datos"
}

export interface tarea{
    id: number;  // una interfaz nos dice qué propiedades y tipos debe tener un objeto.
    nombre: string;
    descripcion: string;
    estado: TipoDeEstado;
    creacion: Date;
    ultimaEdicion: Date;
    vencimiento: string;
    dificultad: TipoDeDificultad;
    dia: number;
    mes: number;
    anio: number;
}

export let objecto: tarea = {  //Inicializamos el objecto
     id: 0 ,
     nombre: "",
     descripcion:"" ,
     estado: TipoDeEstado.Pendiente,
     creacion: new Date,
     ultimaEdicion: new Date(),
     vencimiento: "",
     dificultad: TipoDeDificultad.Facil,
     dia: 0,
     mes: 0,
     anio: 0,
};