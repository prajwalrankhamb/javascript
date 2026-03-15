# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-h3dxftj1?file=index.html)

# Solution Code

## Project 1

``` Javascript

const body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

``` Javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please enter a valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please enter a valid weight ${weight}`
  }else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)

    results.innerHTML = `<span>${bmi}</span>`
  }

})

```

## Project 3

```Javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```Javascript
let randomNumber = parseInt((Math.random()) * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHigh = document.querySelector('.lowOrHi');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 0) {
    alert('Please enter number greater than 0');
  } else if (guess > 100) {
    alert('Please enter number less than 101');
  } else if(guess === '') {
    alert('Please enter valid number')
  }else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over. random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`you won. you guess it right random number is ${randomNumber} `);
    endGame();
  } else if(guess > randomNumber) {
    displayMessage('Number is Too high');
  } else if (guess < randomNumber) {
    displayMessage('Number is Too low');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random) * 100 + 1;
    prevGuess = [];
    let numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage = ''
    playGame = true;
  });
}

```