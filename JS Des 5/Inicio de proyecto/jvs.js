let vender = "vender";


alert("Bienvenido")


const nombre = prompt("Ingrese nombre de usuario");
alert('Hola' + nombre);

const contraseña = prompt("Ingrese su contraseña ")
alert('Contraseña validada')


const ciudad = prompt("ingrese ciudad de partida")
alert('Destino de partida chequeado')

alert(nombre + 'parte desde' + ciudad)

let pasaje1 = {
    destino= 'carlosPaz',
    transporte= 'bus',
    calidad= 'economico',
}

let pasaje2 = {
    destino= 'uruguay',
    transporte='barco',
    calidad='claseA'
}


let pasaje3 = {
    destino= 'puertoMadryn',
    transporte= 'avion',
    calidad= 'turista',
}




function Pasaje(destino, transporte, calidad) {
    this.destino = destino;
    this.transporte = transporte;
    this.calidad = calidad;
    this.vendido = false;
}




const pasaje1 = new pasaje("carlosPaz", "bus", "basico");
const pasaje2 = new pasaje("uruguay", "barco", "claseA");
const pasaje3 = new pasaje("puertoMadryn", "avion", "turista");



vender(); {
    this.vendido = true;
}



pasaje1.vender();
pasaje2.vender();
console.log(producto1);
console.log(producto2);
