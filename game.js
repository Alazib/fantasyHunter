const allSquares = document.querySelectorAll(".square")

const allBoss = document.querySelectorAll(".boss")

const start = document.querySelector(".start")
start.style.background = "yellowgreen"

const spanPhase = document.querySelector(".phase")
const spanRound = document.querySelector(".round")
const spanHealthBoss = document.querySelector(".health-boss")
const spanHealthPlayer = document.querySelector(".health-player")

const body = document.querySelector("body")

const shoot = document.querySelector(".shoot")

const finalBoss = document.createElement("img")
finalBoss.src = "finalBoss.png"
finalBoss.style.visibility = "visible"

const flameGif = document.createElement("img")
flameGif.src = "flameGif.gif"
flameGif.style.visibility = "visible"

let round = 0

let maxRounds = allSquares.length

let orderOfPlayerShoots = []

let orderOfAppearance = []

let phase = 0

let gameIsRunning = false

let timesFinalBossShooted = 0

let bossHealth = 60

let playerHealth = 60

const FB1 = document.querySelector(".FB1")


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

    }, additionOfTimeToInterval);

    

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

    }, additionOfTimeToInterval);


}

function loopPhaseThree() {

    spanHealthBoss.style.visibility = "visible"

    spanHealthPlayer.style.visibility = "visible"

    spanHealthBoss.textContent =`FINAL BOSS HEALTH: ${bossHealth - timesFinalBossShooted}`

    spanHealthPlayer.textContent =`PLAYER HEALTH: ${playerHealth}`

    round += 1

    let numberOfBossApparitions = 5

    let squareToAppendBoss = undefined

    let additionOfTimeToInterval = 0

    let speedIncrease = 2000

    let squaresWithBossAppended = []

    let newFlame = flameGif.cloneNode(true)

    let pixel = 100

    let bossLoop = () => {

        for (i = 0; i < numberOfBossApparitions; i++) {

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

                newFlame.style.width = `${pixel}px`

                newFlame.style.height = `${pixel}px`

                squareToAppendBoss.appendChild(newFlame)

                pixel += 70

                if (squaresWithBossAppended.length === 5) {

                    body.style.background ="red"
                }

            }, 2000 + additionOfTimeToInterval)


            additionOfTimeToInterval += speedIncrease


        }

        setTimeout(() => {

            body.style.background = "white"

            playerHealth -= 10

            spanHealthPlayer.textContent =`PLAYER HEALTH: ${playerHealth}`

            squareToAppendBoss.removeChild(newFlame)

            if (playerHealth === 0) {
                
                alert("You Lose")

                start.disabled = false

                start.style.background = "crimson"

                start.textContent ="PRESS TO TRY AGAIN"

                round = 0

                bossHealth = 60

                playerHealth = 60

                timesFinalBossShooted = 0

                return
            
            }

            start.disabled = false

            start.style.background ="greenyellow"

            start.textContent = "CONTINUE"

            spanRound.textContent = `ROUND ${round +1}`


        }, 2500 + additionOfTimeToInterval);


    }

    if (round === 1 || round === 2) {

        bossLoop()
    }

    if (round === 3 || round === 4) {

        speedIncrease = 1500

        bossLoop()
    }

    if (round === 5 || round === 6) {

        speedIncrease = 1000

        bossLoop()
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


        if (round === maxRounds) {

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


        if (round === maxRounds) {

            alert("FASE 2 COMPLETADA")

            phase = 3

            round = 0

            spanPhase.textContent = "PHASE 3"

            spanRound.textContent = `ROUND ${round + 1}`



        }

    }

}

function playerPhaseThree() {

    timesFinalBossShooted += 1

    spanHealthBoss.textContent =`FINAL BOSS HEALTH: ${bossHealth - timesFinalBossShooted}`

    if ((bossHealth - timesFinalBossShooted) === 0) {

        alert("YOU WIN")

        window.location ="ranking.html"

    }

}


start.addEventListener(("click"), () => {

    gameIsRunning = true

    start.disabled = true
   
    start.style.background = "orange"

    if (phase === 0 || phase === 1) loopPhaseOne()

    if (phase === 2) loopPhaseTwo()

    if (phase === 3) loopPhaseThree()

})


allSquares.forEach((square) => {


    square.addEventListener(("click"), () => {

        if (gameIsRunning) return

        shoot.play()

        square.style.visibility = "hidden"

        orderOfPlayerShoots.push(square.classList[1])

        if (phase === 1) playerPhaseOne()

        if (phase === 2) playerPhaseTwo()
    })
})

finalBoss.addEventListener(("click"), () => {

    if (phase === 3) playerPhaseThree()
})

















