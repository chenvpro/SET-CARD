/* add new players to the game */
let nbPlayer = 2;
const section = document.querySelector(".all-player");
const addPlayerButton = document.querySelector("#button-add-player");

function addPlayer() {
    nbPlayer += 1;

    const addInput = document.createElement("input");
    addInput.type = "text";
    addInput.name = `player${nbPlayer}`;
    addInput.id = `${nbPlayer}`;
    addInput.className = "input-player";
    addInput.maxLength = "20";
    addInput.title = "20 charactères max";
    addInput.placeholder = `Indiquer le joueur ${nbPlayer}`;

    const addRemoveButton = document.createElement("button");
    addRemoveButton.className = "button-remove-player";
    addRemoveButton.title = "retirer un joueur";
    addRemoveButton.id = `remove-button${nbPlayer}`;

    let links = document.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("rel") == "stylesheet") {
            let href = links[i].getAttribute("href").split("?")[0];

            let newHref = href + "?version=" + new Date().getMilliseconds();

            links[i].setAttribute("href", newHref);
        }
    }

    const article = document.querySelector(`#article-player-${nbPlayer}`);
    article.appendChild(addInput);
    article.appendChild(addRemoveButton);

    const targetRemoveButton = document.querySelector(`#remove-button${nbPlayer}`);

    const addImg = document.createElement("img");
    addImg.src = "../images/close.png";
    addImg.alt = "cross image";
    addImg.id = `img-cross${nbPlayer}`;
    targetRemoveButton.appendChild(addImg);

    if (nbPlayer > 3) {
        const previousButtonImg = document.querySelector(`#img-cross${nbPlayer - 1}`);
        previousButtonImg.style.display = "none";
    }
}

function removePlayer() {
    nbPlayer -= 1;
}

// add player button function
addPlayerButton.addEventListener("click", function () {
    if (nbPlayer < 4) {
        addPlayer();
        removeButton();
    } else {
        addPlayer();
        removeButton();
        addPlayerButton.style.display = "none";
    }
});

function removeButton() {
    const input = document.getElementById(`${nbPlayer}`);
    const removeButton = document.getElementById(`remove-button${nbPlayer}`);
    removeButton.addEventListener("click", function () {
        input.remove();
        const button = document.getElementsByTagName("button");
        button[nbPlayer - 1].remove();
        if (nbPlayer > 3) {
            const previousButtonImg = document.querySelector(`#img-cross${nbPlayer - 1}`);
            previousButtonImg.style.display = "block";
        }
        removePlayer();
        if (nbPlayer < 5) {
            addPlayerButton.style.display = "block";
        }
    });
}
