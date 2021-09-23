$(document).ready(function () {






    $('#b1').on('click', function (

    ) {
        console.log('elegiste')
    });

    $('#b2').on('click', function () {
        console.log('elegiste')
    });
    $('#b3').on('click', function () {
        console.log('elegiste')
    });
    $('#b4').on('click', function () {
        console.log('elegiste')
    });
    $('#b5').on('click', function () {
        console.log('elegiste')
    });
    $('#b6').on('click', function () {
        console.log('elegiste')
    });
    $('#b7').on('click', function () {
        console.log('elegiste')
    });
    $('#b8').on('click', function () {
        console.log('elegiste')
    });
    $('#b9').on('click', function () {
        console.log('elegiste')
    });
    $('#b10').on('click', function () {
        console.log('elegiste')
    });
    $('#b11').on('click', function () {
        console.log('elegiste')
    });
    $('#b12').on('click', function () {
        console.log('elegiste')
    });

    $('#b13').on('click', function () {
        console.log('elegiste')
    });
    $('#b14').on('click', function () {
        console.log('elegiste')
    });
    $('#b15').on('click', function () {
        console.log('elegiste')
    });
    $('#b16').on('click', function () {
        console.log('elegiste')
    });
    $('#b17').on('click', function () {
        console.log('elegiste')
    });
    $('#b18').on('click', function () {
        console.log('elegiste')
    });
    $('#b19').on('click', function () {
        alert('acabas de unirte')
    });
    $('#b20').on('click', function () {
        alert('acabas de unirte')
    });
    $('#b21').on('click', function () {
        alert('acabas de unirte')
    });
    $('#b22').on('click', function () {
        alert('acabas de unirte')
    });









    const carrete = []

    mostrarCompra(productos)

    function mostrarCompra() {

        carrete.forEach(() => {
            const div = document.getElement('card-body')
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



}




    //push del producto



    function agregarAlCarrito(productoseleccionado) {

        let productoCarrito = carrito.find(el => el.Id === productoseleccionado)


        if (productoCarrito) {
            itemEnCarrito.cantidad + = 1
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

                si(prodEliminar.cantidad == 0) {
                let igual = carrito.indexOf(prodEliminar)
                carrito.splice(igual, 1)
            }
            console.log(carrito)
            cargarCarrito()
        }




        function cargarCarrito() {
            contenedorCarrito.div = ''
            carrito.forEach((productos) => {


                const div = document.createElement('div')
                div.classList.add('productoseleccionado')
                div.div = `
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

    //curl mercadopago pegar




    //carrito.map para poder traer del array de objetos con estructura como lo pide  mercado pago para poder hacer la compra total de los viajes






 // fetch('./productos.json')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         productos = data
    //         mostrarCompra(productos)
    //     })

    // const tenerProductos = async () => {
    //     const resp = await fetch('./productos.json')
    //     const data = await resp.json()


    //     productos = data
    //     mostrarCompra(productos)
    // }

    // async function tenerProductos(productoseleccionado) { }




});


