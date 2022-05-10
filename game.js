const allImages = document.querySelectorAll(".image")

const allDivsBoss = document.querySelectorAll(".boss")

const start = document.querySelector(".start")
start.style.background = "yellowgreen"

const spanPhase = document.querySelector(".phase")
const spanRound = document.querySelector(".round")
const spanHealthBoss = document.querySelector(".health-boss")
const spanHealthPlayer = document.querySelector(".health-player")

const body = document.querySelector("body")

const shoot = document.querySelector(".shoot")

const eagleCry = document.querySelector(".eagle")

const bossStaring = document.createElement("img")
bossStaring.src = "Stages/Jungle/Animals/Boss/Boss Head.png"
bossStaring.style.visibility = "visible"

const bossProfile = document.createElement("img")
bossProfile.src = "Stages/Jungle/Animals/Boss/Boss Profile.png"
bossProfile.style.visibility = "visible"

const finalBoss = document.createElement("img")
finalBoss.src = "Stages/Jungle/Animals/Boss/Boss Front.png"
finalBoss.style.visibility = "visible"

let round = 0

let maxRounds = allImages.length

let orderOfPlayerShoots = []

let orderOfAppearance = []

let phase = 0

let gameIsRunning = false

let timesFinalBossShooted = 0

let bossHealth = 60

let playerHealth = 60

finalBossThreat()

function finalBossThreat() {

    setTimeout(() => {

        allDivsBoss[1].appendChild(bossProfile)

        bossProfile.className = "slideRight"

        setTimeout(() => {

            bossProfile.className = "zoomerOut"

        }, 2000);

        setTimeout(() => {

            allDivsBoss[0].appendChild(bossStaring)
            bossStaring.className = "slideUp"

        }, 3000);

        setTimeout(() => {

            bossStaring.className = "fadeOut"

        }, 6000)

        setTimeout(() => {

            allDivsBoss[1].removeChild(bossProfile)

            allDivsBoss[0].removeChild(bossStaring)



        }, 7000);

    }, 1000)

    start.disabled = true
    setTimeout(() => {

        start.disabled = false

    }, 8000);

    eagleCry.play()
}

function randomize() {

    const randomNumber = Math.round((Math.random() * (allImages.length - 1)))

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

            let randomImage = allImages[randomize()]

            while (orderOfAppearance.includes(randomImage.classList[1])) {

                randomImage = allImages[randomize()]
            }

            orderOfAppearance.push(randomImage.classList[1])

            randomImage.style.visibility = "visible"

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


    for (index = loopControl; index < allImages.length; index++) {

        setTimeout(() => {

            let randomImage = allImages[randomize()]

            while (orderOfAppearance.includes(randomImage.classList[1])) {

                randomImage = allImages[randomize()]
            }

            orderOfAppearance.push(randomImage.classList[1])

            randomImage.style.visibility = "visible"

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

    spanHealthBoss.textContent = `FINAL BOSS HEALTH: ${bossHealth - timesFinalBossShooted}`

    spanHealthPlayer.textContent = `PLAYER HEALTH: ${playerHealth}`

    spanHealthPlayer.style.background = "green"

    round += 1

    let numberOfBossApparitions = 5

    let divToAppendBoss = undefined

    let additionOfTimeToInterval = 0

    let speedIncrease = 1000

    let divWithBossAppended = []

    let pixel = 100

    let bossLoop = () => {

        for (i = 0; i < numberOfBossApparitions; i++) {

            setTimeout(() => {

                divToAppendBoss = allDivsBoss[Math.round((Math.random() * (allDivsBoss.length - 1)))]

                while (divWithBossAppended.includes(divToAppendBoss)) {

                    divToAppendBoss = allDivsBoss[Math.round((Math.random() * (allDivsBoss.length - 1)))]
                }

                divToAppendBoss.appendChild(finalBoss)

                divWithBossAppended.push(divToAppendBoss)

                finalBoss.style.width = `${pixel * 2}px`

                finalBoss.style.height = `${pixel}px`

            }, 1000 + additionOfTimeToInterval)


            setTimeout(() => {

                divToAppendBoss.removeChild(finalBoss)

                pixel += 70

                if (divWithBossAppended.length === 5) {


                    allDivsBoss[0].appendChild(bossStaring)
                    bossStaring.className = "bounceIn"
                    eagleCry.play()

                }

            }, 2000 + additionOfTimeToInterval)


            additionOfTimeToInterval += speedIncrease
        }


        setTimeout(() => {

            allDivsBoss[0].removeChild(bossStaring)

            spanHealthPlayer.style.background = "red"

            playerHealth -= 10

            spanHealthPlayer.textContent = `PLAYER HEALTH: ${playerHealth}`

            if (playerHealth === 0) {

                alert("You Lose")

                start.disabled = false

                start.style.background = "crimson"

                start.textContent = "PRESS TO TRY AGAIN"

                round = 0

                bossHealth = 60

                playerHealth = 60

                timesFinalBossShooted = 0

                return

            }

            start.disabled = false

            start.style.background = "greenyellow"

            start.textContent = "CONTINUE"

            spanRound.textContent = `ROUND ${round + 1}`


        }, 2500 + additionOfTimeToInterval);


    }

    bossLoop()

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

            finalBossThreat()

        }

    }

}

function playerPhaseThree() {

    timesFinalBossShooted += 1

    spanHealthBoss.textContent = `FINAL BOSS HEALTH: ${bossHealth - timesFinalBossShooted}`

    spanHealthBoss.style.background = "red"

    setTimeout(() => {

        spanHealthBoss.style.background = "green"

    }, 100);

    if ((bossHealth - timesFinalBossShooted) === 0) {

        alert("YOU WIN")

        window.location = "ranking.html"

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


allImages.forEach((image) => {


    image.addEventListener(("click"), () => {

        if (gameIsRunning) return

        const shootCloned = shoot.cloneNode(true)

        shootCloned.play()

        image.classList.add("barrelRoll")

        setTimeout(() => {

            image.classList.remove("barrelRoll")

            image.style.visibility = "hidden"

        }, 700);



        orderOfPlayerShoots.push(image.classList[1])

        if (phase === 1) playerPhaseOne()

        if (phase === 2) playerPhaseTwo()
    })
})

finalBoss.addEventListener(("click"), () => {

    const shootCloned = shoot.cloneNode(true)

    shootCloned.play()

    if (phase === 3) playerPhaseThree()

})
