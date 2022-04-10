var gameData = ['r', 's', 'p']
var player1Score = 0
var player2Score = 0
var player1Img = document.querySelector("#player1Img")
var player2Img = document.querySelector("#player2Img")
var player1ScorePanel = document.querySelector("#player1ScorePanel")
var player2ScorePanel = document.querySelector("#player2ScorePanel")
var winInfoPanel1 = document.querySelector("#winGame1")
var winInfoPanel2 = document.querySelector("#winGame2")

function randomCompAttack(arr) {
    var randomNum = Math.floor(Math.random() * gameData.length)
    return arr[randomNum]
}


function startGame(e) {
    var userAttack = e.key.toLowerCase()
    var compAttack = randomCompAttack(gameData)

    player1Img.src = `./img/${userAttack}.png`
    player2Img.src = `./img/${compAttack}.png`

    if (gameData.indexOf(userAttack) === -1) {
        alert('Please choose "R S P" keypress ')
        return
    }

    if (userAttack === compAttack) {
        console.log('--------------');
        console.log('Draw');
        console.log('--------------');

        winInfoPanel1.innerHTML = 'Draw'
        winInfoPanel2.innerHTML = 'Draw'
    } else if (userAttack === 'r' && compAttack === 's') {
        console.log('-------------');
        console.log('Player 1 win');
        console.log('-------------');

        player1Score++

        player1ScorePanel.innerHTML = `Point: ${player1Score}`
        winInfoPanel1.setAttribute("class","h1 text-success")
        winInfoPanel2.setAttribute("class","h1 text-danger")
        winInfoPanel1.innerHTML = 'WIN'
        winInfoPanel2.innerHTML = 'LOSE'
    } else if (userAttack === 's' && compAttack === 'p') {
        console.log('----------------------');
        console.log('Playaer 1 Win');
        console.log('----------------------');

        player1Score++

        player1ScorePanel.innerHTML = `Point: ${player1Score}`
        winInfoPanel1.setAttribute("class","h1 text-success")
        winInfoPanel2.setAttribute("class","h1 text-danger")
        winInfoPanel1.innerHTML = 'WIN'
        winInfoPanel2.innerHTML = 'LOSE'
    } else if (userAttack === 'p' && compAttack === 'r') {
        console.log('----------------------');
        console.log('Playaer 1 Win');
        console.log('----------------------');

        player1Score++
        player1ScorePanel.innerHTML = `Point: ${player1Score}`
        winInfoPanel1.setAttribute("class","h1 text-success")
        winInfoPanel2.setAttribute("class","h1 text-danger")
        winInfoPanel1.innerHTML = 'WIN'
        winInfoPanel2.innerHTML = 'LOSE'
    } else {
        console.log('----------------------');
        console.log('Playaer 2 Win');
        console.log('----------------------');

        player2Score++

        player2ScorePanel.innerHTML = `Point: ${player2Score}`
        winInfoPanel1.innerHTML = 'LOSE'
        winInfoPanel2.innerHTML = 'WIN'
    }

}

window.onkeydown = startGame