const allSquares = document.querySelectorAll(".square")

const start = document.querySelector(".start")
start.style.background = "yellowgreen"

const spanPhase = document.querySelector(".span-phase")
const spanRound = document.querySelector(".span-round")

const finalBoss = document.createElement("img")
finalBoss.src = "finalBoss.png"
finalBoss.style.visibility = "visible"

const flameGif = document.createElement("img")
flameGif.src = "flameGif.gif"
flameGif.style.visibility = "visible"

let round = 0

let orderOfPlayerShoots = []

let orderOfAppearance = []

let phase = 3

let gameIsRunning = false


function randomize() {

    const randomNumber = Math.round((Math.random() * (allSquares.length - 1)))

    return randomNumber
}

function loopPhaseOne() {

    phase = 1

    round += 1

    orderOfAppearance = []

    orderOfPlayerShoots = []

    let additionOfTimeToInterval = 0


    for (let index = 0; index < round; index++) {


        setTimeout(() => {

            let randomSquare = allSquares[randomize()]

            while (orderOfAppearance.includes(randomSquare.classList[1])) {

                randomSquare = allSquares[randomize()]
            }

            orderOfAppearance.push(randomSquare.classList[1])

            randomSquare.style.visibility = "visible"

        }, 1000 + additionOfTimeToInterval)

        additionOfTimeToInterval += 1000
    }

    setTimeout(() => {

        gameIsRunning = false

    }, 1500 + additionOfTimeToInterval);

    start.style.background = "orange"

    start.disabled = true


}

function loopPhaseTwo() {

    round += 1

    let loopControl = 3

    let index = loopControl

    let speedIncrease = 1000 - (1000 * 0.10)

    orderOfAppearance = []

    orderOfPlayerShoots = []

    let additionOfTimeToInterval = 0


    switch (round) {


        case 3: {

            loopControl = 2
            speedIncrease = 1000 - (1000 * 0.15)
        }
            break

        case 4: {

            loopControl = 2
            speedIncrease = 1000 - (1000 * 0.15)
        }
            break

        case 5: {

            loopControl = 1
            speedIncrease = 1000 - (1000 * 0.20)
        }
            break

        case 6: {

            loopControl = 1
            speedIncrease = 1000 - (1000 * 0.20)
        }
            break

        case 7: {

            loopControl = 0
            speedIncrease = 1000 - (1000 * 0.25)
        }
            break

        case 8: {

            loopControl = 0
            speedIncrease = 1000 - (1000 * 0.25)
        }
            break
    }


    for (index = loopControl; index < allSquares.length; index++) {

        setTimeout(() => {

            let randomSquare = allSquares[randomize()]

            while (orderOfAppearance.includes(randomSquare.classList[1])) {

                randomSquare = allSquares[randomize()]
            }

            orderOfAppearance.push(randomSquare.classList[1])

            randomSquare.style.visibility = "visible"

        }, 1000 + additionOfTimeToInterval)

        additionOfTimeToInterval += speedIncrease
    }

    setTimeout(() => {

        gameIsRunning = false

    }, 1500 + additionOfTimeToInterval);

    start.style.background = "orange"

    start.disabled = true



}

function loopPhaseThree() {

    round = 0

    let squareToAppendBoss = undefined

    let additionOfTimeToInterval = 0

    let squaresWithBossAppended = []

    let newFlame = undefined

    let pixel = 100

    for (i = 0; i < 5; i++) {

        setTimeout(() => {

            squareToAppendBoss = allSquares[randomize()]

            while (squaresWithBossAppended.includes(squareToAppendBoss)) {

                squareToAppendBoss = allSquares[randomize()]
            }

            squareToAppendBoss.appendChild(finalBoss)

            squaresWithBossAppended.push(squareToAppendBoss)

            finalBoss.style.width = `${pixel}px`

            finalBoss.style.height = `${pixel}px`
  

        }, 1000 + additionOfTimeToInterval)


        setTimeout(() => {

            squareToAppendBoss.removeChild(finalBoss)

            newFlame = flameGif.cloneNode(true) /*¿Porqué no pongo aquí lineas 15 a 19 en vez de hacer un clon del nodo? Tal cual está, solo he creado el nodo 
            flameGif para clonarlo sucesivamente en esta linea*/
            newFlame.style.width = `${pixel}px`

            newFlame.style.height = `${pixel}px`

            squareToAppendBoss.appendChild(newFlame)

            pixel += 70

        }, 2000 + additionOfTimeToInterval)

        additionOfTimeToInterval += 3000

    }


  


}

