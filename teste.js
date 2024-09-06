// Função para gerar a sequência de Fibonacci até o número informado
function fibonacciSequence(limite) {
    let fib = [0, 1];
    let i = 2;

    // Gerar sequência até o número informado
    while (true) {
        let proximoNumero = fib[i - 1] + fib[i - 2];
        if (proximoNumero > limite) break;
        fib.push(proximoNumero);
        i++;
    }

    return fib;
}

// Função para verificar se o número pertence à sequência de Fibonacci
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    // Se o número não for válido, retorna uma mensagem
    if (isNaN(numero) || numero < 0) {
        resultado.innerText = "Por favor, insira um número válido!";
        return;
    }

    const sequencia = fibonacciSequence(numero);

    // Verifica se o número está na sequência
    if (sequencia.includes(numero)) {
        resultado.innerText = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.innerText = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}