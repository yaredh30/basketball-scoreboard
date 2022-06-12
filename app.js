let score = 0;
let scoreGuest = 0;
const scoreValue = document.querySelector('.score-value');
const scoreValueGuest = document.querySelector('.score-value-guest');
const btnScore = document.querySelector(".plus-one");
const btnScore2 = document.querySelector(".plus-two");
const btnScore3 = document.querySelector('.plus-three');
const guest = document.querySelector('.guest-one');
const guest2 = document.querySelector('.guest-two');
const guest3 = document.querySelector('.guest-three');
const restartBtn = document.querySelector('#restart-btn');


btnScore.addEventListener('click', function(){
    score++;
    scoreValue.textContent = score;
})

btnScore2.addEventListener('click', function(){
    score += 2
    scoreValue.textContent = score;
})

btnScore3.addEventListener('click', function(){
    score += 3
    scoreValue.textContent = score;
})

guest.addEventListener('click', function(){
    scoreGuest++;
    scoreValueGuest.textContent = scoreGuest;
})

guest2.addEventListener('click', function(){
    scoreGuest += 2
    scoreValueGuest.textContent = scoreGuest;
})

guest3.addEventListener('click', function(){
    scoreGuest += 3
    scoreValueGuest.textContent = scoreGuest;
})


function restart(){
    scoreValueGuest.textContent = 0;
    scoreValue.textContent = 0;
    scoreGuest = 0;
    score = 0;
}

restartBtn.addEventListener('click', function(){
    restart()
})
