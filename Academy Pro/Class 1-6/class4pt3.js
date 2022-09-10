// Declaração Literal de Array
let diasDaSemana = ["Sunday", "Monday", "Tuesday"];
console.log(diasDaSemana);

diasDaSemana.pop(); /* remove o último item do array */
console.log(diasDaSemana);

console.log(diasDaSemana.pop()); /* imprime o item que o método pop irá remover */

// Declaração de Array com Método Construtor
let meses = new Array("January", "February", "March");
console.log(meses);

meses.push("April"); /* adiciona item no final do array */
console.log(meses);

console.log(meses.push("May")); /* ? */

meses.unshift("December"); /* adiciona item no início do array */

meses.shift(); /* remove o primeiro item do array */
console.log(meses);

let indiceDoMes = meses.indexOf("January"); /* retorna o indice no array do item indicado */
console.log(indiceDoMes);

// Objetos
let usuario = {
    /* key: value */
    nome: "Henrique",
    idade: 20,
    profissão: "Programador",
}

//

// Formulário com Prompt que "Armazena" Objeto em Array
let nomeDoCliente = prompt("Nome:");
let idadeDoCliente = prompt("Idade:");
let trabalhoDoCliente = prompt("Profissão:");

/* Array que faz função de uma Biblioteca de Dados */
let infoDosClientes = [
  {
    nomeDoCliente,
    idadeDoCliente,
    trabalhoDoCliente,
  },

  {
    nomeDoCliente: "Luva de Pedreiro",
    idadeDoCliente: 18,
    trabalhoDoCliente: "Tik Toker",
  },
];

console.log(infoDosClientes);
console.log(infoDosClientes[1].trabalhoDoCliente); /* como buscar uma propriedade específica de um objeto no array */