let preguntaIncial = confirm("Desea inicializar la calculadora");
let numeroUno;
let numeroDos;
let resultado; 
let colocarNumeros;

while (preguntaIncial) {
    let pregunta = prompt(`¿Que tipo de operacion desea hacer?
        1) +
        2) -
        3) *
        4) /
    `)

    if (pregunta === "+" || "1") {
        numeroUno = Number(prompt("Coloque el primer numero"));
        numeroDos = Number(prompt("Coloque el segundo numero"));

        resultado = `La suma es de ${numeroUno + numeroDos}`; 

        alert(resultado)
    } else if (pregunta === "-" || "2") {
        numeroUno = Number(prompt("Coloque el primer numero"));
        numeroDos = Number(prompt("Coloque el segundo numero"));

        resultado = `La resta es de ${numeroUno - numeroDos}`; 

        alert(resultado)
    }  else if (pregunta === "*" || "3") {
        numeroUno = Number(prompt("Coloque el primer numero"));
        numeroDos = Number(prompt("Coloque el segundo numero"));

        resultado = `La multiplicacion es de ${numeroUno * numeroDos}`; 

        alert(resultado)
    }  else if (pregunta === "/" || "4") {
        numeroUno = Number(prompt("Coloque el primer numero"));
        numeroDos = Number(prompt("Coloque el segundo numero"));

        resultado = `La division es de ${numeroUno / numeroDos}`; 

        alert(resultado)
    }

    preguntaIncial = confirm("¿Desea realizar otra operacion?")
}