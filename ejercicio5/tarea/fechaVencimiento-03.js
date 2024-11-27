import { Tarea } from './lista-01.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();
export function fechaVenci() {
    let a, b, c;
    console.log("Fecha de vencimiento");
    a = prompt("Ingrese el dia: ");
    if (a != "") {
        a = parseInt(a);
        Tarea.dia = a;
        while (Tarea.dia < 1 || Tarea.dia > 31) {
            Tarea.dia = parseInt(prompt("Dia no valido, ingrese nuevamente porfavor: "));
        }
    }
    else if (a == "") {
        Tarea.dia = Tarea.dia;
    }
    b = prompt("Ingrese el mes: ");
    if (b != "") {
        b = parseInt(b);
        Tarea.mes = b;
        while (Tarea.mes < 1 || Tarea.mes > 12) {
            Tarea.mes = parseInt(prompt("Mes no valido, ingrese nuevamente porfavor: "));
        }
    }
    else if (b == "") {
        Tarea.mes = Tarea.mes;
    }
    c = prompt("Ingrese el anio: ");
    if (c != "") {
        c = parseInt(c);
        Tarea.anio = c;
        while (Tarea.anio < 2024) {
            Tarea.anio = parseInt(prompt("anio no valido, ingrese nuevamente porfavor: "));
        }
    }
    else if (c == "") {
        Tarea.anio = Tarea.anio;
    }
    return Tarea.vencimiento = " " + Tarea.dia + "/" + Tarea.mes + "/" + Tarea.anio;
}
