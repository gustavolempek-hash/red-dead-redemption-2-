// ==========================================
// CURIOSIDADES ALEATÓRIAS
// ==========================================

const curiosidades = [
    "Arthur Morgan possui diferentes roupas que podem ser usadas de acordo com o clima.",
    
    "O jogador pode criar vínculos com seu cavalo, aumentando sua confiança e melhorando algumas habilidades.",
    
    "O mundo do jogo possui diversos encontros aleatórios que podem acontecer durante a exploração.",
    
    "É possível pescar em vários rios e lagos espalhados pelo mapa.",
    
    "O jogo possui um sistema de honra que pode mudar de acordo com as ações do jogador.",
    
    "Existem vários animais diferentes que podem ser encontrados e estudados durante a exploração.",
    
    "O clima e o ambiente podem mudar enquanto o jogador explora o mundo.",
    
    "Além das missões principais, existem várias atividades secundárias para descobrir."
];

const botao = document.getElementById("botaoCuriosidade");
const texto = document.getElementById("curiosidadeExtra");

botao.addEventListener("click", function () {

    const numeroAleatorio =
        Math.floor(Math.random() * curiosidades.length);

    texto.textContent = curiosidades[numeroAleatorio];

});


// ==========================================
// EFEITO NO MENU
// ==========================================

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.style.color = "white";
        });

        this.style.color = "#d43a28";

    });

});


// ==========================================
// MENSAGEM NO CONSOLE
// ==========================================

console.log(
    "Bem-vindo ao site sobre Red Dead Redemption 2!"
);