//Declaro variables.
let precio;
let precioFinal;

alert("Bienvenido a TodoNotebooks, su tienda de computadoras portatiles.")
alert("Ahora dinos tu nombre.")
let nombre = prompt("¿Cuál es tu nombre?");

//Pido el ingreso de datos para comenzar con el ciclo, lo cual el mismo llevara un condicional, el programa no continuara hasta que se ingresen los datos pedidos.
let notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
let confirmacion;
do {
    if (notebook==="Dell Inspiron" || notebook==="dell inspiron"){
    precio = 460;
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP. Presione 0 para salir.");
        }
    } else if (notebook==="Acer Nitro 5" || notebook==="acer nitro 5") {
    precio = 950;
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP. Presione 0 para salir.");
        }
    } else if (notebook==="Apple Macbook Air" || notebook==="apple macbook air") {
    precio = 980;
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP. Presione 0 para salir.");
        }
    } else if (notebook==="Lenovo Legion" || notebook==="lenovo legion") {
    precio = 890;
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP. Presione 0 para salir.");
        }
    } else if (notebook==="HP" || notebook==="hp") {
    precio = 570;
    confirmacion = parseInt(prompt("El precio de "+notebook+" es de "+precio+"USD. Para confirmar ingrese 1, de lo contrario ingrese 0."));
        if (confirmacion === 0){
            notebook = prompt(nombre+" tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP. Presione 0 para salir.");
        }
    } else {
        notebook = prompt(nombre+" no elegiste un modelo correcto, tenemos cinco modelos de notebooks diferentes, Dell Inspiron, Acer Nitro 5, Apple Macbook Air, Lenovo Legion, HP.");
    }
    
} while (confirmacion != 1)

//Declaro otra variable donde pido con que tipo de pago va a abonar.
let descuento = parseInt (prompt("¿Con qué medio de pago desea abonar? En efectivo contamos con un 15% de descuento. Ingrese 1 si abona en efectivo, 0 si abona con otro medio de pago."));

//Declaro una funcion que me va a servir para calcular el descuento si se da el caso de que se elija pagar en efectivo.
function calcularDescuento() {
    descuento = 15 * precio / 100;
    precioFinal = precio - descuento;
}
//Segun el dato ingresado, el programa vera si hace el descuento utilizando la funcion, o si no hara ningun descuento y se pagara el precio normal.
switch(descuento) {
    case 1:
        calcularDescuento();
        alert("El precio con 15% de descuento de "+notebook+" es de "+precioFinal+"USD.");
    break;

    case 0:
        precioFinal = precio;
        alert("El precio sin descuento de "+notebook+" es de "+precioFinal+"USD.");
    break;
    default:
        descuento = parseInt (prompt("No se encontró esa opción. ¿Con qué medio de pago desea abonar? En efectivo contamos con un 15% de descuento. Ingrese 1 si abona en efectivo, 0 si abona con otro medio de pago."));
}

//Mas que nada para guiarme de que finalizo toda la seguidilla de acciones el programa.
console.log("Fin del programa.");
