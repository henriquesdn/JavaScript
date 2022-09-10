/* para retornar um number aleatório de 1 a 20 */
let numeroAleatorio = Math.random() * 20 + 1;
console.log(numeroAleatorio);

/* para retirar todas a casas decimais do number */
let numeroAleatorioArredondado = Math.trunc(numeroAleatorio);
console.log(numeroAleatorioArredondado);

//

// Desestruturação de Array
let arrayQualquer = [70, 80, 90];
let [x, y, z] = arrayQualquer;

console.log(x); /* 70 */
console.log(y); /* 80 */
console.log(z); /* 90 */
/* Repare que cada nome de variável é mapeado para o item de índice correspondente no array desestruturado */

// Spread Operator ...
let arrayA = [10, 20, 30];
let arrayB = [40, 50, 60];

/* o spread operator pode retornar todos os itens de um array */
let arrayC = [...arrayA, ...arrayB];
console.log(arrayC); /* [10, 20, 30, 40, 50, 60] */

/* spread operator mapeando múltiplos itens em uma mesma variável */
let a, b, resto;
[a, b, ...resto] = [10, 20, 30, 40, 50];
console.log(resto);

// Desestruturação de Objeto
let usuario = {
    nome: "Henrique",
    idade: 20,
    profissão: "Programador",
  };
  
let {name, idade} = usuario;

// Optional Channing ?

/* útil para evitar erro quando chamamos uma propriedade que não sabemos se existe */
console.log(usuario?.endereço);