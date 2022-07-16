const card = document.getElementById('card');
const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.getElementById('button')
const nextQuestion = document.getElementById('nextquestion');

let randomNumber;

function generateRandomNumber() {
    randomNumber = Math.round(Math.random() * 11);  
}


button.addEventListener('click', (event) => {
    const elem = document.createElement('div');
    elem.classList.add('alert');

    if (input.value == randomNumber){
        elem.classList.add('alert-success');
        elem.innerHTML = 'Yes it was ' + randomNumber;
    }
    else {
        elem.classList.add('alert-danger');
        elem.innerHTML = 'No it was ' + randomNumber;
    }
    // console.log(elem)
    output.append(elem);

    setTimeout(() => {
        elem.classList.remove('alert');
        elem.innerHTML = '';
      }, 3000);
});

nextQuestion.addEventListener('click', (event) => {
    generateRandomNumber();
  });

generateRandomNumber();