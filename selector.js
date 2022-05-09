const allCharacters = document.querySelectorAll(".character")
const allWeapons = document.querySelectorAll(".weapon")
const characterSelected = document.querySelector(".character-selected")
const weaponSelected = document.querySelector(".weapon-selected")
const input = document.querySelector("input")
const goToGame = document.querySelector(".go-to-game")

const player = {

    playerName: "",

    character: "",

    weapon: "",

    ranking: ""
}

allCharacters.forEach((character) => {

    character.addEventListener(("mouseover"), () => {

        character.style.background = "yellow"
    })

    character.addEventListener(("mouseout"), () => {

        character.style.background = "white"

    })

    character.addEventListener(("click"), () => {

        player.character = character.alt
        characterSelected.textContent = ""
        characterSelected.appendChild(character.firstChild.cloneNode(true))
        characterSelected.style.height = "auto"
        characterSelected.classList.add("shake")

        setTimeout(() => {
            characterSelected.classList.remove("shake")
        }, 100);

    })

})


allWeapons.forEach((weapon) => {


    weapon.addEventListener(("mouseover"), () => {

        weapon.style.background = "aqua"
    })

    weapon.addEventListener(("mouseout"), () => {

        weapon.style.background = "white"
    })

    weapon.addEventListener(("click"), () => {

        player.weapon = weapon
        weaponSelected.textContent = player.weapon.className
        weaponSelected.style.background = "aqua"

        weaponSelected.classList.add("shake")

        setTimeout(() => {
            weaponSelected.classList.remove("shake")
        }, 100);

    })
})

goToGame.addEventListener(("click"), () => {

    player.playerName = input.value

    if (player.character != undefined && player.weapon != undefined && input.value != "") window.location = "game.html"
    else { alert("Choose character, weapon and player name!") }




})


