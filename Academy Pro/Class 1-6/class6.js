// Object Method, função como propriedade de objeto
const dados = {
  nome: "Henrique",
  anoDeNascimento: 2001,
  profissão: "Programador",
  temHabilitação: false,

  calcIdade: function() {
    let anoAtual = new Date().getFullYear(); /* função que retorna data atual + método para retornar apenas o ano */
    this.idade = anoAtual - this.anoDeNascimento; /* cria a propriedade idade */
    return this.idade;
  },

  sumário: function() {
    return `${this.nome} é um ${this.profissão} de ${this.calcIdade()} anos de idade e 
    ${this.temHabilitação ? "é habilitado" : "não é habilitado"}.`;
  },
};

console.log(dados.idade);
console.log(dados.sumário());

// Criando propriedade de objeto dinamicamente.
dados.telefone = "99999-0000"; /* adiciona a propriedade telefone ao objeto dados */
console.log(dados.telefone);

// While;
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador += 1;
}

// Do While
let contadorDoWhile = 0;

do {
  contadorDoWhile += 1;
  console.log(contadorDoWhile);
} while (contadorDoWhile < 5);