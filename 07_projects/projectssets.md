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

