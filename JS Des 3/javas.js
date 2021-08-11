
const primernombre = prompt("nombre");
const primercontraseña = prompt("contraseña");
const ingresocontraseña = primercontraseña == "pierrenoher";
console.log("perfilvalidado:" + "contraseña");



if (primercontraseña) {
    alert("primer ingreso validado con exito");
} else {
    alert("la contraseña no es valida");
}



let segundacontraseña = prompt("ingrese dato de nivel dos");
let ingresocontraseñados = segundacontraseña == "!vueloaltopicocerro";
console.log("perfilvalidado:" + "ingresocontraseñados");

if (segundacontraseña) {
    alert("segundo ingresovalidado con exito");
} else {
    alert("la contraseña nivel dos no es valida");
}


let dato = parseInt(prompt("ingrese rango numerico"));
for (let i = 10; i >= 100; i++) {
    let resultado = ingreserangonumerico * i;
    alert(ingreserangonumerico + "X + i + resultado");
}
console.log("rangonumerico:" + "resultado");

if (rangonumerico) {
    alert("rango numerico exitoso");
} else {
    alert("el rango numerico no es funcional");
}

let repetir = true;
do {
    console.log("¡Se logueo con exito!");
} while (repetir)

