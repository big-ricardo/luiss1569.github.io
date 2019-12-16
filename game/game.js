
let game
const gameCanvas = document.getElementById('game-canvas')
const context = gameCanvas.getContext('2d')

function main() {
    init()
}

function playerRender() {
    context.fillStyle = '#f5f5f5'
    context.globalAlpha = 1
    context.clearRect(0, 0, 50, 50)
    context.fillStyle = '#050505'
    context.globalAlpha = 1
    context.fillRect(game.player.x, game.player.y, game.player.width, game.player.heigth)
    
    for(let i = 0; i < game.player.tail.length; i++){
        context.fillStyle = '#050505'
        context.globalAlpha = 0.3
        context.fillRect(game.player.tail[i].x, game.player.tail[i].y, game.player.width, game.player.heigth)
    }

    if (game.fruit !== null) {
        context.fillStyle = 'green'
        context.globalAlpha = 1
        context.fillRect(game.fruit.x, game.fruit.y, game.player.width, game.player.heigth)
    }
    requestAnimationFrame(playerRender)
}


function init() {
    game = {
        player: {
            x: 15,
            y: 15,
            points: 0,
            tail: [],
            width: 1,
            heigth: 1
        },
        time: 200,
        move: 'rigth',
        moved: '',
        fruit: null
    }
    if(screen.width < 768){
        document.querySelector('#control').classList.remove('some')
    }
    playerRender(game.move)
    document.addEventListener('keydown', handleKeydown)
    game.loop = setInterval(movePlayer, game.time)
}
function handleKeydown(e) {
    const keyPress = e.key

    if (keyPress === 'ArrowDown'  && game.moved !== 'top') {
        game.move = 'botton'
        if(game.player.points > 0){
            game.moved = game.move
        }
    }
    if (keyPress === 'ArrowLeft'  && game.moved !== 'rigth') {
        game.move = 'left'
        if(game.player.points > 0){
            game.moved = game.move
        }
    }
    if (keyPress === 'ArrowRight' && game.moved !== 'left') {
        game.move = 'rigth'
        if(game.player.points > 0){
            game.moved = game.move
        }
    }
    if (keyPress === 'ArrowUp' && game.moved !== 'botton') {
        game.move = 'top'
        if(game.player.points > 0){
            game.moved = game.move
        }
    }
}
function movePlayer() {

    if (game.fruit != null) {
        if (game.player.x === game.fruit.x && game.player.y === game.fruit.y) {
            game.fruit = null
            game.player.points++
            document.querySelector(".points").innerHTML = 'Pontos:' + game.player.points
            game.player.tail.push({x: game.player.x, y: game.player.y})
        }
    }

    if(game.player.tail.length > 0){
        game.player.tail[game.player.tail.length] = {x: game.player.x, y: game.player.y}
    }

    while(game.player.tail.length > game.player.points){
        game.player.tail.shift()
    }   

    if (game.move === 'botton' && game.moved !== 'top') {
        if(game.player.y + 1 < gameCanvas.height){
            game.player.y = game.player.y + 1
        }else{
            game.player.y = 0
        }
    }
    if (game.move === 'left' && game.moved !== 'rigth') {
        if(game.player.x - 1 >= 0){
            game.player.x = game.player.x - 1
        }else{
            game.player.x = gameCanvas.width
        }
    }
    if (game.move === 'rigth' && game.moved !== 'left') {
        if( game.player.x + 1 < gameCanvas.width){
            game.player.x = game.player.x + 1
        }else{
            game.player.x = 0
        }
    }
    if (game.move === 'top' && game.moved !== 'botton') {
        if(game.player.y - 1 >= 0){
            game.player.y = game.player.y - 1
        }else{
            game.player.y = gameCanvas.height
        }
    }

    for(let i = 0; i < game.player.tail.length; i++){
        if(game.player.tail[i].x == game.player.x && game.player.y == game.player.tail[i].y){
            clearInterval(game.loop)
            document.querySelector(".points").innerHTML = 'Game Over: ' + game.player.points + ' pontos'
            document.getElementById('play').classList.remove('some')
        }
    }

    let random = Math.floor(Math.random() * (3 - 0)) + 0
    let random2 = Math.floor(Math.random() * (3 - 0)) + 0

    if (game.fruit === null && random == random2) {
        game.fruit = {
            x: Math.floor(Math.random() * (gameCanvas.width - 0)) + 0,
            y: Math.floor(Math.random() * (gameCanvas.height - 0)) + 0
        }
    }
}