'use strict';


document.querySelector('.btn--roll').addEventListener('click',function(){
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';

    console.log(diceNumber);
});