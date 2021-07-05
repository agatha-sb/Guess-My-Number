'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = "Correct Number";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc (Math.random() * 20) + 1;
// console.log(secretNumber, typeof secretNumber);
let highScore = 0;
let score = 20;

const displayMessage = function(message)    {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('❌ No number');
    
    // when player wins
    }   else if (guess === secretNumber)    {
        // document.querySelector('.message').textContent = '✅ Correct Number';
        displayMessage('✅ Correct Number');
        // document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = secretNumber ;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore)  {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // when guess too high
    // } else if (guess > secretNumber)    {

    //     if (score > 1)    {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else  {
    //         document.querySelector('.message').textContent = '📈 You Lost The Game!';
    //     }
    
    // when the guess is wrong
    } else if (guess !== secretNumber)    {

        if (score > 1)    {
            // document.querySelector('.message').textContent = guess > secretNumber ?  '📈 Too High!' : '📉 Too Low!';
            displayMessage((guess > secretNumber ?  '📈 Too High!' : '📉 Too Low!'));
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else  {
            // document.querySelector('.message').textContent = '📈 You Lost The Game!';
            displayMessage('📈 You Lost The Game!');
        }
    }
});

document.querySelector('.again').addEventListener('click', function()   {
    score = 20;
    secretNumber = Math.trunc (Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});