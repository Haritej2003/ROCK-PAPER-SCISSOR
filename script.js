let res = document.getElementById("result");
let score1 = document.getElementById("score-1")
let score2 = document.getElementById("score-2")
let div1 = document.getElementById("div-1")
let div2 = document.getElementById("div-2")
let out1 = document.getElementById("output-image1")
let out2 = document.getElementById("output-image2")
let startB = document.getElementById("start-button");
let userScore = 0, computerScore = 0, chances = 10;
res.value = `CHANCES LEFT = ${chances}`
function setOutputImage(a, b) {
    if (a == "R") {
        out1.src = "https://husseinhewehii.github.io/Rock_Paper_Scissors/rock.png"
    }
    else if (a == "P") {
        out1.src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png"
    }
    else {
        out1.src = "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png"
    }
    if (b == "R") {
        out2.src = "https://husseinhewehii.github.io/Rock_Paper_Scissors/rock.png"
    }
    else if (b == "P") {
        out2.src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png"
    }
    else {
        out2.src = "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png"
    }
}
function evaluate(userIn) {
    let li = ["R", "P", "S"]
    let x = Math.floor((Math.random() * 2) + 1)
    let computer = li[x];
    console.log(userIn, computer)
    setOutputImage(userIn, computer)

    if (userIn != computer) {
        if (userIn == "R") {
            if (computer == "P") {
                computerScore++;
                div2.style.backgroundColor = "green"
                div1.style.backgroundColor = "red"
            }
            else if (computer == "S") {
                userScore++;
                div2.style.backgroundColor = "red"
                div1.style.backgroundColor = "green"
            }
        }
        else if (userIn == "P") {
            if (computer == "R") {
                userScore++;
                div2.style.backgroundColor = "red"
                div1.style.backgroundColor = "green"
            }
            else if (computer == "S") {
                computerScore++;
                div2.style.backgroundColor = "green"
                div1.style.backgroundColor = "red"
            }

        }
        else if (userIn == "S") {
            if (computer == "R") {
                computerScore++;
                div2.style.backgroundColor = "green"
                div1.style.backgroundColor = "red"
            }
            else if (computer == "P") {
                userScore++;
                div2.style.backgroundColor = "red"
                div1.style.backgroundColor = "green"
            }

        }
    }
    else {
        div2.style.backgroundColor = "purple"
        div1.style.backgroundColor = "purple"
    }
    score1.value = `YOUR SCORE: ${userScore}`
    score2.value = `COMPUTER SCORE: ${computerScore}`
    console.log(`user score=${userScore} and computerscore = ${computerScore} `);
    if (chances > 0) {

        game()
    }
    else {

        res.value = `CHANCES LEFT = ${chances}`
        let timer = document.getElementById("timer")
        if (userScore > computerScore) {
            timer.value = 'winner : YOU'
            console.log("winner is ")
            console.log("user")
            div1.style.backgroundColor = "green"
            div2.style.backgroundColor = "white"
        }
        else if (userScore < computerScore) {
            timer.value = 'winner : Computer'
            console.log("computer")
            div1.style.backgroundColor = "white"
            div2.style.backgroundColor = "green"
        }
        else {
            timer.value = 'DRAW'
            console.log("DRAW")
            div1.style.backgroundColor = "purple"
            div2.style.backgroundColor = "purple"
        }
        let button = document.getElementsByTagName('button')
        for (let i = 0; i < button.length; i++) {
            button[i].disabled = true
        }
        startB.value = "reset"
        startB.style.visibility="visible"
        startB.addEventListener("click", () => {
            chances = 10;
            userScore = 0;
            computerScore = 0;
            score1.value = 0;
            score2.value = 0;
            timer.value=""
            div1.style.backgroundColor = "white"
            div2.style.backgroundColor = "white"
            
            game()

        })
    }
}
function clicked(buttonId) {
    let button = document.getElementsByTagName('button')
    for (let i = 0; i < button.length; i++) {
        if (button[i].id != buttonId) {
            button[i].disabled = true
        }
    }
    console.log("button clicked" + buttonId);
    if (buttonId == 'button-1')
        evaluate("R");
    else if (buttonId == 'button-2')
        evaluate("P")
    else
        evaluate("S")
}

function timerStart() {
    let timer = document.getElementById("timer");
    if (userScore > computerScore)
        timer.value = "User is leading"
    else if (userScore < computerScore)
        timer.value = "Computer is leading"
    else
        timer.value = ""
    val--;


}
function gameStart(){
    chances=10;
    game();
}
function game() {
   
    startB.style.visibility="hidden"
    let button = document.getElementsByTagName('button')
    for (let i = 0; i < button.length; i++) {
        button[i].disabled = false;
    }
    res.value = `CHANCES LEFT = ${chances}`
    let intervalId = setInterval(() => {
        if (val == 0 || chances == 0) {
            clearInterval(intervalId)
            for (let i = 0; i < button.length; i++) {
                button[i].disabled = false;
            }
            val = 3

        }
        timerStart()
    }, 1000);

    chances--;

}
