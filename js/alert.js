import "./reloadJS.js";

const player1 = document.getElementById("1");
const player2 = document.getElementById("2");
const btnStartGame = document.querySelector(".btn-start-game");

btnStartGame.addEventListener("click", function () {
    if (player1.value && player2.value) {
        btnStartGame.style.cursor = "pointer";
        btnStartGame.style.pointerEvents = "auto";
        btnStartGame.style.opacity = "1";
        btnStartGame.href = "gameStart.html";
    } else {
        alert("Veuillez rentrer au moins deux noms de joueurs pour commencer la partie");
    }
});
