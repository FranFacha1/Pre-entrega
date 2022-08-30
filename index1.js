const pedirBebida = document.querySelector("#boton");

// const respuesta2 = document.querySelector("#respuesta2");

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");

// const guardarBebida = [];

const bebidaAleatoria = [
    {nombre: "Vodka", precio : 5000},
    {nombre: "Fernet", precio : 8000},
    {nombre: "Gin Tonic", precio : 4000},
    {nombre: "Jägermeister", precio : 12000},
    {nombre: "Chandon", precio : 10000},
    {nombre: "Freeze", precio : 1200},
    {nombre: "Blue Label", precio : 20000},
    {nombre: "Whisky", precio : 15000}
]

boton.onclick = () => {
    document.querySelector("#imgs").style.display = "block";
    document.querySelector("#imgs1").style.display = "block";
    document.querySelector("#titulo").style.display = "block";
}

boton1.onclick = () => {
    localStorage.setItem("TocoBoton1",true);
}

boton2.onclick = () => {
    localStorage.setItem("TocoBoton2",true);
}

pedirBebida.onclick = (e) => {
    // const mostrarBebidaAleatoria = document.createElement("li");
    let numeroRandom = numeroAleatorio();
    // mostrarBebidaAleatoria.innerHTML = `${bebidaAleatoria[numeroRandom].nombre} $${bebidaAleatoria[numeroRandom].precio} ` //Muestra el nombre + el precio
    // mostrarBebidaAleatoria.innerHTML = bebidaAleatoria[numeroRandom].nombre
    // respuesta2.append(mostrarBebidaAleatoria);
    // console.log(bebidaAleatoria[numeroRandom]);
    localStorage.setItem("bebida", JSON.stringify(bebidaAleatoria[numeroRandom]));
};

function numeroAleatorio(){
    return Math.floor(Math.random()*bebidaAleatoria.length)
}


boton.onclick = () => {
    document.querySelector("#imgs").style.display = "block";
    document.querySelector("#imgs1").style.display = "block";
    document.querySelector("#titulo").style.display = "block";
}

boton1.onclick = () => {
    localStorage.setItem("TocoBoton1",true);
}

boton2.onclick = () => {
    localStorage.setItem("TocoBoton2",true);
}