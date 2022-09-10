// Usuário 1
let nome1 = "Henrique";
let peso1 = 65.5;
let altura1 = 1.77;
let imc1 = peso1 / (altura1 * altura1);

// Usuário 2
let nome2 = "João";
let peso2 = 90;
let altura2 = 1.75
let imc2 = peso2 / (altura2 * altura2);

// Usuário Testado A
let usuarioTestadoA = nome1;
let imcTestadoA = imc1;

// Usuário Testado B
let usuarioTestadoB = nome2;
let imcTestadoB = imc2;

console.log(`O imc de ${usuarioTestadoA} é: ${imcTestadoA}`);
console.log(`O imc de ${usuarioTestadoB} é: ${imcTestadoB}`);

switch(true) {
    case imc1 > imc2:
        console.log(`O imc de ${usuarioTestadoA} é maior que o imc de ${usuarioTestadoB}.`);
        break;
    case imc1 < imc2:
        console.log(`O imc de ${usuarioTestadoB} é maior que o imc de ${usuarioTestadoA}.`);
        break;
    case imc1 === imc2:
        console.log(`O imc de ${usuarioTestadoA} é o mesmo imc de ${usuarioTestadoB}.`);
        break;
}

// Conversão de Variável
let varString = "2001";
let varStringConvertida = Number(varString);
console.log(typeof(varStringConvertida));

// Função
function calcIdade() {
  console.log("Função chamada");
}

// Chamar função
calcIdade();

// Declarando função (parâmetros)
function calcIMC(peso, altura) {
  let imc = peso / (altura * altura);
  if (imc >= 25) {
    return `seu peso está acima da média com IMC de ${imc}.`;
  } else {
    return `seu peso está OK, imc = ${imc}, continue treinando.`;
  }
}

// Atribuindo a uma variável o valor de retorno da função
let resultadoDaFuncao = calcIMC(66, 1.77);
console.log("Henrique", resultadoDaFuncao);

// Função que chama função
function onlyCalcIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

function printIMC(peso, altura) {
  let imc = onlyCalcIMC(peso, altura);
  if (imc >= 25) {
    return `seu peso está acima da média com IMC de ${imc}.`;
  } else {
    return `seu peso está OK, imc = ${imc}, continue treinando.`;
  }
}

let ResultadoDaFuncao2 = printIMC(66, 1.77);
console.log("Henrique", ResultadoDaFuncao2);




