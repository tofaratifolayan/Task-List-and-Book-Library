// exercises from Q3.

//3.1

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}
   

var tossResult = (dieToss());

const diepromise = new Promise((resolve, reject) => {
    if (tossResult == 6){
        resolve("You rolled a " + tossResult + ". You win!");
    } else {
        reject("You rolled a " + tossResult + ". Better luck next time!");
    }
});

diepromise
    .then((resolveValue) =>
        console.log(`${resolveValue}`)
    )
    .catch((rejectValue) =>
        console.log(`${rejectValue}`)
    );

//3.2

async function pollFetch() {
    const response = await fetch("http://127.0.0.1:8000/polls/json/");
    const json = await response.json();
    console.log(json);
  }
  
pollFetch();

