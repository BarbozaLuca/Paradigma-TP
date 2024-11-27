import { objecto } from './lista-01.js';
import prompSync from 'prompt-sync';

const prompt = prompSync();

export function fechaVenci(){
    let a,b,c;
    console.log("Fecha de vencimiento");
    a=prompt("Ingrese el dia: ");
    if(a!=""){
        a=parseInt(a);
        objecto.dia=a;
        while( objecto.dia<1 || objecto.dia>31){
            objecto.dia=parseInt(prompt("Dia no valido, ingrese nuevamente porfavor: "));
        }
    }
    else if(a==""){
        objecto.dia=objecto.dia;
    }
    b=prompt("Ingrese el mes: ");
    if(b!=""){
        b=parseInt(b);
        objecto.mes=b
    while(objecto.mes<1 || objecto.mes>12){
        objecto.mes=parseInt(prompt("Mes no valido, ingrese nuevamente porfavor: "));
      }
    }else if(b==""){
        objecto.mes=objecto.mes;
    }
    c=prompt("Ingrese el anio: ");
    if(c!=""){
        c=parseInt(c);
        objecto.anio=c;
    while(objecto.anio<2024){
        objecto.anio=parseInt(prompt("anio no valido, ingrese nuevamente porfavor: "));
     }
    }else if(c==""){
        objecto.anio=objecto.anio;
    }
    return objecto.vencimiento=" "+objecto.dia+"/"+objecto.mes+"/"+objecto.anio;
}