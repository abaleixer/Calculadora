let numeroUno = 0;
let numeroDos = 0;
let resultado = 0;
let operacion = "";
// Esto lo esta editando Lidis
function igualar() {
    if (operacion == '+') {
        resultado = numeroUno + numeroDos
    }
    if (operacion == '-') {
        resultado = numeroUno - numeroDos
    }
    if (operacion == '*') {
        resultado = numeroUno * numeroDos
    }
    if (operacion == '/') {
        resultado = numeroUno / numeroDos
    }
    document.getElementById("display").value = resultado;
}

function ingresarNumero(x) {
    if (operacion == "") {
        numeroUno = x;
        document.getElementById("display").value = numeroUno;
    } else {
        numeroDos = x;
        document.getElementById("display").value = numeroDos;
    }
}

function agregarOperador(ope){
    operacion = ope;
}

