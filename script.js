
let textoDigitado = document.querySelector("#input-texto");
let criptografar = document.querySelector("#btn-cripto");
let decriptografar = document.querySelector("#btn-descripto");
let copiarCripto = document.querySelector("#btn-copy");
let criptoResultado = document.querySelector("#mensagem");
let decriptoResultado = document.querySelector("#mensagem");
let buttonLimpar = document.querySelector("#limpar");


// Expressão regular que checa os caracteres de a-z e espaços em brancos até o fim da frase
const regex = /^[a-z\s]+$/; 

function criptarTexto(event) {
  let texto = textoDigitado.value;

  /*
  
    Se digitar alguma palavra com acento, maiúscula ou número
    a condição vai barrar e exibirá um alerta
    Caso contrário seguirá decriptando a frase
  */
  if (regex.test(texto) == true){

    
    let criptar1 = texto.replaceAll("e", "enter");
    let criptar2 = criptar1.replaceAll("i", "imes");
    let criptar3 = criptar2.replaceAll("a", "ai");
    let criptar4 = criptar3.replaceAll("u", "ufat");
    let criptar5 = criptar4.replaceAll("o", "ober");
    
    criptoResultado.value = criptar5;
    event.preventDefault();
   
  } else {
    
    alert("Digite uma frase válida, sem acentos, palavras maiúsculas ou números");

  }
 
}

function decriptarTexto(event) {
  let texto = textoDigitado.value;

  /*
  Antes essa condição estava passando palavras maiúsculas
  Agora com a correção tem o mesmo comportamento da outra condição
  */
  if (regex.test(texto) == true){

    let decriptar1 = texto.replaceAll("enter", "e");
    let decriptar2 = decriptar1.replaceAll("imes", "i");
    let decriptar3 = decriptar2.replaceAll("ai", "a");
    let decriptar4 = decriptar3.replaceAll("ufat", "u");
    let decriptar5 = decriptar4.replaceAll("ober", "o");
    
    decriptoResultado.value = decriptar5;
    event.preventDefault();

  } else {
    
    // Pode personalizar essa frase de alerta também
    alert("Digite uma frase válida, sem acentos ou palavras maiúsculas");

  }
  
}
function copiarTexto() {
  let mensagem = criptoResultado.value;
  navigator.clipboard.writeText(mensagem);
}



function limparTexto(){
  document.getElementById("input-texto").value=""
  document.getElementById("mensagem").value=""
  
 
}
function mostra() {
  var exibir = document.getElementById("input-texto");
  if (exibir.style.visibility === 'hidden') {
    exibir.mensagem.display = 'block';
  } else {
    exibir.style.visibility='hidden';
  }
}


criptografar.onclick = criptarTexto;

descriptografar.onclick = decriptarTexto;

copiarCripto.onclick = copiarTexto;

copiarDecripto.onclick = copiarTexto;

buttonLimpar.onclick = limparTexto;
