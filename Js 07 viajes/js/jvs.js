const addCards = document.querySelectorAll('.addTo btn btn-outline-dark');
addCards.forEach(addCardsButton => {
    addCardsButton.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const button = event.target;
    console.log(': addToCartClicked =>button', button);
}








const carrito = []

mostrarCompra(productos)

function mostrarCompra(array) {


    carrito.forEach((prod) => {
        const div = document.getElement('tr')
        div.classList.add('producto')
        div.card = `
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${prod.destino}</h5>
                        <p class="card-text">${prod.calidad}</p>
                        <p class="card-text">${prod.transporte}Transporte en Crucero </p>
                        <p class="card-text">${prod.precio}</p>
                        <button onClick="agregarAlCarrito(${prod.Id})" class="btn btn-outline-dark" id="bot">Añadir al carrito</button>
                       </div>
                `
        contenedor.appendChild(div)
    })
}


//push del producto



function agregarAlCarrito(prodId) {

    let productoCarrito = carrito.find(el => el.Id === prodId)


    if (productoCarrito) {
        itemEnCarrito.cantidad += 1
    } else {
        let { id, destino, calidad, transporte, precio } = productos.find(el => el.id == prod)
        carrito.push({ id: id, destino: destino, transporte: transporte, precio: precio, cantidad: 1 })

        localStorage.setItem('carrito', JSON.stringify(carrito))

        console.log(carrito)

        cargarCarrito()
    }
    function eliminarProd(id) {
        let prodEliminar = carrito.find(el => el.id == id)
        prodEliminar.cantidad -

            if (prodEliminar.cantidad == 0) {
            let igual = carrito.indexOf(prodEliminar)
            carrito.empalme(igual, 1)
        }
        console.log(carrito)
        cargarCarrito()
    }




    function cargarCarrito() {
        contenedorCarrito.div = ''
        carrito.forEach((producto) => {


            const div = document.createElement('div')
            div.classList.add('productoseleccionado')
            div.div = `
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${prod.destino}</h5>
                            <p class="card-text">${prod.calidad}</p>
                            <p class="card-text">${prod.transporte}Transporte en Crucero </p>
                            <p class="card-text">${prod.precio}</p>
                            <button onClick="agregarAlCarrito(${prod.Id})" class="btn btn-outline-dark" id="bot">Añadir al carrito</button>
                           </div>
                    `
            contenedorCarrito.appendChild(div)
        })
        contador.innerText = carrito.tiene
        precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    }

}


























const contenedorModal = document.getElementsByIdClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByIdClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', () => {
    contenedorModal.classList.click()
})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
});

