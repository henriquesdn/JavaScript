let n = 3 + 2; // variável do tipo number
let myName = "Henrique"; // variável do tipo string
let secondName; // variável sem valor
secondName = "Santos"; // atribuição de valor a uma variável declarada anteriomente
let hasPhone = true; // variável do tipo boolean
let hasHouse = null; // variável de valor nulo
let itemsForBuying = []; // array
let personData = {}; // objeto
const MOEDA = "Real"; // CONSTANTE
const PI = 3.1415;

//

console.log(typeof myName); // console retorna tipo da variável ou constante
console.log(typeof itemsForBuying);
console.log(typeof PI);
console.log(n); // console retorna valor da variável ou constante
console.log(MOEDA);

// declaração condicional
if (4 < 5) {
    console.log("verdadeiro");
  } else {
    console.log("falso");
  }

console.log(1 == "1"); // compara conteúdo, = true
console.log(1 === "1"); // compara tipo e conteúdo, = false
console.log(hasPhone); // será verdadeiro enquanto o valor da variável for true
console.log(1 == "1" && 1 === "1"); // and, necessita que ambos sejam true para ser true também, = false
console.log(1 == "1" || 1 === "1"); // or, necessita que apenas um seja true para ser true, = true


// Existe um mecanismo de conversão de tipos na liguagem JavaScript que consegue converter outros tipos de valores para boolean, aqueles que são convertidos para true são conhecidos como "truthy", enquanto os que são convertidos para false são os "falsy".

//truthy
let age = 42; // number
let job = " " // string não vazia
let kids = []; // objeto

// falsy
let myAge = ""; // string vazia
let myJob = null; // variável nula
let numberOfKids; // variável sem valor