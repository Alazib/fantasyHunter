const allCharacters = document.querySelectorAll(".character")
const allWeapons = document.querySelectorAll(".weapon")
const characterSelected = document.querySelector(".character-selected")
const weaponSelected = document.querySelector(".weapon-selected")
const input = document.querySelector("input")
const goToGame = document.querySelector(".go-to-game")

const player = {

    playerName: undefined,

    character: undefined,

    weapon: undefined,

    ranking: undefined
}


allCharacters.forEach((character) => {

    character.addEventListener(("mouseover"), () => {

        character.style.background = "yellow"
    })

    character.addEventListener(("mouseout"), () => {

        character.style.background = "white"
   
    })

    character.addEventListener(("click"), () => {

        player.character = character
        characterSelected.textContent = player.character.className
        characterSelected.style.background = "yellow"
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

goToGame.addEventListener(("click"), ()=> {

    if (player.character != undefined && player.weapon != undefined) window.location = "game.html"
    else {alert("Choose character and weapon!")}

    
})




