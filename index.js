// let respuestasBebidas = [];

// let bebidas = [
//     {nombre: "Vodka", precio : 5000},
//     {nombre: "Fernet", precio : 8000},
//     {nombre: "Gin Tonic", precio : 4000},
//     {nombre: "Jägermeister", precio : 12000},
//     {nombre: "Chandon", precio : 10000},
//     {nombre: "Freeze", precio : 1200},
//     {nombre: "Blue Label", precio : 20000},
//     {nombre: "Whisky", precio : 15000},
// ];

// class CrearBebida {
//     constructor (nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// let preguntaInciar = confirm("¿Desea iniciar con el juego?");
// while (preguntaInciar == true) {

//     let bebidasAComparar = prompt(`Bienvenido al juego, seleccione el par a comparar
//         1) Vodka | Chandon
//         2) Fernet | Freeze
//         3) Jägermeister | Blue Label
//         4) Whisky | Gin Tonic
//     `);

//     let preguntaPersona;

//     switch (bebidasAComparar) {
//         case "1" : 
//          preguntaPersona = prompt("¿Cual crees que es mas caro?").toLowerCase();
//         comparacion(preguntaPersona, bebidas[4].nombre.toLowerCase(), bebidas[0].nombre.toLowerCase());
//         respuestasBebidas.push([bebidas[0], bebidas[4]]);
//         break;

//         case "2" :
//          preguntaPersona = prompt("¿Cual crees que es mas caro?").toLowerCase();
//         comparacion(preguntaPersona, bebidas[1].nombre.toLowerCase(), bebidas[5].nombre.toLowerCase());
//         respuestasBebidas.push([bebidas[1], bebidas[5]]);
//         break; 

//         case "3" :
//          preguntaPersona = prompt("¿Cual crees que es mas caro?").toLowerCase();
//         comparacion(preguntaPersona, bebidas[6].nombre.toLowerCase(), bebidas[3].nombre.toLowerCase());
//         respuestasBebidas.push([bebidas[6], bebidas[3]]);
//         break; 

//         case "4" :
//          preguntaPersona = prompt("¿Cual crees que es mas caro?").toLowerCase();
//         comparacion(preguntaPersona, bebidas[7].nombre.toLowerCase(), bebidas[2].nombre.toLowerCase());
//         respuestasBebidas.push([bebidas[7], bebidas[2]]);
//         break; 
//     }

//     preguntaInciar = confirm ("Desea seguir con el juego");
// }

// function comparacion (pregunta, bebidaGanador, bebidaPerdedor) {
//     if (pregunta == bebidaPerdedor) {
//         alert(`Perdiste, el ${bebidaPerdedor} es menor que ${bebidaGanador}`);

//     } else if (pregunta == bebidaGanador) {
//         alert(`Ganaste, el ${bebidaGanador} es mayor que ${bebidaPerdedor}`);
//     }
// }

// console.log(respuestasBebidas);


// let preguntaCliente = confirm("Desea agregar alguna bebida mas a la lista");
// let bebidasNuevas = [];

// while(preguntaCliente == true) {
//     let nombre = prompt ("Seleccione el nombre");
//     let precio = Number(prompt("Seleccione el precio"));
//     let bebidaCreada = new CrearBebida(nombre, precio);
//     bebidasNuevas.push(bebidaCreada)
//     preguntaCliente = confirm("¿Desea ingresar alguna bebida mas?");
// }

// console.log(bebidasNuevas);





const boton = document.getElementById("boton");
boton.innerHTML = "No tocar"

const respuesta = document.querySelector("#li");
// const input = document.querySelector("#input");

boton.onclick = () => {
    const CrearElemento = document.createElement("li");
    CrearElemento.innerHTML = "¿Porque tocaste?"
    respuesta.append(CrearElemento);
}