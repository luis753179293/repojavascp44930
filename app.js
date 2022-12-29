
    alert ("¡¡¡ BIENVENIDO AL SIMULADOR DE INVERSION !!!")
    
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



