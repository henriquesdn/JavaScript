// Function Expression - Expressão de Função: Atribui seu retorno a uma variável ou constante logo na sua declaração
const calcularIdade = function(anoDeNascimento) {
  return 2022 - anoDeNascimento;
};

console.log(calcularIdade(2001));

// Anonymous Functions: Função sem nome
setTimeout(function() {
  console.log("Apareço depois de 5 segundos");
}, 5000);

// Arrow Function - Função Seta
/* variável/const = (parâmetros)     => retorno; */
const minhaIdade = (anoDeNascimento) => 2022 - anoDeNascimento;
console.log(minhaIdade(2001));

// Função de Callback
    /* função que atribui parâmetro a outra função */
function pedeInputDoUsuario(funcaoCallback) {
    let nomeDoUsuario = prompt("Por favor, insira seu nome");
    funcaoCallback(nomeDoUsuario); /* transforma o parâmetro em uma função que recebe nomeDoUsuario como parâmetro */
  }

    /* função que será chamada recebendo nomeDoUsuario como parâmetro */ 
function alertaBemVindo(seraNomeDoUsuario) { 
  alert("Olá " + seraNomeDoUsuario);
}
    /* o parâmetro aqui poderia se chamar nomeDoUsuario também, já que variáveis criadas dentro de uma função só existem dentro dela mesma */

pedeInputDoUsuario(alertaBemVindo);
