let opcion;
import { Division } from './Clases/Division-04.js';
import { Multiplicacion } from './Clases/Multiplicacion-03.js';
import { Resta } from './Clases/Resta-02.js';
import { Suma } from './Clases/Suma-01.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();

const sumaA = new Suma();
const restaA = new Resta();
const multiplicacionA = new Multiplicacion();
const divisionA = new Division();

do{
console.log("Bienevenidos a la super calculadora");
console.log("\tMENU");
console.log("[1] Suma\n[2]Resta\n[3]Multiplicacion\n[4]Division\n[5]Salir");
opcion=parseInt(prompt("Elija la operacion que desea realizar > "));
while(isNaN(opcion) || opcion<1 || opcion>5){
    console.log("Opcion no valida, ingrese nuevamente porfavor");
    opcion=parseInt(prompt("> "));
}
switch(opcion){
    case 1:
        sumaA.realizarSuma();
        break;
    case 2:
        restaA.realizarResta();
        break;
    case 3:
        multiplicacionA.realizarMultiplicacion();
        break;
    case 4:
        divisionA.realizarDivision();
        break;  
}
}while(opcion!=5);