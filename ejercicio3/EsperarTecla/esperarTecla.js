import prompSync from 'prompt-sync';
const prompt = prompSync();
export function esperarTeclaParaContinuar() {
    prompt("Presione enter para continuar...");
    console.clear();
}
