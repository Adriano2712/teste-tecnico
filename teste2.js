document.getElementById('verificarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Obtém o valor do input
    const inputString = document.getElementById('inputString').value;
  
    // Inicializa os contadores
    let contadorMinuscula = 0;
    let contadorMaiuscula = 0;
  
    // Itera sobre a string e conta as ocorrências de 'a' e 'A'
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === 'a') {
        contadorMinuscula++;
      } else if (inputString[i] === 'A') {
        contadorMaiuscula++;
      }
    }
  
    // Exibe o resultado
    document.getElementById('resultado').textContent = `A letra 'a' minúscula ocorre ${contadorMinuscula} vezes e a letra 'A' maiúscula ocorre ${contadorMaiuscula} vezes na string.`;
  });
  