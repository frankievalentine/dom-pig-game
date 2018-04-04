/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

MISC NOTES:
select an id or class from the HTML document
also called a setter (set value)
document.querySelector('#current-' + activePlayer).textContent = dice;

innerHTML method changes the html of the id selected
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

getter (get value)
var x = document.querySelector('#score-0').textContent;

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// change display property in CSS on dice class
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// 2 arg in event listen first is the type of event, second is the function as soon as the event happens
// anonymous function cannot be called again
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Random number
    // .random gives you a random decimal number between 0 and 1
    // .floor rounds the number to the nearest integer
    var dice = Math.floor(Math.random() * 6);
    // Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // change the source of the HTML img element with class dice
    diceDOM.src = 'images/dice-' + dice + '.png';
    // Update round score IF the rolled number was NOT a 1
});








