document.getElementById('calcularButton').addEventListener('click', function() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;
  
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
  
    document.getElementById('resultado').textContent = `A soma é: ${SOMA}`;
  });
  