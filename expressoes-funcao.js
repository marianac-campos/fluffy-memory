// === EXPRESSOES DE FUNCAO === //

// declaração de funcao

function minhaFuncao(param) {
  // bloco de codigo
}

minhaFuncao("param");

// expressao de funcao

const soma = function(num1, num2) { return num1 + num2 };
console.log(soma(17, 65));

// diferenca principal: HOISTING
// funcoes e var sao "listadas" primeiro quando o codigo e executado

console.log(apresentar());

function apresentar() {
  return "Ola, muito prazer!";
}

// console.log(somaOutroExemplo(1, 1)); // apresenta erro

const somaOutroExemplo = function(num1, num2) { return num1 + num2 };
