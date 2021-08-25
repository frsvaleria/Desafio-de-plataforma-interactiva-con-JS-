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
    destino='tolhuin',
    transporte='bus',
    calidad='economico',
}

let pasaje2 = {
    destino= 'san sebastian',
    transporte='barco',
    calidad='claseA'
}


let pasaje3 = {
    destino= 'cerro sombrero',
    transporte= 'avion',
    calidad= 'turista',
}

let pasaje4 = {
    destino= 'Rio grande',
    transporte='avion',
    calidad= 'claseA',
}


class Pasaje {
    constructor(destino, transporte, calidad) {
        this.destino = destino;
        this.transporte = transporte;
        this.calidad = calidad;
        this.vendido = false;
    }
}






confirmaCantidad()
this.pasaje = this.pasaje * 1;




const pasajes = [];
pasaje1.push(new pasaje("tolhuin", "bus", "economico"));
pasaje2.push(new pasaje("san sebastian", "barco", "claseA"));
pasaje3.push(new pasaje("cerro sombrero", "avion", "turista"));
pasaje4.push(new pasaje("Rio grande", "avion", "claseA"));


for (const pasaje of pasajes)

    pasaje.confirmaPaso2();

console.log(producto1);



//contenedor.classList.add

const targetas = document.getElementById('targetas');


targetas.innerHTML = `
           <div class="col">
              <div class="card">
              <img src="img/trelw.jpg" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">Trelew</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content. </p>
              <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
    </div>
</div>
`

