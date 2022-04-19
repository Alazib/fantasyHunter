const allSquares = document.querySelectorAll(".square")

const start = document.querySelector(".start")

const spanPhase = document.querySelector(".span-phase")
const spanRound = document.querySelector(".span-round")

// const phasePanel = document.createElement("div")
// phasePanel.className = "phase-panel"
// .appendChild(phasePanel) 

let round = 0

let orderOfPlayerShoots = []

let orderOfAppearance = []

let phase = 0


function randomize() {

    const randomNumber = Math.round((Math.random() * (allSquares.length - 1)))

    const randomSquare = allSquares[randomNumber]

    return randomSquare
}

function loopPhaseOne() {

    phase = 1

    round += 1

    orderOfAppearance = []

    orderOfPlayerShoots = []

    let additionOfTimeToInterval = 0


    for (let index = 0; index < round; index++) {

        setTimeout(() => {

            let randomSquare = randomize()

            while (orderOfAppearance.includes(randomSquare.classList[1])) {

                randomSquare = randomize()
            }

            orderOfAppearance.push(randomSquare.classList[1])

            randomSquare.style.visibility = "visible"

        }, 1000 + additionOfTimeToInterval)

        additionOfTimeToInterval += 1000
    }

    start.style.background = "orange"

    start.disabled = true


}

function loopPhaseTwo() {

    round += 1

    let i = 3

    let index = i

    let speedIncrease = 1000 - (1000 * 0.10)

    orderOfAppearance = []

    orderOfPlayerShoots = []

    let additionOfTimeToInterval = 0


    switch (round) {


        case 3: {

            i = 2
            speedIncrease = 1000 - (1000 * 0.15)
        }
            break

        case 4: {

            i = 2
            speedIncrease = 1000 - (1000 * 0.15)
        }
            break

        case 5: {

            i = 1
            speedIncrease = 1000 - (1000 * 0.20)
        }
            break

        case 6: {

            i = 1
            speedIncrease = 1000 - (1000 * 0.20)
        }
            break

        case 7: {

            i = 0
            speedIncrease = 1000 - (1000 * 0.25)
        }
            break

        case 8: {

            i = 0
            speedIncrease = 1000 - (1000 * 0.25)
        }
            break
    }


    for (index = i; index < 8; index++) {

        setTimeout(() => {

            let randomSquare = randomize()

            while (orderOfAppearance.includes(randomSquare.classList[1])) {

                randomSquare = randomize()
            }

            orderOfAppearance.push(randomSquare.classList[1])

            randomSquare.style.visibility = "visible"

        }, 1000 + additionOfTimeToInterval)

        additionOfTimeToInterval += speedIncrease
    }

    start.style.background = "orange"

    start.disabled = true



}

function loopPhaseThree () {
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

    let lengthWhereReduce = 5

    switch (round) {

        case 3: {

            lengthWhereReduce = 6
        }
            break

        case 4: {

            lengthWhereReduce = 6
        }
            break

        case 5: {

            lengthWhereReduce = 7
        }
            break

        case 6: {

            lengthWhereReduce = 7
        }
            break

        case 7: {

            lengthWhereReduce = 8
        }
            break

        case 8: {

            lengthWhereReduce = 8
        }
            break
    }


    if (orderOfPlayerShoots.length === lengthWhereReduce) {

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

start.addEventListener(("click"), () => {


    if (phase === 0 || phase === 1) loopPhaseOne()

    if (phase === 2) loopPhaseTwo()

    if (phase === 3) loopPhaseThree ()

})

allSquares.forEach((square) => {


    square.addEventListener(("click"), () => {

        square.style.visibility = "hidden"

        orderOfPlayerShoots.push(square.classList[1])

        if (phase === 1) playerPhaseOne()

        if (phase === 2) playerPhaseTwo()



    })
})



start.style.background = "yellowgreen"











