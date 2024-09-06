function showNextElement(sequence) {
    let nextElement;
    switch (sequence) {
      case 'a':
        nextElement = 9;
        break;
      case 'b':
        nextElement = 128;
        break;
      case 'c':
        nextElement = 49;
        break;
      case 'd':
        nextElement = 100;
        break;
      case 'e':
        nextElement = 13;
        break;
      case 'f':
        nextElement = 21;
        break;
    }
    document.getElementById(sequence).textContent = `Próximo elemento: ${nextElement}`;
  }
  