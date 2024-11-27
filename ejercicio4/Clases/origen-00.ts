import prompSync from 'prompt-sync';
const prompt = prompSync();
export class origen {

    protected a:number;
    protected b:number;
    protected d:number;

    constructor(){
        this.a=0;
        this.b=0;
        this.d=0;
    }
    
    protected operarExtra(RESUL:number){
         let opcion;
             console.log("Si Desea realizar un calculo extra con dicho resultado");
             console.log("[1] Suma\n[2]Resta\n[3]Multiplicacion\n[4]Division\n[5]Salir");
             opcion=parseInt(prompt("Elija la operacion que desea realizar > "));
             switch(opcion){
                case 1:
                    do{
                    this.d=parseInt(prompt("Ingrese el numero: "));
                    if(isNaN(this.d)){
                        console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
                    }
                    }while(isNaN(this.d))
                    console.log("➡️ Resultado de "+RESUL+"+"+this.d+": "+(RESUL=RESUL+this.d));
                    this.operarExtra(RESUL);
                   break;
                case 2:
                    do{
                        this.d=parseInt(prompt("Ingrese el numero: "));
                        if(isNaN(this.d)){
                            console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
                        }
                        }while(isNaN(this.d))
                    console.log("➡️ Resultado de "+RESUL+"-"+this.d+": "+(RESUL=RESUL-this.d));
                    this.operarExtra(RESUL);
                    break;
                case 3:
                    do{
                        this.d=parseInt(prompt("Ingrese el numero: "));
                        if(isNaN(this.d)){
                            console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
                        }
                        }while(isNaN(this.d))
                    console.log("➡️ Resultado de "+RESUL+"*"+this.d+": "+(RESUL=RESUL*this.d));
                    this.operarExtra(RESUL);
                    break;
                case 4:
                    do{
                    this.d=parseInt(prompt("Ingrese el numero: "));
                    if(isNaN(this.d)){
                        console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
                    }
                    if(this.d==0){
                        console.log("Error, no se puede dividir por 0, ingrese nuevamente por favor.\nIngrese el numero");
                    }
                    }while(isNaN(this.d)||this.d==0)
                    console.log("➡️ Resultado de "+RESUL+"/"+this.d+": "+(RESUL=RESUL/this.d));
                    this.operarExtra(RESUL);
                    break;
             }
    }

}

