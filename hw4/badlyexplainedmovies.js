const input = document.getElementById('input');
const submitButton = document.getElementById('button');
const reset = document.getElementById('reset');
const hint = document.getElementById('hint');
const output = document.getElementById('output');
const explanations = document.getElementById('explanations');
const hintButton = document.getElementById('hint-button');
const nextQuestion = document.getElementById('next-question-button');

let randomNumber;
let randomElem;

const movies = [
  {
    title: 'Harry Potter',
    explanation: 'This movie is about a dude with a stick...',
    hint: "It's Magic",
  },
  {
    title: 'Just Go With It',
    explanation: 'This movie is about people who go on holiday...',
    hint: 'Adam, Drew and Jennifer',
  },
  {
    title: 'Never Back Down',
    explanation: 'This movie is about two guys with daddy issues who beat each other up...',
    hint: 'Kanye West - Stronger',
  },
  {
    title: 'Spongebob Squarepants',
    explanation: 'This movie is about a rectangle...',
    hint: "It's a cartoon",
  },
  {
    title: '50 First Dates',
    explanation: 'This movie is about a chick, she has the worst memory...',
    hint: '50 times...',
  },
  { title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow' },
  {
    title: 'Spiderman',
    explanation:
      'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...',
    hint: 'Peta-Paka',
  },
  {
    title: 'The Wolf Of Wall Street',
    explanation: "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: 'HAWOOooooooooooo',
  },
  {
    title: 'Inception',
    explanation: 'In this movie everyone is like sleeping all the time...',
    hint: 'Dreams...',
  },
  {
    title: 'Peter Pan',
    explanation: 'In this movie some kids die and an angel escorts them to heaven...',
    hint: 'Always flying, cuz he neverlands',
  },
  {
    title: 'The Lord Of The Rings',
    explanation: 'In this movie some small guys go for a walk...',
    hint: 'You will not vacate past this exact position',
  },
];

function generateRandomQuestion() {
  this.randomNumber = Math.round(Math.random() * 11);
  this.randomElem = movies[this.randomNumber - 1];
  explanations.innerHTML = this.randomElem.explanation;
}

submitButton.addEventListener('click', (e) => {
  const elem = document.createElement('div');
  elem.classList.add('alert');

  if (input.value == this.randomElem.title) {
    elem.classList.add('alert-success');
    elem.innerHTML = 'Yes, it was ' + this.randomElem.title;
    <br/>
  } else {
    elem.classList.add('alert-danger');
    elem.innerHTML = 'No, it was ' + this.randomElem.title;
    <br/>
  }
  output.appendChild(elem);

  setTimeout(() => {
    elem.classList.remove('alert');
    elem.innerHTML = '';
  }, 2000);
});

hintButton.addEventListener('click', (e) => {
  showHint();
});

nextQuestion.addEventListener('click', (e) => {
  generateRandomQuestion();
});

function showHint() {
  hint.innerHTML = movies[this.randomNumber - 1].hint;
  setTimeout(() => {
    hint.innerHTML = '';
  }, 5000);
}

generateRandomQuestion();
