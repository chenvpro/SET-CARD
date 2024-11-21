/* add new players to the game */
let nbPlayer = 3;
const section = document.querySelector(".all-player");
const addPlayerButton = document.querySelector("#button-add-player");

const addButton = document.createElement("button");

function addPlayer() {
    const addInput = document.createElement("input");
    addInput.type = "text";
    addInput.name = `player${nbPlayer}`;
    addInput.id = `player${nbPlayer}`;
    addInput.class = "input-player";
    addInput.maxlength = "20";
    addInput.title = "20 charactères max";
    addInput.placeholder = `Indiquer le joueur ${nbPlayer}`;

    const article = document.querySelector(`#article-player-${nbPlayer}`);
    console.log(article);
    article.appendChild(addInput);

    //reload css
    const reloadFont = document.getElementById("reload-font");
    const reloadStyle = document.getElementById("reload-style");
    const reloadPlayerName = document.getElementById("reload-playerName");
    const timestamp = new Date().getTime();
    reloadFont.href = `./css/fonts.css?=${timestamp}`;
    reloadStyle.href = `./css/style.css?=${timestamp}`;
    reloadPlayerName.href = `./css/playerName.css?=${timestamp}`;

    nbPlayer += 1;
}

// add player button function
addPlayerButton.addEventListener("click", function () {
    if (nbPlayer < 5) {
        addPlayer();
    } else {
        addPlayer();
        addPlayerButton.style.display = "none";
    }
});
