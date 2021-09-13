//const { Button } = require("react-bootstrap");

const { default: Button } = require("@restart/ui/esm/Button");
const { Container, Table, ListGroup } = require("react-bootstrap");

//let vender = "vender";


//alert("Bienvenido")


//const nombre = prompt("Ingrese nombre de usuario");
alert('Hola' + nombre);

//const contraseña = prompt("Ingrese su contraseña ")
//alert('Contraseña validada')


///const ciudad = prompt("ingrese ciudad de partida")
alert('Destino de partida chequeado')

//alert(nombre + 'parte desde' + ciudad)

//let pasaje1 = {
//destino = 'tolhuin',
//  transporte = 'bus',
// calidad = 'economico',}

//let pasaje2 = {
//destino = 'san sebastian',
// transporte = 'barco',
// calidad = 'claseA'}


//let pasaje3 = {
//destino = 'cerro sombrero',
// transporte = 'avion',
//calidad = 'turista',}

//let pasaje4 = {
///destino = 'Rio grande',
// transporte = 'avion',
//calidad = 'claseA',}


//class Pasaje {
//constructor(destino, transporte, calidad) {
// this.destino = destino;
//this.transporte = transporte;
//this.calidad = calidad;
//this.vendido = false;
//}
//}






//confirmaCantidad()
//this.pasaje = this.pasaje * 1;




//const pasajes = [];
//pasaje1.push(new pasaje("tolhuin", "bus", "economico"));
//pasaje2.push(new pasaje("san sebastian", "barco", "claseA"));
//pasaje3.push(new pasaje("cerro sombrero", "avion", "turista"));
//pasaje4.push(new pasaje("Rio grande", "avion", "claseA"));


//for (const pasaje of pasajes)

// pasaje.confirmaPaso2();

//console.log(producto1);



//contenedor.classList.add

const targetas = document.getElementById('targetas');

stockviajes.forEach((viajes) => {


    const div = document.createElement('div')


    const div = document.createElement('div')
    div.className = 'card'
    div.style = "width: "




    const lista = dociment.agregarAlCarrito('lista')

    stcockviajes.forEach((viajes) => {

        const div = document.createElement('div')


        const div = document.createElement('div')
        div.className = 'list-group'
        div.style = "width: "
    });


    lista.innerHTML = `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">Buenos Aires - España - Italia</a>
    <a href="#" class="list-group-item list-group-item-action">Mexico - Peru - Argentina</a>
    <a href="#" class="list-group-item list-group-item-action">Argentina - sin escala -- Canada </a>
    <a href="#" class="list-group-item list-group-item-action">Australia - España - Canada</a>
    <a href="#" class="list-group-item list-group-item-action">Rusia - Portugal - Uruguay</a>
    <a href="#" class="list-group-item list-group-item-action">Buenos Aires -España - Italia</a>
    <a href="#" class="list-group-item list-group-item-action">Mexico - sin escala - Rusia</a>
    <a href="#" class="list-group-item list-group-item-action">Argentina - sin escala -- España </a>
    <a href="#" class="list-group-item list-group-item-action">Marruecos - sin escala - Canada</a>
    <a href="#" class="list-group-item list-group-item-action">Francia - Portugal - Chile</a>
</div>
    
    `


    targetas.innerHTML = `
           <div class="col">
              <div class="card">
              <img src="img/trelw.jpg" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">Trelew</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content. </p>
              <button onClick="agregarAlCarrito({$prod.id})"class="btn btn-outline-dark">Añadir al carrito</button>
    </div>
</div>
`
    targetas.innerHTML += `
            <div class="col">
               <div class="card">
               <img src="img/las gru.jpg" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title">San Sebastian</h5>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content.</p>
        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
    </div>
</div>
</div>
<div class="col">
<div class="card">
    <img src="img/ranch.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Rio Grande</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content.</p>
        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
    </div>
</div>
<div class="col">
                <div class="card">
                    <img src="img/guayana.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Guayana Francesa</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. </p>
                        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="img/mex.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Mexico</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. </p>
                        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="img/Morro-de-Sao-Paulo-Brasil.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Porto do Sao Paulo</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content.</p>
                        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="img/isla-de-pascua-16022020in1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Isla de pascua</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content.</p>
                        <button type="button" class="btn btn-outline-dark">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>`






    Container.appendChild('div')

})

const carrito = []

function agregarAlCarrito(viajesId) {

    let viajes = stockviajes.find((el) => el.id === viajesId)
    carrito.push(viajes)

    mostrarCompra('destino' + 'transporte' + 'calidad')
}



const mostrarCompra = () => {

    Tablebody.innerHTML = ""

    carrito.forEach((viajes) => {

        const tr = document.createElement('tr')
        tr = className = "table-primary"
        tr.innerHTML = `
        < td scope = "row" > { viajes.id }</th >
        <td>{viajes.destino}</td>
        <td>{viajes.calidad}</td>
        <td>{viajes.transporte}</td>`




        tableBody.appendChild(tr)


        $(`#add${viajes.id}`).on(click.()=> {
    agregarAlCarrito(viaje.id)
}


$('fadeout').click(() => {
    $('tostada').fadeOut(2000)
})


let contador = 1

const callApiBB = ('cobro') => {


    $.get('https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi/${id}', (res) => {


        console.log(res[1])


        getCobro.innerText = res[1].cobro

        contador++

    })

}

callApiBB(contador)

const agregarAlCarrito = document.getElementById('button-agregarAlCarrito')
button.addEventListener('click', () => {

    callApiBB(contador)


})