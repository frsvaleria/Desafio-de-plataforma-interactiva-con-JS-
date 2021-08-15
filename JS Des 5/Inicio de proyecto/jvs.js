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
    destino= "mendoza",
    transporte= "bus",
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




class Pasaje {
    constructor(destino, transporte, calidad) {
        this.destino = destino;
        this.transporte = transporte;
        this.calidad = calidad;
        this.vendido = false;
    }
}




const pasaje1 = new Pasaje("mendoza", "bus", "basico");
const pasaje2 = new Pasaje("uruguay", "barco", "claseA");
const pasaje3 = new Pasaje("puertoMadryn", "avion", "turista");



vender(); {
    this.vendido = true;
}



pasaje1.vender();
pasaje2.vender();
console.log(producto1);
console.log(producto2);
