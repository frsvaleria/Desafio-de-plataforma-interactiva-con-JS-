$(document).ready(function () {


    const contentModal = document.getElementsByIdClassName('modal-content')[0]
    const botonAbrir = document.getElementById("abre")
    const botonCerrar = document.getElementById("cierra")
    const modalCarrito = document.getElementsByIdClassName('modal-dialog')[0]

    botonAbrir.addEventListener('click', () => {
        contentModal.classList.toggle('modal-primary')
    })

    botonCerrar.addEventListener('click', () => {
        contentModal.classList.toggle('modal-secondary')
    })

    contentModal.addEventListener('click', () => {
        contentModal.classList.click()
    })
    modalCarrito.addEventListener('click', (event) => {
        event.stopPropagation()
    });



});
