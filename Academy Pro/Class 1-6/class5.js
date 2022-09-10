// Strict Mode, não permite que algumas gambiarras sejam utilizadas no código, logo, é um recurso fundamental para desenvolvedores
"use strict";

// Formas de acessar propriedades, notação de ponto e notação de colchetes
const meusDados = {
  primeiroNome: "Henrique",
  idade: 21,
  profissão: "Programador",
};

let comp = "Nome";

console.log(meusDados.primeiroNome); /* notação de ponto, dot notation" */
console.log(meusDados["primeiro" + comp]); /* notação de colchetes, bracket notation */

// Laços for e for of
let diasDaSemana = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

/*   contador ; condição de execução   ; incremento do contador */
for (let i = 0; i < diasDaSemana.length; i += 1) {
  if (diasDaSemana[i] === "sat") {
    console.log(diasDaSemana.indexOf("sat"));
  }
}

/* similar ao for, o for of percorre todos os elementos de um array ou objeto */ 
for (const dias of diasDaSemana) {
  if (dias === "sat") {
    console.log("Dia de dormir");
  }
}

// Map
const valores = [1.23456, 2.56789, 1.234234, 3.33333];

/*  variával ou constante = arrayQueSeraMapeado.map(function retornaNovoArray {}) */
const valoresCom2Decimais = valores.map((indice) => Number(indice.toFixed(2)));

console.log(valores);
console.log(valoresCom2Decimais);

// Filter
const palavras = ["teste", "pararelepípedo", "antropópolgo", "dia", "segunda"];

/*  variával ou constante = arrayQueSeraFiltrado.map(function validaItensDoArray {}) */
const palavrasFiltradas = palavras.filter((palavra) => palavra.length < 6);

console.log(palavrasFiltradas);

/* arrayQualquer.lenght = tamanho do array */
/* .toFixed() == Arredonda um número de acordo com a quantidade de casas decimais passadas como parâmetro */
