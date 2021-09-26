
$(document).ready(function () {



    let contador = 0;


    function contadorAdd() {
        contador += 1;

    }


    $("#btn btn-warning").text(contador);


    $('button').click(function () {
        contadorAdd();
    });





});
 //    $('#btn btn-warning"').text(contador + 1);
