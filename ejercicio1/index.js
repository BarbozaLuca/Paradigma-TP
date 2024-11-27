// const prompt= require('prompt-sync')();
// let num1=0;
// let num2=0;
// let opcion;
// let n1_suma,n2_Resta,n3_Multiplicacion,n4_Division;
// console.log("bienvenidos a la super calculadora");
// num1=prompt("ingrese un numero: ");
// num1=parseInt(num1);
// num2=prompt("ingrese el segundo numero: ");
// num2=parseInt(num2);
// do{
// console.log("\tmenu\n1_suma\n2_Resta\n3_Multiplicacion\n4_Division\n5_Salir");
// opcion=prompt("ingrese la operacion que desea realizar: ");
// opcion=parseInt(opcion);
// switch(opcion){
//     case 1:
//         n1_suma=num1+num2;
//         console.log("El resultado de su suma es ["+n1_suma+"]");
//         break;
//     case 2:
//         n2_Resta=num1-num2;
//         console.log("El resultado de su resta es ["+n2_Resta+"]");
//         break;
//     case 3:
//         n3_Multiplicacion=num1*num2;
//         console.log("El resultado de la multiplicacion es ["+n3_Multiplicacion+"]");
//         break;
//     case 4:
//         n4_Division=num1/num2;
//         console.log("El resultado de su division es ["+n4_Division+"]");
//         break;
//     default: 
//         console.log("ingrese una opcion valida");
//         break;
// }
// }while(opcion!=5);

let prompt= require('prompt-sync')();
let num1=0;
let num2=0;
let opcion;
let n1_suma=0,n2_Resta=0,n3_Multiplicacion=0,n4_Division=0;
console.log("bienvenidos a la super calculadora");
do{
console.log("\tmenu\n1_suma\n2_Resta\n3_Multiplicacion\n4_Division\n5_Salir");
opcion=prompt("ingrese la operacion que desea realizar: ");
opcion=parseInt(opcion);
switch(opcion){
    case 1:
        for(i=0;i<100;i++){
        num1=prompt("ingrese el numero:"); 
        num1=parseInt(num1);
        n1_suma=n1_suma+num1
        n1_suma=parseInt(n1_suma);
        console.log("Resultado:["+n1_suma+"]");
        console.log("Desea sumar otro numero?\n1_Si\n2_No");
        opcion=prompt("Ingrese una opcion: ");
        opcion=parseInt(opcion);
        if(opcion==2){
            i=100;
        }
        }
        break;
    case 2:
        let aux=0;
        console.log("Ingrese los numeros que desea restar");
        num1=prompt("");
        num1=parseInt(num1);
        num2=prompt("-");
        num2=parseInt(num2);
        n2_Resta=num1-num2;
        console.log("Resultado:["+n2_Resta+"]");
        for(i=0;i<100;i++){
        console.log("Desea restar otro numero al resultado?\n1_Si\n2__No");
        opcion=prompt("");
        opcion=parseInt(opcion);
        if(opcion==1){
        aux=prompt("ingrese el numero: ");
        aux=parseInt(aux);   
        n2_Resta=n2_Resta-aux;
        console.log("Resultado:["+n2_Resta+"]");
        }
        else{
            i=100;
        }   
        }
        break;
    case 3:
        let auxiliar=0;
        console.log("Ingrese los numeros que desea multiplicar");
        num1=prompt("");
        num1=parseInt(num1);
        num2=prompt("");
        num2=parseInt(num2);
        n3_Multiplicacion=num1*num2;
        console.log("Resultado:["+n3_Multiplicacion+"]");
        for(i=0;i<100;i++){
        console.log("Desea multiplicar otro numero al resultado?\n1_Si\n2__No");
        opcion=prompt("");
        opcion=parseInt(opcion);
        if(opcion==1){
        auxiliar=prompt("ingrese el numero: ");
        auxiliar=parseInt(auxiliar);   
        n3_Multiplicacion=n3_Multiplicacion*auxiliar;
        console.log("Resultado:["+n3_Multiplicacion+"]");
        }
        else{
            i=100;
        }   
        }
        break;
    case 4:
        let auxil=0;
        console.log("ingrese los numeros que desea dividir");
        num1=prompt("");
        num1=parseInt(num1);
        num2=prompt("");
        num2=parseInt(num2);
        n4_Division=num1/num2;
        console.log("Resultado:["+n4_Division+"]");
        for(i=0;i<100;i++){
            console.log("Desea dividir otro numero al resultado?\n1_Si\n2__No");
            opcion=prompt("");
            opcion=parseInt(opcion);
            if(opcion==1){
            auxiliar=prompt("ingrese el numero: ");
            auxiliar=parseInt(auxil);   
            n4_Division=n4_Division*auxil;
            console.log("Resultado:["+n4_Division+"]");
            }
            else{
                i=100;
            }   
            }
        break;
    default: 
        console.log("ingrese una opcion valida");
        break;
}
}while(opcion!=5);