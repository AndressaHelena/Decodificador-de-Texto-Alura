
let textoDigitado = document.querySelector("#input-texto");
let criptografar = document.querySelector("#btn-cripto");
let descriptografar = document.querySelector("#btn-descripto");
let copiar = document.querySelector("#btn-copy");
let resultado = document.querySelector("#mensagem");
//let descriptoResultado = document.querySelector("#mensagem");
let buttonLimpar = document.querySelector("#limpar");


const regex = /^[a-z\s]+$/;

function criptarTexto(event) {
  let texto = textoDigitado.value;

  if (regex.test(texto) == true) {

    let criptar1 = texto.replaceAll("e", "enter");
    let criptar2 = criptar1.replaceAll("i", "imes");
    let criptar3 = criptar2.replaceAll("a", "ai");
    let criptar4 = criptar3.replaceAll("u", "ufat");
    let criptar5 = criptar4.replaceAll("o", "ober");

    resultado.value = criptar5;
    event.preventDefault();


  } else {

    alert("Digite uma frase válida, sem acentos, palavras maiúsculas ou números");

  }

}

function descriptarTexto(event) {
  let texto = textoDigitado.value;

  if (regex.test(texto) == true) {

    let decriptar1 = texto.replaceAll("enter", "e");
    let decriptar2 = decriptar1.replaceAll("imes", "i");
    let decriptar3 = decriptar2.replaceAll("ai", "a");
    let decriptar4 = decriptar3.replaceAll("ufat", "u");
    let decriptar5 = decriptar4.replaceAll("ober", "o");

    resultado.value = decriptar5;
    event.preventDefault();

  } else {


    alert("Digite uma frase válida, sem acentos ou palavras maiúsculas");

  }

}

function limparTexto() {
  document.getElementById("input-texto").value = ""
  document.getElementById("mensagem").value = ""
}

function copiarTexto() {
  let copy = mensagem;
  navigator.clipboard.writeText(copy.value);
}

criptografar.onclick = criptarTexto;

descriptografar.onclick = descriptarTexto;

copiar.onclick = copiarTexto;

buttonLimpar.onclick = limparTexto;


