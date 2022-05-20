const allCharacters = document.querySelectorAll(".div-character")

// Input no es buen nombre, nameCharacter o namePlayer o similar seria algo mejor
const playerName = document.querySelector("input")
const goToGame = document.querySelector(".go-to-game")


// Aunque lo haces por costumbre, a nivel estilo no es correcto dejar espacion entre key de un objeto
const player = {
    playerName: "",
    character: "",
    ranking: ""
}
// Si en la función de callback solo recibimos un parametro, podemos remover los parentesis
allCharacters.forEach(character => {
// El primer parametro que espera recibir el addEventListener es un string, no hace falta ()
    character.addEventListener("click", () => selectCharacter(character)) 
        // Se que es una chorrada, pero acuerdate siempre de quitar los console.log
    
})

function selectCharacter (character) {
// Si una variable/constante solo va a ser usada en una función, es mejor que la declares dentro de esa funcion
    const characterSelected = document.querySelector(".character-selected")
    playerName.style.top = "300px"
    characterSelected.textContent = ""
    characterImageCLoned = character.firstChild.cloneNode(true)
    characterSelected.appendChild(characterImageCLoned)
    player.character = character.firstChild.alt
    characterSelected.classList.add("shake")
    setTimeout(() => {
        characterSelected.classList.remove("shake")
    }, 100);
}


goToGame.addEventListener(("click"), () => {

    player.playerName = playerName.value
    // Al sacar las condiciones a una constante le podemos dar nombre y decir que significa
    // Yo puedo deducir que significa pero ya me toca deducirlo. Con un nombre ya se lo que hace 
    // y no tengo porque leer todo lo que tiene que cumplir
    const isCharacterSelected = player.character != undefined && playerName.value != ""
    
    // Normalmente no hacemos if-else, si la funcion no tiene nada mas hacemos un early return
    // En el if si entra haces lo que tengas que hacer y terminas la ejecucion con un return
    // Si no entra pues ejecutara lo que haya debajo
    if (isCharacterSelected) {
        window.location = "game.html"
        return
    }
    
    alert("Choose character and player name!")

})


