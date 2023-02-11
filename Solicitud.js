class Solicitud {
    constructor (nombre, importe, dni) {
        this.nombre = nombre;
        this.importe = parseFloat (importe);
        this.dni = parseInt (dni);
        this.aprobada=false;
    } 
}