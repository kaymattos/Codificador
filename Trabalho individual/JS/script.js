//1- Cifra de César
const codify = (text, count) => {
  let codiText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt(0);
    codiText += String.fromCharCode(char + count);
  }
  return codiText;
};
const decodify = (text, count) => {
  let decoText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt(0);
    decoText += String.fromCharCode(char - count);
  }
  return decoText;
};

//2- Base64
function codifyBase64(msgm) {
  return btoa(msgm);
}
function decodyBase64(msg) {
  return atob(msg);
}

//3- Esconder Incremento
let cifradecesar = document.getElementById('cifradecesar');
let base64 = document.getElementById('base64');
let incrementar = document.getElementById('incrementacao');

function mostraIncremento() { 
incrementar.style.display = "inline"; 
}

function escondeIncremento() {
incrementar.style.display = "none";
}

cifradecesar.addEventListener('change', mostraIncremento);
base64.addEventListener('change', escondeIncremento);

let resposta = document.getElementById('resultado');
let incremento = parseInt(document.getElementById('incrementacao').value);
console.log(incremento);
console.log(typeof incremento);

// Botões de Codificar e Decodificar
function btnCod() {
  const texto = document.getElementById("textoBruto").value;
  const contagem = parseInt(document.getElementById("incrementacao").value);

  const selecinadoBase64 = document.getElementById("base64").checked;
  let codiText = "";
  if (selecinadoBase64) {
    codiText = codifyBase64(texto);
  } else {
    codiText = codify(texto, contagem);
  }
  document.getElementById("textoCodificado").innerText = codiText;
}
function btnDeco() {
  const texto = document.getElementById("textoBruto").value;
  const contagem = parseInt(document.getElementById("incrementacao").value);

  const selecinadoBase64 = document.getElementById("base64").checked;
  let codiText = "";
  if (selecinadoBase64) {
    codiText = decodyBase64(texto);
  } else {
    codiText = decodify(texto, contagem);
  }
  document.getElementById("textoCodificado").innerText = codiText;
}




















