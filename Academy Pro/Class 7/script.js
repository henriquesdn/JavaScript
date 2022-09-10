// Manipulando elementos HTML através do objeto document

/* document + método retornando elemento 0 do array paragrafoDeTeste + método que retorna conteúdo textual */
document.getElementsByClassName("paragrafoDeTeste")[0].textContent = "Meu teste";
/* o conteúdo textual do elemento foi alterado */

/* for que imprime todo o conteúdo de uma classe no console */
for (let cont = 0; cont < document.getElementsByClassName("paragrafoDeTeste").length; cont += 1) {
    console.log(document.getElementsByClassName("paragrafoDeTeste")[cont].textContent);
}

/* document + método retornando elemento através do id + método que retorna conteúdo textual */
document.getElementById("pTeste1").textContent = "Meu teste com getElementById";

/* document + querySelector retornando elemento através do id + método que retorna conteúdo textual */
document.querySelector("#pTeste2").textContent = "Meu teste com querySelector";
/* o querySelector funciona de modo similar aos métodos getElement, com o diferencial que este pode retornar elementos através de diversos atributos (#id, .classe...), retornando o primeiro elemento no documento que se encaixe no parâmetro */

/* document + querySelectorAll retornando elemento através da classe + método que retorna conteúdo textual */
document.querySelectorAll(".paragrafoDeTeste")[3].textContent = "Meu teste com querySelectorAll";
/* a diferença entre querySelector e o querySelectorAll é que o querySelectorAll não retorna apenas o primeiro elemento que possua o atributo especificado, mas sim uma lista com todos os elementos correspondentes */

/* document + querySelector retornando elemento através do id + método que retorna style do elemento*/
document.querySelector("#pTeste0").style.backgroundColor = "red";
/* repare que no CSS para se referir ao background color a palavra reservada seria com hífen (background-color) enquanto no CSS é com camelCase (backgroundColor) */

/* document + método retornando elemento através do id + método que manipula classe do elemento */
document.getElementById("pTeste0").classList.add("classeDeTeste");
/* o elemento foi adicionado a classe "classeDeTeste" */

/* document + método retornando elemento através do id + método que manipula classe do elemento */
document.getElementById("pTeste0").classList.remove("classeDeTeste");
/* o elemento foi removido da classe "classeDeTeste" */

// Métodos de arredondamento de Number
let arredondaPraCima = Math.ceil(2.1);
let arredondaPraBaixo = Math.floor(2.9);
let arredondaParaMaisProximo = Math.round(2.99);

console.log(arredondaPraCima);
console.log(arredondaPraBaixo);
console.log(arredondaParaMaisProximo);

arredondaParaMaisProximo = Math.round(5.3);
console.log(arredondaParaMaisProximo);