// script.js
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultadoMedia');

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = 'Por favor, insira todas as notas!';
        resultado.style.color = 'red';
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    resultado.textContent = `Média: ${media.toFixed(2)}`;
    resultado.style.color = '#2c3e50';
}

function calcularRegraDe3() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    const valorC = parseFloat(document.getElementById('valorC').value);
    const resultado = document.getElementById('resultadoRegra3');

    if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC) || valorA === 0) {
        resultado.textContent = 'Insira valores válidos e certifique-se que A ≠ 0!';
        resultado.style.color = 'red';
        return;
    }

    const resultadoRegra = (valorB * valorC) / valorA;
    resultado.textContent = `Resultado: ${resultadoRegra.toFixed(2)}`;
    resultado.style.color = '#2c3e50';
}

function converterUnidade() {
    const valor = parseFloat(document.getElementById('valorConversao').value);
    const tipo = document.getElementById('tipoConversao').value;
    const resultado = document.getElementById('resultadoConversao');

    if (isNaN(valor)) {
        resultado.textContent = 'Insira um valor válido!';
        resultado.style.color = 'red';
        return;
    }

    let resultadoConversao;
    switch (tipo) {
        case 'km-m':
            resultadoConversao = valor * 1000;
            break;
        case 'm-km':
            resultadoConversao = valor / 1000;
            break;
        case 'kg-g':
            resultadoConversao = valor * 1000;
            break;
        case 'g-kg':
            resultadoConversao = valor / 1000;
            break;
    }

    resultado.textContent = `Resultado: ${resultadoConversao.toFixed(2)} ${tipo.split('-')[1]}`;
    resultado.style.color = '#2c3e50';
}

// Adicionar evento para limpar resultados ao mudar inputs (opcional feedback)
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', () => {
        document.getElementById('resultadoMedia').textContent = '';
        document.getElementById('resultadoRegra3').textContent = '';
        document.getElementById('resultadoConversao').textContent = '';
    });
});
