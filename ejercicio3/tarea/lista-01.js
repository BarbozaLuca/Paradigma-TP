import prompSync from 'prompt-sync';
const prompt = prompSync();
export let lista = []; //lista está declarada como un array de objetos del tipo Tarea
let index = 0;
export var TipoDeEstado;
(function (TipoDeEstado) {
    TipoDeEstado["Pendiente"] = "Pendiente";
    TipoDeEstado["EnCurso"] = "En Curso";
    TipoDeEstado["Terminada"] = "Terminada";
    TipoDeEstado["Cancelada"] = "Cancelada";
    TipoDeEstado["Vacio"] = "Sin datos";
})(TipoDeEstado || (TipoDeEstado = {}));
export var TipoDeDificultad;
(function (TipoDeDificultad) {
    TipoDeDificultad["Facil"] = "Facil\u2B50";
    TipoDeDificultad["Medio"] = "Medio\u2B50\u2B50";
    TipoDeDificultad["Dificil"] = "Dificil\u2B50\u2B50\u2B50";
    TipoDeDificultad["Vacio"] = "Sin datos";
})(TipoDeDificultad || (TipoDeDificultad = {}));
export let objecto = {
    id: 0,
    nombre: "",
    descripcion: "",
    estado: TipoDeEstado.Pendiente,
    creacion: new Date,
    ultimaEdicion: new Date(),
    vencimiento: "",
    dificultad: TipoDeDificultad.Facil,
    dia: 0,
    mes: 0,
    anio: 0,
};