function playerPhaseOne() {


    if (orderOfPlayerShoots.length === round) {

        const orderOfPlayerShootsReduced = orderOfPlayerShoots.reduce((prev, current) => {

            return prev + current
        })

        const orderOfAppearanceReduced = orderOfAppearance.reduce((prev, current) => {

            return prev + current
        })

        if (orderOfAppearanceReduced === orderOfPlayerShootsReduced) {

            alert("WIN")
            start.disabled = false
            start.style.background = "yellowgreen"
            start.textContent = `Continue`
            spanRound.textContent = `ROUND ${round + 1}`
        }
        else {
            alert("LOSE")
            start.disabled = false
            start.style.background = "crimson"
            start.textContent = `Try round ${round} again`
            round -= 1

        }


        if (round === allSquares.length) {

            alert("FASE 1 COMPLETADA")

            phase = 2

            round = 0

            spanPhase.textContent = "PHASE 2"

            spanRound.textContent = `ROUND ${round + 1}`


        }

    }


}

function playerPhaseTwo() {

    let lengthWhenReduce = 5

    switch (round) {

        case 3: {

            lengthWhenReduce = 6
        }
            break

        case 4: {

            lengthWhenReduce = 6
        }
            break

        case 5: {

            lengthWhenReduce = 7
        }
            break

        case 6: {

            lengthWhenReduce = 7
        }
            break

        case 7: {

            lengthWhenReduce = 8
        }
            break

        case 8: {

            lengthWhenReduce = 8
        }
            break
    }

    if (orderOfPlayerShoots.length === lengthWhenReduce) {

        const orderOfPlayerShootsReduced = orderOfPlayerShoots.reduce((prev, current) => {

            return prev + current
        })

        const orderOfAppearanceReduced = orderOfAppearance.reduce((prev, current) => {

            return prev + current
        })

        if (orderOfAppearanceReduced === orderOfPlayerShootsReduced) {

            alert("WIN")
            start.disabled = false
            start.style.background = "yellowgreen"
            start.textContent = `Continue`
            spanRound.textContent = `ROUND ${round + 1}`
        }
        else {
            alert("LOSE")
            start.disabled = false
            start.style.background = "crimson"
            start.textContent = `Try round ${round} again`
            round -= 1

        }


        if (round === allSquares.length) {

            alert("FASE 2 COMPLETADA")

            phase = 3

            round = 0

            spanPhase.textContent = "PHASE 3"

            spanRound.textContent = `ROUND ${round + 1}`



        }

    }



}

function playerPhaseThree () {


console.log("Click")


}

start.addEventListener(("click"), () => {

    gameIsRunning = true

    if (phase === 0 || phase === 1) loopPhaseOne()

    if (phase === 2) loopPhaseTwo()

    if (phase === 3) loopPhaseThree()

})

allSquares.forEach((square) => {


    square.addEventListener(("click"), () => {

        if (gameIsRunning) return

        square.style.visibility = "hidden"

        orderOfPlayerShoots.push(square.classList[1])

        if (phase === 1) playerPhaseOne()

        if (phase === 2) playerPhaseTwo()
    })
})

finalBoss.addEventListener(("click"), ()=> {

    if (phase === 3) playerPhaseThree()
})















