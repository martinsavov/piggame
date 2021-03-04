'use strict';

let activeUser = 0;
let score1 = 0;
let highScore1 = 0;
let score2 = 0;
let highScore2 = 0;

let hold = function(){
    document.querySelector('.btn--hold').addEventListener('click',function(){
        if(activeUser === 0){
            highScore1 = score1
            document.querySelector('#score--0').textContent = highScore1;
        }else if(activeUser ===1){
            highScore2 = score2
            document.querySelector('#score--1').textContent = highScore2;
        }        
    });
}
document.querySelector('.btn--roll').addEventListener('click',function(){

    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';
    
    if(activeUser === 0){
        console.log('active user is 0');
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
        score1 += diceNumber;
        hold();
        document.getElementById('current--0').textContent = score1;
        if(diceNumber === 1){
            activeUser = 1;
        }
    } else if(activeUser === 1){
        console.log('active user is 1')
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
        score2 += diceNumber;
        hold();
        document.getElementById('current--1').textContent = score2;
        if(diceNumber === 1){
            activeUser = 0;
        }
    }
});