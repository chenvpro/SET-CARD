const btnStartGame = document.querySelector(".btn-start-game");
const players = document.getElementsByClassName("input-player");

btnStartGame.addEventListener("click", function () {
    for (let player of players) {
        if (player.value) {
            btnStartGame.href = "gameStart.html";
        } else {
            alert("Veuillez rentrer au moins deux noms de joueurs pour commencer la partie");
        }
    }
});
