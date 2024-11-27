import { origen } from './origen-00.js';
import prompSync from 'prompt-sync';
const prompt = prompSync();
export class Multiplicacion extends origen {
    constructor() {
        super();
        this.c = 0;
    }
    realizarMultiplicacion() {
        do {
            console.log("Ingrese el primer numero");
            this.a = parseInt(prompt("> "));
            if (isNaN(this.a)) {
                console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
            }
        } while (isNaN(this.a));
        do {
            console.log("Ingrese el segundo numero");
            this.b = parseInt(prompt("> "));
            if (isNaN(this.b)) {
                console.log("Error: el valor ingresado no es un número. Por favor, intente de nuevo.");
            }
        } while (isNaN(this.b));
        this.c = this.a * this.b;
        console.log("➡️ Resultado de " + this.a + "*" + this.b + ":" + this.c);
        this.operarExtra(this.c);
    }
}
