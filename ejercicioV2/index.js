const prompt=require('prompt-sync')();

let opcion,opcionUnica;
let bandera=0;
let index=0;
let lista = [];
        function esperarTeclaParaContinuar(){
            prompt("Presione enter para continuar...");
            console.clear();
        }
        function fechaVencimiento(objeto){
            let dia,mes,anio;
            let a,b,c;
            console.log("Fecha de vencimiento");
            a=prompt("Ingrese el dia: ");
            if(a!=""){
                objeto.dia=a;
                while(objeto.dia<1 || objeto.dia>31){
                    objeto.dia=prompt("Dia no valido, ingrese nuevamente porfavor: ");
                }
            }
            else if(a==""){
                objeto.dia=objeto.dia;
            }
            b=prompt("Ingrese el mes: ");
            if(b!=""){
                objeto.mes=b
            while(objeto.mes<1 || objeto.mes>12){
                objeto.mes=prompt("Mes no valido, ingrese nuevamente porfavor: ");
              }
            }else if(b==""){
                objeto.mes=objeto.mes;
            }
            c=prompt("Ingrese el anio: ");
            if(c!=""){
                objeto.anio=c;
            while(objeto.anio<2024){
                objeto.anio=prompt("anio no valido, ingrese nuevamente porfavor: ");
             }
            }else if(c==""){
                objeto.anio=objeto.anio;
            }
            objeto.vencimiento=" "+objeto.dia+"/"+objeto.mes+"/"+objeto.anio;
        }
          function menu(){
            console.log("\t>>>Menu<<<");
            console.log("[1] Agregar una tarea\n[2] Buscar una tareas\n[3] Ver mis tareas\n[0] Salir");
            opcionUnica=prompt("Ingrese una opcion: ");
            opcionUnica=parseInt(opcionUnica);
            while(opcionUnica<0 || opcionUnica>4){
                 console.log("Cuidado, opcion incorrecta!!\nIngrese una opcion valida");
                 opcionUnica=prompt("");
                opcionUnica=parseInt(opcionUnica);
               }
               console.clear();
               switch(opcionUnica){
                    case 1:
                    bandera=1;
                   console.log(crearTarea());
          
                  break;
                  case 2:
                    if(bandera==0){
                        console.log("No hay tareas!!")
                    }
                    else{    
                        console.log(buscarTarea());
                    }
                    break;
                  case 3:
                  if(bandera==0){
                      console.log("No hay tareas!!")
                  }
                  else{    
                      console.log(verTareas());
                  }
                  break;
          }
        }

          function crearTarea(){
              let objeto = {};
             index=index+1;
             objeto.id=index;
             objeto.titulo=prompt("ingrese el titulo de la tarea: ");
             console.clear();
             objeto.descripcion=prompt("ingrese una descripcion de la tarea: ");
             console.clear();
             objeto.estado="Pendiente";
             objeto.creacion= new Date().toLocaleString();
              console.log(fechaVencimiento(objeto));
                console.clear();
                 console.log("\tDificultad de la tarea\n[1]Facil\n[2]Medio\n[3]Dificil");
                 opcion=prompt("Seleccione una opcion: ");
                 opcion=parseInt(opcion);
                  switch(opcion){
                  case 1:
                     objeto.dificultad="Facil⭐";
                  break;
                 case 2:
                      objeto.dificultad="Medio⭐⭐";
                 break;
                 case 3:
                      objeto.dificultad="Dificil⭐⭐⭐";
                 break;
             default:
                 objeto.dificultad="Facil⭐";
                } 
                  lista.push(objeto);
                  console.clear();
                 console.log("<<<Tarea agregada exitosamente>>>");
                 esperarTeclaParaContinuar();
               
            }
          function editarTarea(id){
              console.log("➡️ Si deseas editarla, presione 1, o presiona 0 para volver al menu principal");
                 opcion=prompt("");
                 opcion=parseInt(opcion);
                 while(opcion<0 || opcion>1){
                    opcion=prompt("opcion incorrecta.Ingrese una opcion valida: ");
                 }
                 console.clear();
                if(opcion==0){
                    menu();
                } else if(opcion==1){
                  for(let tarea of lista){
                  if(id==tarea.id){   
                      console.log(`|Estas editando la tarea: ${tarea.titulo}|`);
                      console.log("➡️ Si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
                      console.log("➡️ Si deseas dejar en blanco un atributo, presione 0");
                      opcion=prompt("1. Ingresa la descripcion: ");
                    if (opcion == "") {
                        console.log("Descripción no modificada.");
                    } else if (opcion == 0) {
                        tarea.descripcion = "Sin datos"; // Si el usuario ingresa 0, se borra la descripción.
                    } else {
                        tarea.descripcion = opcion; // Si se ingresa algo distinto, se actualiza la descripción.
                    }
                      opcion=prompt("2. Estado ([1]Pendiente/[2]En curso/[3]Terminada/[4]Cancelada): ");
                      opcion=parseInt(opcion);
                      while(opcion<0 || opcion>4){
                             opcion=prompt("Ingrese una opcion valida: ");
                             opcion=parseInt(opcion);
                              }
                          switch(opcion){
                             case 0:
                                tarea.estado="";
                                break;
                             case 1:
                                 tarea.estado="Pendiente";
                               break;
                             case 2:
                               tarea.estado="En curso";
                             break;
                              case 3:
                                 tarea.estado="Terminada";
                              break;
                             case 4:
                                 tarea.estado="Cancelada";
                             break;

                            }
                             opcion=prompt("3. Dificultad ([1]Facil/[2]Medio/[3]Dificil): ");
                             opcion=parseInt(opcion);
                             while(opcion<0 || opcion>3){
                                opcion=prompt("Ingrese una opcion valida: ");
                                opcion=parseInt(opcion);
                             }
                             switch(opcion){
                             case 0:
                                tarea.dificultad="";
                             case 1:
                                tarea.dificultad="Facil⭐";
                             break;
                             case 2:
                                 tarea.dificultad="Medio⭐⭐";
                             break;
                             case 3:
                                 tarea.dificultad="Dificil⭐⭐⭐";
                              break;
                             }
                              fechaVencimiento(tarea);
                              console.log("¡Datos guardados!");
                              esperarTeclaParaContinuar();
                              }
                }
             }
        
            }
        function verTareas(){
         console.log("¿Que tareas deseas ver?\n[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[0] Volver");
         opcion=prompt("> ");
         opcion=parseInt(opcion);
         while(opcion<0 || opcion>4){
            console.log("opcion incorrecta!, ingrese una opcion valida");
            opcion=prompt("> ");
            opcion=parseInt(opcion);
         }
         console.clear();
         switch(opcion){
             case 0:
                menu();
                break;
             case 1:
                verTodasmistareas();
                break;
             case 2:
                verTareasPendientes(opcion);
                break;
             case 3:
                verTareasEnCurso(opcion);
                break;
                case 4:
                verTareasTerminada(opcion);
                break;
            }
        }
        function detalles(tarea){
            console.log("Esta es la tarea que elegiste\n"+`Título: ${tarea.titulo}`);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.estado}`);
            console.log(`Crecion: ${tarea.creacion}`);
            console.log(`Vencimiento: ${tarea.vencimiento}`);
            console.log(`Dificultad: ${tarea.dificultad}`); 
            editarTarea(tarea.id);
        }
        function verDetallesTareas(VTT){
            console.log("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver");
            let opcion = prompt("> ");
            opcion = parseInt(opcion);  // Convertir la opción a número
            
            let tareaEncontrada = null;
        
            for (let tarea of lista) {
                if (VTT == 0 || VTT == tarea.estado) {
                    if (opcion == tarea.id) {
                        tareaEncontrada = tarea;  // Si se encuentra la tarea, la asignamos
                        break;  // Salir del bucle si encontramos la tarea
                    }
                }
            }
        
            // Si encontramos la tarea, mostramos sus detalles
            if (tareaEncontrada) {
                console.clear();
                console.log(detalles(tareaEncontrada));
            } else if (opcion != 0) {  // Si la opción no es 0 y no se encontró tarea, pedir una opción válida
                console.log("Opción incorrecta!!!, ingrese una opción válida");
                verDetallesTareas(VTT);  // Volver a llamar a la función para pedir una nueva opción
            }
            if(opcion==0){
                verTareas();
            }
        }
        function verTodasmistareas(){
            console.log("⬇️ ⬇️ ⬇️ Estas son todas tus tareas⬇️ ⬇️ ⬇️");
            for(let tarea of lista){
             console.log(`[`+tarea.id+`] ${tarea.titulo}`);
            }
            verDetallesTareas(0);
        }
        function verTareasPendientes(opcion){
            let hay=0;
            opcion="Pendiente";
            for(let tarea of lista){
               if(opcion==tarea.estado){
                 hay=1;
                 console.log(`[`+tarea.id+`] ${tarea.titulo}`);
               }
            }
            if(hay==1){
            console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas pendientes⬆️ ⬆️ ⬆️");
            verDetallesTareas(opcion);
            }else{
                console.log("No hay tareas pendientes");
                esperarTeclaParaContinuar();
                verTareas();
            }
        }
        function verTareasEnCurso(opcion){
            let hay=0;
            opcion="En curso";
            for(let tarea of lista){
               if(opcion==tarea.estado){
                 hay=1;
                 console.log(`[`+tarea.id+`] ${tarea.titulo}`);
               }
            }
            if(hay==1){
            console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas en curso⬆️ ⬆️ ⬆️");
            verDetallesTareas(opcion);
            }else{
                console.log("No hay tareas en curso");
                esperarTeclaParaContinuar();
                verTareas();
            }
        }
        function verTareasTerminada(opcion){
            let hay=0;
            opcion="Terminada";
            for(let tarea of lista){
               if(opcion==tarea.estado){
                 hay=1;
                 console.log(`[`+tarea.id+`] ${tarea.titulo}`);
               }
            }
            if(hay==1){
            console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas terminadas⬆️ ⬆️ ⬆️");
            verDetallesTareas(opcion);
            }else{
                console.log("No hay tareas terminadas");
                esperarTeclaParaContinuar();
                verTareas();
            }
        }
        function verTareasCanceladas(opcion){
            let hay=0;
            opcion="Cancelada";
            for(let tarea of lista){
               if(opcion==tarea.estado){
                 hay=1;
                 console.log(`[`+tarea.id+`] ${tarea.titulo}`);
               }
            }
            if(hay==1){
            console.log("⬆️ ⬆️ ⬆️ Estas son tus tareas canceladas⬆️ ⬆️ ⬆️");
            verDetallesTareas(opcion);
            }else{
                console.log("No hay tareas canceladas");
                esperarTeclaParaContinuar();
                verTareas();
            }
        }

        function buscarTarea() {
            let buscar;
            console.log("Introduce el título de una tarea para buscarla:");
            buscar = prompt("> ");
        
            // Convertir la búsqueda a minúsculas para hacer la búsqueda case-insensitive
            buscar = buscar.toLowerCase();
        
            let tareasEncontradas = lista.filter(tarea => tarea.titulo.toLowerCase().includes(buscar));
        
            if (tareasEncontradas.length > 0) {
                console.log("Estas son las tareas relacionadas:");
                for (let tarea of tareasEncontradas) {
                    console.log(`[${tarea.id}] ${tarea.titulo}`);
                }
                
                verDetallesTareas(0);
        
            } else {
                console.log("No hay tareas relacionadas con la búsqueda.");
                esperarTeclaParaContinuar();
            }
        }
     do{

     menu(); 

    }while(opcionUnica!=0);
