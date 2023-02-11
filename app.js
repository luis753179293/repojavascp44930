
    alert ("¡¡¡ BIENVENIDO AL SIMULADOR DE INVERSION !!!")
    
    let Solicitudes = []; 
    let dniEncontrado = null;


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
            let entrada2 = prompt ("Seleccione una accion: \n 1: Realizar solicitud de prestamo. \n 2: Salir.")

            entrada2 = parseInt (entrada2)
            
            switch(entrada2){
                case 1: 
                            
                            alert ("ingrese datos")
                            // localStorage.setItem('Solicitudes', JSON.stringify(Solicitudes));

                            /// inputs
                            const titular = document.getElementById('nombre');
                            const dni = document.getElementById('dni');
                            const monto1 = document.getElementById('monto');
                            const mostrarDni = document.getElementById('dniSoli');
                            const tabla = document.getElementById('items');
            
                            /// boton
                            const enviarSolicitud = document.getElementById('botonenviar')
                            const mostrarSolicitud = document.getElementById('botonVer')
                            const verSolicitudes = document.getElementById('versolis')

                            //Se carga en localStorage la solicitud.
                            enviarSolicitud.addEventListener('click', (evento)=>{
                                evento.preventDefault();
                                Solicitudes.push(new Solicitud(nombre.value, parseInt(monto1.value), parseInt(dni.value)));
                                localStorage.setItem('Solicitudes', JSON.stringify(Solicitudes));

                                alert('Solicitud Enviada')
                            } )

                           
                            mostrarSolicitud.addEventListener('click', (e)=> {
                                e.preventDefault();
                                Solicitudes = JSON.parse(localStorage.getItem('Solicitudes'));
                                const dniConsulta = mostrarDni.value;
                                dniEncontrado = buscarDni(dniConsulta);
                                if (dniEncontrado != undefined){ 

                                    const row = document.createElement('tr'); ///creo la fila
                                    let th = document.createElement('th');
                                    th.textContent = '1';
                                    row.appendChild(th);

                                    let td = document.createElement('td');
                                    td.textContent = dniEncontrado.nombre;
                                    row.appendChild(td);

                                    td = document.createElement('td');
                                    td.textContent = dniEncontrado.dni;
                                    row.appendChild(td);

                                    td = document.createElement('td');
                                    td.textContent = dniEncontrado.importe;
                                    row.appendChild(td);

                                    tabla.appendChild(row);
                                }
                                else{
                                    console.log("SOLICITUD NO ENCONTRADA")
                                }
                            } )

                            verSolicitudes.addEventListener('click', (e)=>{
                                e.preventDefault();
                                console.log(Solicitudes)
                            })

                            function buscarDni (dniConsultado){ 
                                return Solicitudes.find((elemento) => {
                                    return elemento.dni == dniConsultado
                                })
                            }
                            break
                        case 2:
                                alert("¡¡FIN DEL SIMULADOR!!")
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
