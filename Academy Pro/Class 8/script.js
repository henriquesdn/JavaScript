// Modal

/* um modal é uma janela que abre sobre o centeúdo principal da página o deixando em um plano ao fundo */
const modal = document.querySelector(".modal");
/* overlay = plano ao fundo do modal */
const overlay = document.querySelector(".overlay");
/* botão de fechar do modal */
const closeButton = document.querySelector(".close-modal");
/* botões que abrem o modal, é utilizado querySelectorAll por ser mais de um */
const buttonsOpenModal = document.querySelectorAll(".show-modal");

/* função que exibe o modal, removendo o tanto do modal quando do overlay a classe hidden */
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

/* função que esconde o modal, atribuindo novamente tanto ao modal quando ao overlay a classe hidden */
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

/* atribuindo aos botões a função de exibição do modal */
for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener("click", openModal);
        /* o método addEventListener() permite configurar funções a serem chamadas quando o evento especificado acontece, recebe dois parâmetros, sendo o primeiro o evento e o segundo é a função */
}

/* atribuindo ao botão "x" a função de fechar o modal */
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/* fechar o modal ao pressionar esc */
document.addEventListener("keyup", function (botaoPressionado) {
  if (botaoPressionado.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});