/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// change display property in CSS on dice class on page load
document.querySelector('.dice').style.display = 'none';

// make score and current 0 on page load
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6);
    // Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // change the source of the HTML img element with class dice
    diceDOM.src = 'images/dice-' + dice + '.png';
    // Update round score IF the rolled number was NOT a 1
    // !== does not perform type coercion where != does
    // like === does not perform type coercion and == does
    if (dice !== 1) {
        // Add score
        // roundScore = roundScore + dice;
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player and reset
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add currentscore to globalscore
    // scores[activePlayer] = scores[activePlayer] + roundScore;
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player wins
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer();
    }
});

// DRY function
function nextPlayer() {
    // ? ternary operator
    // if activePlayer = 0 then activePlayer = 1 else activePlayer 0
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // toggle active class from player-0-panel class and toggle active to player-1-panel
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // remove dice on new player and reset
    document.querySelector(".dice").style.display = "none";
}