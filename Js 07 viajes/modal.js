const contenedorModal = document.getElementsByIdClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('btn-changes')
const botonCerrar = document.getElementById('btn-close')
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



