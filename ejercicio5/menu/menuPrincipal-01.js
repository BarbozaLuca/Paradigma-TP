import prompSync from 'prompt-sync';
const prompt = prompSync();
let opcionUnica
    
export function menu(){
    console.log("\t>>>Menu<<<");
    console.log("[1] Agregar una tarea\n[2] Buscar una tareas\n[3] Ver mis tareas\n[0] Salir");
    opcionUnica = prompt("Ingrese una opcion: ");
    opcionUnica = parseInt(opcionUnica);
    while (opcionUnica < 0 || opcionUnica > 4) {
        console.log("Cuidado, opcion incorrecta!!\nIngrese una opcion valida");
        opcionUnica = prompt("");
        opcionUnica = parseInt(opcionUnica);
    }
    // console.clear();
    return opcionUnica;
}