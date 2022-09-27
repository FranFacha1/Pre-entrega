var bebidaAleatoria;
const fetchBebidas = async () => {
    try {
        const res = await fetch("bebidas.json");
        const bebidas = await res.json();
        bebidaAleatoria =  bebidas
    } catch (error) {
        console.log(error);
    }
}
const pedirBebida = document.querySelector("#boton");
const contenedorBebidadas = document.getElementById('contenedor-bebidas')
const titulo = document.getElementById('titulo')
var resultadoUNO;
var resultadoDOS;
var rachaGanadas = 0;

pedirBebida.onclick = () => {
    titulo.style.display = 'block'

    generarBebidas();
};

function generarBebidas() {
    let numeroRandom = numeroAleatorio();
    resultadoUNO = numeroRandom[0]
    resultadoDOS = numeroRandom[1]
    contenedorBebidadas.innerHTML = `

                    <div class="bebida">
                        <img src="${bebidaAleatoria[resultadoUNO].imgurl}">
                        <span>${bebidaAleatoria[resultadoUNO].nombre}</span>
                        <button id="bebida-izquierda" class="boton-bebidas" onclick="bebidaMasCara('izquierda')">Bebida I</button>
                    </div>
                    
                    <div class="bebida">
                        <img src="${bebidaAleatoria[resultadoDOS].imgurl}">
                        <span>${bebidaAleatoria[resultadoDOS].nombre}</span>
                        <button id="bebida-derecha" class="boton-bebidas" onclick="bebidaMasCara('derecha')"> Bebida II</button>
                    </div>`
}

function numeroAleatorio() {
    var resultado1 = Math.floor(Math.random() * bebidaAleatoria.length)
    
    for (let index = 0; index < bebidaAleatoria.length; index++) {
        var resultado2 = Math.floor(Math.random() * bebidaAleatoria.length)
        if (resultado1 != resultado2) {
            break
        }
    }
    return [resultado1, resultado2]
}

function bebidaMasCara(boton) {
    var bebidaIzquierda = bebidaAleatoria[resultadoUNO].precio;
    var bebidaDerecha = bebidaAleatoria[resultadoDOS].precio;

    
    console.log('izq: '+bebidaIzquierda);
    console.log('der: '+bebidaDerecha);

    if (bebidaIzquierda > bebidaDerecha) {
        if (boton == 'izquierda') {
            rachaGanadas++
            Swal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: 'Puntaje: ' + rachaGanadas,
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Perdiste',
                text: 'Puntaje Total: ' + rachaGanadas,
            })
            rachaGanadas = 0
        }
    } else {
        if (boton == 'derecha') {
            rachaGanadas++
            Swal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: 'Puntaje: ' + rachaGanadas,
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Perdiste',
                text: 'Puntaje Total: ' + rachaGanadas,
            })
            rachaGanadas = 0
        }
    }

    generarBebidas()
}



window.onload = function () {
    fetchBebidas();
}