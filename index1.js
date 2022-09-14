fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res) => res.json())
    .then((json) =>  {
    let pokeArray = json.results;
    console.log(pokeArray);
    let html = "";
    pokeArray.forEach((poke) => {
        html += `
            <div>
                <p>${poke.name}</p>
                <a href = "${poke.url} target = "_blank" ">${poke.url}</a>
            </div>
        
        `
    });

    document.getElementById("listado-pokes").innerHTML = html;
})
.catch ((e) => {
    console.log(json)
})

const pedirBebida = document.querySelector("#boton");
const contenedorBebidadas = document.getElementById('contenedor-bebidas')
const titulo = document.getElementById('titulo')

const bebidaAleatoria = [
    {nombre: "Vodka", imgurl: 'https://pngimg.com/uploads/vodka/vodka_PNG73893.png',precio : 5000},
    {nombre: "Fernet", imgurl: 'https://www.diadelamigo.branca.com.ar/assets/app/images/dda2020/botella_home.png',precio : 8000},
    {nombre: "Gin Tonic", imgurl: 'https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3959/productList/9/productList_500x753.png',precio : 4000},
    {nombre: "Jägermeister", imgurl: "https://images.ctfassets.net/f6vi7rcobfjz/1mDN1ZFIjSiIkk8g4U4cW0/9282a4494547ee7c7f635930c329ffa6/product_page_hero_bottlre.png?&w=1366&q=66" ,precio : 12000},
    {nombre: "Chandon", imgurl: 'https://www.chandon.com.ar/wp-content/uploads/2021/03/black_brut_ok.png',precio : 10000},
    {nombre: "Freeze", imgurl: 'https://4-reinas-bebidas.tiendalite.com/images/products/500/40653942-256.png',precio : 1200},
    {nombre: "Blue Label", imgurl: "https://dislicoresqa.vtexassets.com/arquivos/ids/257731/002218-JOHNNIE_WALKER_BLUE_LABEL_BOTELLA_200ML.png?v=637892570786270000" ,precio : 20000},
    {nombre: "Absenta", imgurl: "https://teichenne.com/wp-content/uploads/2022/04/G83-JS-Absinthe-Green-70cl-v0_Front-View-2-1024x1024.png" ,precio : 15000}
]

pedirBebida.onclick = () => {
    titulo.style.display = 'block'

    let numeroRandom = numeroAleatorio();
    resultadoUNO = numeroRandom[0]
    resultadoDOS = numeroRandom[1]
    contenedorBebidadas.innerHTML = `

                    <div class="bebida">
                        <img src="${bebidaAleatoria[resultadoUNO].imgurl}">
                        <span>${bebidaAleatoria[resultadoUNO].nombre}</span>
                        <button id="bebida-izquierda" class="boton-bebidas">Bebida I</button>
                    </div>
                    
                    <div class="bebida">
                        <img src="${bebidaAleatoria[resultadoDOS].imgurl}">
                        <span>${bebidaAleatoria[resultadoDOS].nombre}</span>
                        <button id="bebida-izquierda" class="boton-bebidas"> Bebida II</button>
                    </div>`


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Comenzo el juego, ¡Buena suerte! 😀',
                        showConfirmButton: false,
                        timer: 1500
                      })
};

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
