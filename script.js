// Cálculo de Média
function calcularMedia() {
    let n1 = parseFloat(document.getElementById("nota1").value) || 0;
    let n2 = parseFloat(document.getElementById("nota2").value) || 0;
    let n3 = parseFloat(document.getElementById("nota3").value) || 0;

    let media = (n1 + n2 + n3) / 3;
    document.getElementById("resultadoMedia").innerText = `Média: ${media.toFixed(2)}`;
}

// Regra de 3
function calcularRegraDe3() {
    let A = parseFloat(document.getElementById("valorA").value);
    let B = parseFloat(document.getElementById("valorB").value);
    let C = parseFloat(document.getElementById("valorC").value);

    if (A && B && C) {
        let resultado = (B * C) / A;
        document.getElementById("resultadoRegra3").innerText = `Resultado: ${resultado.toFixed(2)}`;
    } else {
        document.getElementById("resultadoRegra3").innerText = "Preencha todos os campos!";
    }
}

// Conversão de Unidades
function converterUnidade() {
    let valor = parseFloat(document.getElementById("valorConversao").value);
    let tipo = document.getElementById("tipoConversao").value;
    let resultado = "";

    if (!valor && valor !== 0) {
        document.getElementById("resultadoConversao").innerText = "Digite um valor válido!";
        return;
    }

    switch (tipo) {
        case "km-m": resultado = `${valor} km = ${valor * 1000} m`; break;
        case "m-km": resultado = `${valor} m = ${(valor / 1000).toFixed(3)} km`; break;
        case "kg-g": resultado = `${valor} kg = ${valor * 1000} g`; break;
        case "g-kg": resultado = `${valor} g = ${(valor / 1000).toFixed(3)} kg`; break;
    }

    document.getElementById("resultadoConversao").innerText = resultado;
}
