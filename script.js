const $area = document.querySelector('.area')
const $start = document.querySelector('.start')
const $score = document.querySelector('.score')
let gameSpeed = 1200
let counter = 0;
$start.addEventListener('click', () => {
    if (counter === 0) {
         const spawnBall =  setInterval(() => {
            let arrBall = document.querySelectorAll('.ball')
            if (arrBall.length === 3) {
                return clearInterval(spawnBall)
            } else {
                renderBall()
            }
        }, gameSpeed)
    }
})

$area.onclick = function(event) {
    let target = event.target;
    if(target.classList.contains('ball')) {
        crashBall()
    }
}

function renderBall() {
    $area.insertAdjacentHTML('afterbegin', ball())
}

function crashBall() {
    const $ball = document.querySelector('.ball');
    $ball.remove()
    counter++
    score()
}

function score() {
    $score.innerHTML = `${counter}`
}

function ball() {
    return `
    <div style="top: ${getRandomInt(0, 850)}px;left: ${getRandomInt(0, 850)}px" data-id="${counter}" class="ball"></div>
    `
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


// https://jsfiddle.net/sergiks/o3eq845y/