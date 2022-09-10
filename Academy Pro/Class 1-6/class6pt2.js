// IMC utilizando Object Method
let usuario1 = {
    nome: "Henrique",
    peso: 65.5,
    altura: 1.77,

    calcIMC: function() {
        this.imc = this.peso / (this.altura * this.altura);
        return this.imc;
    },
}

let usuarioTestado = usuario1;

console.log(`O usuário ${usuarioTestado.nome} com um peso de ${usuarioTestado.peso} e altura de ${usuarioTestado.altura} possui um IMC equivalente a ${usuarioTestado.calcIMC().toFixed(2)}.`);