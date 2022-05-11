const allCharacters = document.querySelectorAll(".div-character")
const characterSelected = document.querySelector(".character-selected")
const input = document.querySelector("input")
const goToGame = document.querySelector(".go-to-game")

const player = {

    playerName: "",

    character: "",

    ranking: ""
}

allCharacters.forEach((character) => {

    
    character.addEventListener(("click"), () => {

        input.style.top = "300px"
        characterSelected.textContent = ""
        characterImageCLoned = character.firstChild.cloneNode(true)
        characterSelected.appendChild(characterImageCLoned)
        player.character = character.firstChild.alt
        characterSelected.classList.add("shake")
        setTimeout(() => {
            characterSelected.classList.remove("shake")
        }, 100);
        console.log(allCharacters[0])
        console.log(player)

    })

})


goToGame.addEventListener(("click"), () => {

    player.playerName = input.value

    if (player.character != undefined && input.value != "") window.location = "game.html"
    else { alert("Choose character and player name!") }




})


