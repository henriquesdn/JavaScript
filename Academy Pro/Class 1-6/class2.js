// Aluno A
const alunoA = "Jamerson";
const fezTrabalhoAlunoA = false;
const alunoAnota1 = 6.0;
const alunoAnota2 = 7.5;
const alunoAnota3 = 7.0;
const alunoAnota4 = 8.0;
let mediaAlunoA = (alunoAnota1 + alunoAnota2 + alunoAnota3 + alunoAnota4) / 4;

// Aluno B
const alunoB = "Alda";
const fezTrabalhoAlunoB = false;
const alunoBnota1 = 5.0;
const alunoBnota2 = 6.5;
const alunoBnota3 = 7.0;
const alunoBnota4 = 8.0;
let mediaAlunoB = (alunoBnota1 + alunoBnota2 + alunoBnota3 + alunoBnota4) / 4;

// Aluno a ser testado 
let nomeDoAluno = alunoA;
let fezTrabalho = fezTrabalhoAlunoA;
let mediaDoAluno = mediaAlunoA;

if (fezTrabalho) {
    console.log(`${nomeDoAluno} entregou o trabalho`);
} else { 
    console.log(`${nomeDoAluno} não entregou o trabalho`);
}

if (mediaDoAluno >=  7.0 || fezTrabalho) {
    console.log(`${nomeDoAluno} foi aprovado(a), sua média foi ${mediaDoAluno}.`);
} else {
    console.log(`${nomeDoAluno} foi reprovado(a), sua média foi ${mediaDoAluno}.`);
}

// condicional else if

let curso = "Educacao Fisica";

if (curso === "Medicina") {
    console.log("Compre um jaleco e uma camiseta");
} else if (curso === "Programacao"){
    console.log("Compre um notebook, uma cafeteira e um curso");
} else if (curso === "Nutricao") {
    console.log("Compre uma balança");
} else {
    console.log(`Sem sugestões para o curso de ${curso}`);
}

// ternary operator, condicional em uma única linha

//        se                    ou           então        senão
console.log(mediaDoAluno >= 7.0 || fezTrabalho ? "Aprovado" : "Reprovado");

// array (lista)

let mySalad = ["manga", "abacaxi", "banana"];
let myNotes = [6, 7.5, 7, 8.0];
let arrayBidimensional = [
    "caderno",
    "caneta",
    "agenda",
    ["escova de dentes", "creme dental", "sabonete"]];

console.log(arrayBidimensional[3]); // retorna [ 'escova de dentes', 'creme dental', 'sabonete' ]
console.log(arrayBidimensional[3][1]); // retorna creme dental apenas


