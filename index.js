const button = document.querySelector("button")
const shoot = document.querySelector("audio")

button.addEventListener(("click"), () => {

    shoot.play()

    button.classList.remove("floater")

    setTimeout(() => {

        button.classList.add("zoomerOut")

    }, 500);


    setTimeout(() => {

        window.location = "selector.html"

    }, 3000);



})


