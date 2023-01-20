
    alert ("¡¡¡ BIENVENIDO AL SIMULADOR DE INVERSION !!!")
    



    
    
    let Solicitudes = [{ nombre: "Juan Perez", importe: 30000, dni: 39495495, aprobada: true }, { nombre: "Juan Carlos Gomez", importe: 50000, dni: 30394584, aprobada: false }, { nombre: "Pedro Pintos", importe: 60000, dni: 25959695, aprobrada: false }]

    class Solicitud {

        constructor (nombre, importe, dni) {
            this.nombre = nombre;
            this.importe = parseFloat (importe);
            this.dni = parseInt (dni);
            this.aprobada=false;
        }
        
    
    }


    function mostrarSolicitud (elementoBusqueda) {

        const resultado = Solicitudes.find (Solicitud => Solicitud.dni === elementoBusqueda)    
    
        console.log(resultado)
     }




    function agregarSolicitud (nombrePrestamo, importePrestamo, dniPrestamo) { 

        const persona1 = Solicitudes.push (new Solicitud (nombrePrestamo, importePrestamo, dniPrestamo));


        console.log("Se ha registrado su solicitud!")

    }

    

    
    let entrada1 = prompt("Seleccione un proceso:  \n 1: Menu de prestamo. \n 2: Simular una inversion. ")

    entrada1 = parseInt (entrada1)
    

    switch(entrada1){

        case 1:


            let entrada2 = prompt ("Seleccione una accion: \n 1: Realizar solicitud de prestamo. \n 2: Buscar informacion de solicitud. \n 3: Aprobar una solicitud. (ADMIN)")
            
            entrada2 = parseInt (entrada2)
            
            

            switch(entrada2){


                case 1: 
                            let importePrestamo = prompt ("Inicio solicitud de prestamo. Ingrese el monton que desea solicitar: ")

                            importePrestamo = parseInt (importePrestamo)

                            let nombrePrestamo = prompt ("Ingrese su nombre completo: ")
                            
                            let dniPrestamo = prompt ("Ingerse su numero de documento: ")

                            dniPrestamo = parseInt (dniPrestamo) 

                            agregarSolicitud (nombrePrestamo, importePrestamo, dniPrestamo); 

                            console.log(Solicitudes)
                    
                            break
            
                case 2: 
                            let infoSolicitud = prompt ("Ingrese el DNI que figura en su solicitud:")
                            infoSolicitud = parseInt (infoSolicitud)
                            
                            mostrarSolicitud(infoSolicitud);
                            break

                case 3: 

                            let infoAprobar = prompt ("Ingrese el DNI que figura en la solicitud:")
                            infoAprobar = parseInt (infoAprobar)
                            
                           
                            for (let i=0 ; i< Solicitudes.length ; i++){
                                if (Solicitudes[i].dni== infoAprobar){
                
                                    Solicitudes[i].aprobada = true;
                                    
                                }
                
                
                
                            }
                    
                            

                            console.log(Solicitudes)
                            break
                        }
            
            break

            
                
                

        case 2:

                let monto = prompt("Ingrese monto a invitir:")

                monto = parseFloat (monto)
    
                console.log("el monto a invertir es:", monto)

                let entrada = prompt ("Que tiempo de inversion desea: \n 1: 1 mes (2%) \n 2: 3 meses (5%) \n 3: 6 meses (12%) \n 4: 1 año (30%)")
            
                entrada = parseInt (entrada)
            
                switch(entrada){
                    case 1:
                    porcentaje = (monto * 2)/100
            
                    ganancia = monto + porcentaje
            
                    alert ("Hola, elegiste el plan -1- donde al final del mes obtenes El Monto que ingresaste de inversión sumado a su 2%! La ganancia aparecera en consola! pulsa aceptar!")
            
                    console.log("La ganancia total, a final del mes, es de:", ganancia)
            
                    
                    break
            
                    case 2:
                    porcentaje = (monto * 5)/100
            
                    ganancia = monto + porcentaje
            
                    alert ("Hola, elegiste el plan -2- donde al final de los 3 mes obtenes El Monto que ingresaste de inversión sumado a su 5%! La ganancia aparecera en consola! pulsa aceptar!")
                    console.log("La ganancia total, a final de los 3 mes, es de:", ganancia)
                    respuesta = 1
                    break
            
                    case 3:
                    porcentaje = (monto * 12)/100
            
                    ganancia = monto + porcentaje
            
                    alert ("Hola, elegiste el plan -3- donde al final de los 6 mes obtenes El Monto que ingresaste de inversión sumado a su 12%! La ganancia aparecera en consola! pulsa aceptar!")
                    console.log("La ganancia total, a final de los 6 mes, es de:", ganancia)
                    respuesta = 1
                    break
            
                    case 4:
                    porcentaje = (monto * 30)/100
            
                    ganancia = monto + porcentaje
            
                    alert ("Hola, elegiste el plan -4- donde al final del año obtenes El Monto que ingresaste de inversión sumado a su 30%! La ganancia aparecera en consola! pulsa aceptar!")
                    console.log("La ganancia total, a final del año, es de:", ganancia)
                    respuesta = 1
                    break
            
                    default: 
                    respuesta = 0
                    break
                }
            
        break      
    } 
