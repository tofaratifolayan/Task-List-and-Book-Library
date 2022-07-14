const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

let width = 3;
let height = 5;
alert("The area of the rectangle is: " + rectangleArea(width, height));

function newFunction() {
  alert("Here is the new function!");
}

function calculateAge(age){
  var dogAge = age * 7;
  return "Your dog is " + dogAge + " years old in dog years";
}

alert(calculateAge(5));
alert(calculateAge(0.5));
alert(calculateAge(13));

function celsiusToFahrenheit(celsius){
  var cel = celsius;
  var far = (((cel/5)*9)+32);
  return far
}

function fahrenheitToCelsius(fahrenheit){
  var far = fahrenheit;
  var cel = (((far - 32)/9)*5);
  return cel
}

alert(celsiusToFahrenheit(25));
alert(fahrenheitToCelsius(celsiusToFahrenheit(25)));

var books = [
  { title: "Shoe Dog", author: "Phil Knight", alreadyRead: true },
  { title: "Ready Player One", author: "Earnest Cline", alreadyRead: false },
];

function readBooks(){
  books.forEach((item) => {
    if (item.alreadyRead){
      alert("You already read " + item.title + " by " + item.author);
    } else {
      alert("You still need to read "+ item.title + " by " + item.author);
    };
  });   
}