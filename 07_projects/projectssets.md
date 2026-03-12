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