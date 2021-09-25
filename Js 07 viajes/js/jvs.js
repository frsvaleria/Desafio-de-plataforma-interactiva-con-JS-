
$(document).ready(function () {





    $('#b1').on('click', function obtener() {

        document.getElementById(productos[0])

        console.log(productos[0])
    }),

        $('#b2').on('click', function () {

            document.getElementById(productos[1])

            console.log(productos[1])
        })

    $('#b3').on('click', function () {
        document.getElementById(productos[2])
        console.log(productos[2])
    })

})
$('#b4').on('click', function () {

    document.getElementById(productos[3])
    console.log(productos[3])
})
$('#b5').on('click', function () {

    document.getElementById(productos[4])
    console.log(productos[4])
})
$('#b6').on('click', function () {

    document.getElementById(productos[5])
    console.log(productos[5])
})

$('#b7').on('click', function () {

    document.getElementById(productos[6])
    console.log(productos[6])
})

$('#b8').on('click', function () {
    document.getElementById(productos[7])
    console.log(productos[7])
})

$('#b9').on('click', function () {
    document.getElementById(productos[8])
    console.log(productos[8])
})

$('#b10').on('click', function () {

    document.getElementById(productos[9])
    console.log(productos[9])
})

$('#b11').on('click', function () {
    document.getElementById(productos[10])
    console.log(productos[10])
})

$('#b12').on('click', function () {
    document.getElementById(productos[11])
    console.log(productos[11])
})

$('#b13').on('click', function () {
    document.getElementById(productos[12])
    console.log(productos[12])
})

$('#b14').on('click', function () {
    document.getElementById(productos[13])
    console.log(productos[13])

})

$('#b15').on('click', function () {

    document.getElementById(productos[14])
    console.log(productos[14])

})

$('#b16').on('click', function () {

    document.getElementById(productos[15])
    console.log(productos[15])

})

$('#b17').on('click', function () {

    document.getElementById(productos[16])
    console.log(productos[16])
})

$('#b18').on('click', function () {

    document.getElementById(productos[17])
    console.log(productos[17])
})

$('#b17').on('click', function () {

    document.getElementById(productos[18])
    console.log(productos[18])
})

$('#b16').on('click', function () {

    document.getElementById(productos[19])
    console.log(productos[19])
})

$('#b17').on('click', function () {

    document.getElementById(productos[20])
    console.log(productos[20])
})

$('#b18').on('click', function () {

    document.getElementById(productos[21])
    console.log(productos[21])
})
$('#b19').on('click', function () {

    document.getElementById(productos[22])
    console.log(productos[22])
})

$('#b20').on('click', function () {

    document.getElementById(productos[20])
    console.log(productos[20])
})

$('#b21').on('click', function () {

    document.getElementById(productos[21])
    console.log(productos[21])
})

$('#b22').on('click', function () {

    document.getElementById(productos[22])
    console.log(productos[22])
})







    //json productos del array

    // localStorage.setItem('productos', JSON.stringify(productos))




    // let carrito = []

    // const carrete = JSON.analizar(localStorage.getItem('carrete'))

    // mostrarCompra(productos)

    // function mostrarCompra() {

    //     carrete.forEach(() => {
    //         const div = document.getElement('card-body')
    //         div.classList.add('producto')
    //         div.card = `
    //              <div class="card-body">
    //             <h5 class="card-title">${prod.destino}</h5>
    //                             <p class="card-text">${prod.calidad}</p>
    //                             <p class="card-text">${prod.transporte}Transporte en Crucero </p>
    //                              <p class="card-text">${prod.precio}</p>
    //                              <button onClick="agregarAlCarrito(${prod.Id})" class="btn btn-outline-dark" id="bot">Añadir al carrito</button>
    //                             </div>
    //                      `
    //         contenedor.appendChild(div)
    //     })
    // }








    // //push del producto



    // function agregarAlCarrete(productoseleccionado) {

    //     let productoCarrito = carrito.find(el => el.Id === productoseleccionado)


    //     if (productoCarrito) {
    //         itemEnCarrito.cantidad + = 1
    //     } else {
    //         let { id, destino, calidad, transporte, precio } = productos.find(el => el.id == prod)
    //         carrito.push({ id: id, destino: destino, transporte: transporte, precio: precio, cantidad: 1 })

    //         localStorage.setItem('carrete', JSON.stringify(carrete))

    //         console.log(carrito)

    //         cargarCarrito()
    //     }

    //     //eliminar producto

    //     function eliminarProd(id) {
    //         let prodEliminar = carrito.find(el => el.id == id)
    //         prodEliminar.cantidad -

    //             if (condition) {

    //         } (prodEliminar.cantidad == 0) {
    //             let igual = carrito.indexOf(prodEliminar)
    //             carrito.splice(igual, 1)
    //         }
    //         console.log(carrito)
    //         cargarCarrito()
    //     }




    //     function cargarCarrito() {
    //         contenedorCarrito.div = ''
    //         carrito.forEach((productos) => {


    //             const div = document.createElement('div')
    //             div.classList.add('productoseleccionado')
    //             div.div = `
    //         <div class="card-body">
    //         <h5 class="card-title">${prod.destino}</h5>
    //                         <p class="card-text">${prod.calidad}</p>
    //                         <p class="card-text">${prod.transporte}Transporte en Crucero </p>
    //                         <p class="card-text">${prod.precio}</p>
    //                         <button onClick="agregarAlCarrito(${prod.Id})" class="btn btn-outline-dark" id="bot">Añadir al carrito</button>
    //                        </div>
    //                 `
    //             contenedorCarrito.appendChild(div)
    //         })
    //         contador.innerText = carrito.tiene
    //         precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    //     }

    // }

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


