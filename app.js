
alert ("¡¡¡ BIENVENIDO AL SIMULADOR DE INVERSION !!!")
    
let Solicitudes = []; 
let dniEncontrado = null;


  /// inputs
const titular = document.getElementById('nombre');
const dni = document.getElementById('dni');
const monto1 = document.getElementById('monto');
const enviarDniConsulta = document.getElementById('dniSoli');
 const tabla = document.getElementById('items');     

/// boton
const enviarSolicitud = document.getElementById('botonenviar')
const mostrarSolicitud = document.getElementById('botonVer')
const verSolicitudes = document.getElementById('versolis')

fetch("solicitudes.json")
.then((response) => { return response.json();  })
.then((dato) => {return Solicitudes=dato})
                            

//Se carga en localStorage la solicitud.
enviarSolicitud.addEventListener('click', (evento)=>{
    evento.preventDefault();
    let repetido = Solicitudes.find ((elemento)=> {
    return elemento.dni == parseInt(dni.value)
    })
    console.log(repetido);
    if(repetido == undefined)
        {
            Solicitudes.push(new Solicitud(titular.value, parseInt(monto1.value), parseInt(dni.value)));
            localStorage.setItem('Solicitudes', JSON.stringify(Solicitudes));

            Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada',
            text: 'Puede revisar la solicitud con el boton de "mostrar"',
            })
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: 'El DNI ya realizo una solicitud',
            })
        }                               
})
                            
mostrarSolicitud.addEventListener('click', (e)=> {
    e.preventDefault();
    Solicitudes = JSON.parse(localStorage.getItem('Solicitudes'));
    limpiarTabla();
    const dniConsulta = enviarDniConsulta.value;
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
        Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'NO SE ENCONTRO SOLICITUD',
        })
        }   
})

verSolicitudes.addEventListener('click', (e)=>{
e.preventDefault();
limpiarTabla();
let valor =1; 
for(let i=1; i<Solicitudes.length ; i++) {                                    
    const row = document.createElement('tr'); ///creo la fila
    let th = document.createElement('th');
    th.textContent = valor;
    row.appendChild(th);
    let td = document.createElement('td');
    td.textContent = Solicitudes[i].nombre;
    row.appendChild(td);
    td = document.createElement('td');
    td.textContent = Solicitudes[i].dni;
    row.appendChild(td);
    td = document.createElement('td');
    td.textContent = Solicitudes[i].importe;
    row.appendChild(td);
    tabla.appendChild(row);                                    
    valor++; }    
})

function limpiarTabla(){tabla.innerHTML = ''; }

function buscarDni (dniConsultado){ 
    return Solicitudes.find((elemento) => {return elemento.dni == dniConsultado})
}

