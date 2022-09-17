const colorPallet = document.getElementsByClassName('color');
const local = document.getElementById('pixel-board');
const cor2 = document.getElementsByClassName('cor2')[0];
const cor3 = document.getElementsByClassName('cor3')[0];
const cor4 = document.getElementsByClassName('cor4')[0];

function seletorInicial() {
  const seletoriInicial = document.querySelector('.black');
  seletoriInicial.className += ' selected';
}

function seletor(event) {
  const clickInseletor = event.target;
  for (let i = 0; i < colorPallet.length; i += 1) {
    const paletas = colorPallet[i];
    paletas.classList.remove('selected');
  }
  clickInseletor.className += ' selected';
}

function clicked() {
  for (let i = 0; i < colorPallet.length; i += 1) {
    colorPallet[i].addEventListener('click', seletor);
  }
}

clicked();

function criarPixel(numbersHeight, numbersWidth) {
  for (let i = 1; i <= numbersHeight; i += 1) {
    for (let i2 = 1; i2 <= numbersWidth; i2 += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel white';
      local.appendChild(newPixel);
    }
  }
  let tamanhoMargin = (numbersWidth * 43) + 10 + 'px';
  local.style.width = tamanhoMargin;
}
criarPixel(7, 7);

function buttonVQV() {
  const buttonVQV = document.getElementById('generate-board');
  buttonVQV.addEventListener('click', inputNumberPixel);
}
function removerPixel() {
  let pixelsRemovido = document.getElementById("pixel-board");
  while (pixelsRemovido.firstChild) {
    pixelsRemovido.removeChild(pixelsRemovido.firstChild);
  }
}

// removerPixel();

function inputNumberPixel() {
  let input = document.getElementById('board-size');
  let valor = input.value;
  if (valor == '') {
    alert ('Board inválido!');
  }
  else if (valor <= 5) {
    removerPixel();
    criarPixel(5, 5);
    clickedPixel()
  }
  else if (valor > 5 && valor <= 50) {
    removerPixel();
    criarPixel(valor, valor);
    clickedPixel()
  }
  else if (valor > 50) {
    removerPixel();
    criarPixel(50, 50);
    clickedPixel()
  }
};
buttonVQV();

function seletorPixel(event) {
  const pixelEscolhido = event.target;
  for (let i = 0; i < colorPallet.length; i += 1) {
    const temSelected = colorPallet[i].classList.contains('selected');
    if (temSelected === true) {
      pixelEscolhido.className = 'pixel ' + colorPallet[i].classList[1];
      pixelEscolhido.style.backgroundColor = colorPallet[i].style.backgroundColor;
    }
  }
}

function clickedPixel() {
  const pixelSelect = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelSelect.length; i += 1) {
    pixelSelect[i].addEventListener('click', seletorPixel);
  }
}

clickedPixel();

function buttonClearPixel() {
  const button = document.getElementById('clear-board');
  function clearPixel() {
    const pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      const clearPixel1 = pixel[i];
      clearPixel1.className = 'pixel white';
      clearPixel1.style.backgroundColor = 'white';

    }
  }
  button.addEventListener('click', clearPixel);
}

buttonClearPixel();

// gerador de Codigo de aproveitado de Leonardo Marcatti da Silva!

function generateColour() {
  const r = (Math.random() * 255).toFixed(0);
  const g = (Math.random() * 255).toFixed(0);
  const b = (Math.random() * 255).toFixed(0);
  return `rgb(${r}, ${g}, ${b})`;
}

function corAleatoria() {
  let cor2Ale = generateColour();
  cor2.style.backgroundColor = cor2Ale;
  let cor3Ale = generateColour();
  cor3.style.backgroundColor = cor3Ale;
  let cor4Ale = generateColour();
  cor4.style.backgroundColor = cor4Ale;
}

window.onload = seletorInicial(),
window.onload = corAleatoria();