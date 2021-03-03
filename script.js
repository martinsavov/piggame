'use strict';

let activeUser = 0;

document.querySelector('.btn--roll').addEventListener('click',function(){
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';
    
    if(activeUser === 0){
        console.log('active user is 0');
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');

        if(diceNumber === 1){
            activeUser = 1;
        }
    } else if(activeUser === 1){
        console.log('active user is 1')
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');

        if(diceNumber === 1){
            activeUser = 0;
            
            
        }
    }
});