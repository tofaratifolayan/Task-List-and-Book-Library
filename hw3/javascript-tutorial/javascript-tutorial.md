# JavaScript Tutorial

Created by Sebastian Zimmeck and Lucas Eras for
Wesleyan University - COMP 333: Software Engineering

## Introduction

This is an introduction to JavaScript using simple HTML and JS files that
you can run in your browser and see the functionality discussed here live.
See the files --- javascript-tutorial.html and javasript-tutorial.js ---
accompanying this tutorial. You can copy and paste the tutorial code in those
files or run it in your browser developer tools console.

## The Document Object Model (DOM) and Browser Object Model (BOM)

The [Document Object Model (DOM)](https://javascript.info/browser-environment)
represents all page content as objects that can be modified. The `document`
object is the main entry point to a page. We can change or create anything on
the page using it.

For instance, copy the following in the body of the javascript-tutorial.html and
refresh the site:

```html
<script>
  // Change the background color to grey.
  document.body.style.background = "grey";
  // Change it back after 1 second.
  setTimeout(() => (document.body.style.background = ""), 1000);
</script>
```

Here we used `document.body.style`, but there's much, much more. Properties and
methods are described in the specification:
[DOM Living Standard](https://dom.spec.whatwg.org/).

The Browser Object Model (BOM) represents additional objects provided by the
browser (host environment) for working with everything except the `document`.

For instance:

The `navigator` object provides background information about the browser and the
operating system. There are many properties, but the two most widely known are:
`navigator.userAgent` --- about the current browser, and `navigator.platform` ---
about the platform (can help to differ between Windows/Linux/Mac etc).

The `location` object allows us to read the current URL and can redirect the
browser to a new one.

Here's how we can use the location object:

```html
<script>
  alert(location.href); // Shows the current URL.
  if (confirm("Go to COMP 333?")) {
    // Redirect the browser to another URL.
    location.href = "https://sebastianzimmeck.de/class/comp333/comp333.html";
  }
</script>
```

The BOM is the part of the [general HTML specification](https://html.spec.whatwg.org/),
which is not only about the HTML language (tags, attributes), but also covers a
bunch of objects, methods and browser-specific DOM extensions.

## Including JavaScript in your page

First, let us see how JavaScript can be added to an HTML file. Let us
show the two ways of doing it: first, by using the `<script>`, and second
by using a JS source file.

### 1. Using the `<script>` tag in head or in body

In the body of the file, let's add the following (see file
javascript-tutorial.html) and load it locally in your browser (right click and
select your browser in the context menu):

```html
<script>
  console.log("Hello, World!");
</script>
```

Open the Developer Tools (`fn` + `F12` on a Mac), open the console, and check the output.

Add an `alert`:

```html
<script>
  console.log("Hello, World!");
  alert("Hello World!");
</script>
```

### 2. Using `<script src=>`

Rather than writing the JS code directly in the HTML file, we can write it in a
separate file and refer to that file using the script tag.

Let's add the following code to the javascript-tutorial.html using the script tag
to run the code in the javascript-tutorial.js:

```html
<script src="javascript-tutorial.js"></script>
```

Look at the console again to check the output.

Add script tags to the end of the body of your html file --- not in the head or at
the beginning of the body --- to avoid blocking the rendering of the layout of
your page by loading a JS file.

Finally, to show the ways that JavaScript communicates with the HTML code,
replace the code in the javascript-tutorial.html with the following, save it,
and run it:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- The counter always runs first before the content of the page is
         generated. let is a block-scoped variable declaration. -->
    <script> let counter = 0; </script>
</head>
<body>
    <!-- We create an input box using the `<input>` tag. Notice that it has an
        `id` whose value we use to identify this element and refer to it in
        the getElementById function below. This is a very common technique in
        JS -->
    <input type="text" id="input" value=""> </input>
    <!-- We create a button using the `<button>` tag with a `'submit'` id. -->
    <button id="submit">ALERT!</button>
    <!-- We finalize the visual of the body by creating a paragraph with the
        `'times'` id. Note that you can use single or double quotes. -->
    <p id='times'>You alerted 0 times so far!</p>
    <!-- Using the `<script>` tag we create JavaScript code to demonstrate how
        it relates to the HMTL file content. -->
    <script>
        // Here we start our JS code.
        // We create a variable `submitButton` as the first instance of a
        // connection between the HTML content and the JS code. We use the
        // `document` interface (learn more about it here:
        // https://developer.mozilla.org/en-US/docs/Web/API/Document).
        // We use the getElementById() function to assign our button to the
        // submitButton variable.
        let submitButton = document.getElementById("submit");
        // We use onclick (which is a GlobalEventHandler per
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick$
        // to check when the button is clicked. The handler takes a function,
        // which we create as an anonymous function using the `function() {}`
        // syntax.
        submitButton.onclick = function() {
            // Inside the onclick event, we get the input value from our
            // `<input>` element using `getElementById` once again. Notice that
            // just doing `document.getElementById("input")` would not give us
            // the value inside the input box. Instead, we would receive an HTML
            // input object (which can be useful in other contexts).
            let inputValue = document.getElementById("input").value;
            // We add 1 to the counter that was created in the head of the file
            // —-- here we demonstrate that JS code can connect to itself in
            // different parts of the HTML file (always going from top to bottom).
            counter += 1;
            // We then use the `.innerHTML` property to change the value inside
            // the paragraph with id `'times'`, making sure that it contains the
            // correct counter value.
            document.getElementById("times").innerHTML = "You alerted " +
            counter + " times so far!";
            // We finalize the function by creating a browser alert that contains
            // the input from the `<input>` tag that we stored in `inputValue`.
            alert(inputValue);
        };
    </script>
</body>
</html>
```

## Console.log()

Data is printed, or logged, to the console with the `console.log()` function.

## Importing and exporting modules

As our app grows bigger, we want to split it into multiple files, in JS parlance
"modules." A module may contain a class or a library of functions for a specific
purpose.

**NOTE**: Modules work only via HTTP(S), not in local files.

Export and import directives have several syntax variants. Here is just one
[example](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#examples)
for a named export.

Include the following code in the body of an .html file (for example, on your
GitHub Pages site; it will not work locally in your browser).

```html
<!-- Make sure to include the module type as the script type
     if you are importing into an HTML file. You can name your module
     (here, module.js) any way you like. -->
<script type="module">
  import { cube, foo, graph } from "./module.js";

  graph.draw();
  console.log(cube(3)); // 27
  console.log(foo); // 4.555806215962888
</script>
```

And then import it at the beginning of the importing file.

In your exporting file you will need to explicitly include an export statement,
for example, as shown below in the module.js code. Copy the following into a
module.js file and save it in the same directory as the file with the code above.
(Again, the module.js file needs to be on a real site; it will not work locally
in your browser).

**Note**: Open your developer tools to see how the script is running in the
console.

```javascript
// module "module.js"
function cube(x) {
  return x * x * x;
}

// Math is part of the JavaScript language.
// Unlike other objects, the Math object has no constructor.
// All methods and properties can be used without creating a Math object first.
const foo = Math.PI + Math.SQRT2;

var graph = {
  // Declaring a property (key, value pair) with a function.
  draw: function () {
    console.log("From graph draw function");
  },
};

export { cube, foo, graph };
```

## Declaring Variables

With the ES6 update in 2015 a lot has changed in the
way JavaScript works, including variable declaration.

**Note**: Refresh your current site if you want to run multiple examples in your
console. Otherwise, you may get an error since variables are defined multiple
times.

### 1. var

Using `var` to create a variable is the old style of variable declaration (from
before the update). This is how it looks like:

```javascript
var newVariable = 10;
var variableWithNoValue;
```

The primary issue with `var` is that it is not scope bounded. Let me create an
example of what that means:

```html
<script>
  for (var i = 0; i < 3; i++) {
    var one = 1;
  }
  // 1, "one" is visible after loop, it's a global variable, which should not
  // be the case
  alert(one);
</script>
```

### 2. let

Let was introduced in the update. It is block scoped (a block is any structure
that has brackets {} around them). So, by modifying the previous example:

```html
<script>
  for (let i = 0; i < 3; i++) {
    let one = 1;
  }
  // Fails, which it should; "one" is not known outside of its block
  alert(one);
</script>
```

**Note**: Try refreshing your browser if you do not see an error. Your browser
may still run on the previous example.

Notice that a variable can be re-declared with a different value using
`var` but not with `let`.

```javascript
var zero = 5;
var zero = 0;
console.log(zero); // prints 0
let one = 5;
let one = 1; // error
console.log(one);
```

Although we cannot re-declare a `let` variable, it is still possible to mutate
the variable.

```javascript
let x = 10;
x = 1; // works
console.log(x);
```

### 3. const

However, both re-declaring and mutating is not possible for `const` variables.
`const` variables are for constants.

```javascript
const x = 10;
x = 5; // error
console.log(x);
```

## Loops

A `while` loop:

```javascript
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}
```

A condensed `while` loop:

```javascript
let i = 3;
// When i becomes 0, the condition becomes falsy, and the loop stops.
while (i) alert(i--);
```

A `for` loop:

```javascript
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  alert(i);
}
```

A `for` loop with a `break`:

```javascript
for (i = 0; i < 5; i++) {
  if (i === 3) {
    alert("The break number is " + i);
    break;
  }
}
```

A loop using `key` (key needs to be unique):

```javascript
const band = {
  name: "B-52s",
  origin: "Athens, GA",
  active: true,
};
// Iterate over the band object.
for (const key in band) {
  console.log(`${key}: ${band[key]}`);
}
```

Try it in your console.

A `forEach` loop over an `array`:

```javascript
const bandMembers = [1, 2, 3, 4, 5];
bandMembers.forEach(function (bandMembers) {
  console.log(bandMembers);
});
```

Try it in your console.

## Primitive Datatypes

Some data types are called primitive because their values contain only a single
thing (be it a string or a number or whatever). JavaScript primitive datatypes are:

### 1. undefined

Example:

```javascript
let variable;
// Note that === requires type and value to be the same. == only requires
// the value to be the same; e.g., 77 === '77' is false (Number v. String) but
// 77 == '77' is true.
typeof variable === "undefined"; // returns true
```

### 2. Boolean

Booleans are always either `true` or `false`. The `and` operation is
`&&` and the `or` operation is `||`. The `not` operation is done by putting an
`!` before a boolean value.

### 3. Number

We can use the increment and decrement operators:

```javascript
let a = 10;
a++;
let b = 20;
b--;
```

Numbers can be integers and floating point numbers. They are not distinct types
in JS.

```javascript
let a = 10;
typeof a;
let b = 20.5;
typeof b;
```

Expect all of the operations that you have in other languages. Also, the Math
module can be very helpful. Example:

```javascript
let randomNumber = Math.random(); // Math.random() returns a random number from 0 to 1

// If we wanted to create a random integer between 0 and 10:
// we multiply the randomNumber by ten and then approximate it to the nearest
// smallest integer.
let randomInteger = Math.floor(randomNumber * 10);
```

### 4. String

Strings are what you would expect. Also, JavaScript converts other data types to
string automatically when concatenating them with strings. For example:

```javascript
let aNumber = 4;
let aString = "The number " + aNumber + " is now part of this string";
console.log(typeof aString); // prints "string"
```

Another nice way of concatenating other objects in strings is by using the
backtick ( \` ) symbol, like this:

```javascript
let aNumber = 16;
let aString = `The number ${aNumber} is now part of this string`;
console.log(typeof aString); // prints "string"
```

### 5. Objects

All of the above datatypes are considered "primitive" in JavaScript. Objects,
however, are considered "structural" types, And they are quite important. Let us
create a simple object:

```javascript
const car = {
  color: "blue",
  maxSpeed: 100,
};
```

As you can see, an object contains multiple `"property": value` pairs that are
separated by commas. Now that we have created our car, its properties can be
accessed using the dot notation:

```javascript
console.log(car.color); // Prints blue.
car.maxSpeed = 120;
console.log(car.maxSpeed); // Prints 120.
```

Notice how despite the object being created using the const declaration, we can
still modify its properties, as we've done with `maxSpeed`.

We can extend object properties from one object to another with `__proto__`.
In JavaScript, objects have a special hidden property, a prototype, that is either
`null` or references another object. Here is an example:

```javascript
let singer = {
  sings: true,
};
let vanHalen = {
  jumps: true,
};

vanHalen.__proto__ = singer;

// We can find both properties in vanHalen now:
alert(vanHalen.sings); // Returns true.
alert(vanHalen.jumps); // Returns true.
```

### 6. Null

`Null` is a primitive data type, and it represents the intentional absence of
value. The difference between null and undefined is that `Null` is used to assign
a non-value to a variable while undefined is used when a variable is declared
but not assigned with a value.

```javascript
let x = null;
```

## Comments

Single line comments

```javascript
// This line will denote a comment.
```

Multi-line comments

```javascript
/*  
The line is a comment
and this line is a comment.
*/
```

## Arrays

Arrays are objects, but they function in a specified way, with specific
functions that only apply to them. To create an array we use brackets:

```javascript
let names = ["Ad Rock", "Chance The Rapper", "The Replacements"];
console.log(names.length); // Arrays have a length property.
console.log(names[1]); // We can access array values with the bracket notation.
```

Lists start with a 0 index, so `names[0]` would give us `'Ad Rock'`.

Some important array functions:

```javascript
let fruits = ["Apple", "Banana"];

// pop() removes the last element of the list (and returns it).
let lastFruit = fruits.pop();
// 'Banana'

// push() adds elements to the end of the array.
fruits.push("Orange", "Tomato");
// ['Apple', 'Orange', 'Tomato']

// shift() removes the first element of the array (and returns it).
let firstFruit = fruits.shift();
// 'Apple'

// unshift() adds elements to the beginning of the array.
fruits.unshift("Mango");
// ['Mango', 'Orange', "Tomato"]

// .indexOf(item) returns the index position of an item.
fruits.indexOf("Orange");
// 1

// .forEach(function(item, index, array){}) iterates over the elements of the array
// we can omit parameters that are not needed.
// Note also the arrow function expression, which is a compact alternative to a
// traditional function expression (see below for functions).
fruits.forEach((item) => console.log(item));
// prints:
// 'Mango'
// 'Orange'
// 'Tomato'

// .map(function(currentValue, index, array){}) creates a new array populated
// with the results of calling a provided function on every element of the array.
let fruiting = fruits.map((value) => `${value}ing`);
// ['Mangoing', 'Orangeing', 'Tomatoing']

// .filter(function(currentValue, index, array){}) creates a new array populated
// only with the values that the inner function returned true for.
let fruitsStartingWithO = fruits.filter((value) => value[0] === "O");
// ['Orange']
```

More array functions can be found
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Array spread syntax

The `...` is the spread syntax. It allows for array elements to be expanded
out of the array structure, which allows us to use the array values as function
parameters, or as elements. An example:

```javascript
function sum(x, y) {
  return x + y;
}
let pair = [5, 2];
sum(...pair);
// 7
```

## Find an element

You can use the `findIndex` function to find the index number of the first
occurrence of an element, for example, in an array. The following will return 0
because "Ro" matches the first array element "Ronnie Foster".

```javascript
var artists = ["Ronnie Foster", "Rolling Stones"];
function checkArtist(artists) {
  return artists.startsWith("Ro");
}
alert(artists.findIndex(checkArtist));
```

## Comparison operations

See a list in <https://www.w3schools.com/js/js_comparisons.asp>.

## Conditional statement

To do an 'if' statement in JavaScript, we do:

```javascript
if (true) {
  console.log("if");
}
```

And an 'if...else' statement:

```javascript
if (false) {
  console.log("if");
} else {
  console.log("else");
}
```

And an "else if" statement:

```javascript
const size = 10;
if (size > 100) {
  console.log("Big");
} else if (size > 20) {
  console.log("Medium");
} else if (size > 4) {
  console.log("Small");
} else {
  console.log("Tiny");
}
```

Another way to write an if...else statement is by using the ternary operator,
which can often be written in a single line:

```javascript
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
getFee(true);
```

If the value before the `?` returns true, then the result will be the value
right before `:`, which in this case is `$2.00`. It will return the right one
otherwise.

## Logical Operators

|| is the logical OR operator

```javascript
true || false; // true
```

&& is the logical AND operator

```javascript
true && false; // false
```

## Truthy and Falsy

In JavaScript, values evaluate to true or false when evaluated as Booleans.
Values that evaluate to true are known as truthy, and values that evaluate to
false are known as falsy.

Falsy values include:

- false

- 0

- empty strings

- null

- undefined

- NaN (NotaNumber; can test for that as well with `isNaN(7)`)

All other values are truthy.

## Switch Statement

The switch statements provide a means of checking an expression against multiple
case clauses. If a case matches, the code inside that clause is executed. The
case clause should finish with a break keyword. If no case matches but a default
clause is included, the code inside default will be executed.

```javascript
const food = "pizza";

switch (food) {
  case "oyster":
    console.log("The taste of the sea");
    break;
  case "pizza":
    console.log("A delicious pie");
  default:
    console.log("Enjoy your meal");
}

// Prints:
// A delicious pie
// Enjoy your meal
```

Note: If break is omitted from the block of a case, the switch statement will
continue to check against case values until a break is encountered or the flow
is broken.

## Functions

Note: Refresh your current site if you want to run multiple examples in your
console. Otherwise, you will get an error since `const` is defined multiple
times.

There are multiple ways of declaring a function. An example of how the same
function can be defined in different ways:

```javascript
// Define a function using function expressions:
function add(x, y) {
  return x + y;
}

// To call the function.
add(2, 5); // Returns 7.

// Notice that here function(x,y) {} is, actually, an anonymous function (the
// function itself doesn't have a name).
const add = function (x, y) {
  return x + y;
};

// Define a function using arrow function notation:
const add = (x, y) => {
  return x + y;
};
// This is similar to the one above, but nicely abreviated.

// Define a function using concise arrow notation:
const add = (x, y) => x + y;
// When the function does not contain more than one line in the body, we can
// omit the 'return' and the brackets.
```

If you are familiar with curried functions (converting a function that takes
multiple arguments into a sequence of functions that each takes a single
argument, e.g. in SML), it is also possible to do that in JS:

```javascript
const add = (x) => (y) => x + y;

add(3)(10); // Returns 13.
```

## Callbacks

And, of course, functions can take functions as inputs (which will happen a
lot). They are commonly called callback functions. Callbacks are based on the
notion that the argument to a function can be a function.

A detailed example modified from [here](https://javascript.info/callbacks):

Take a look at the function `loadScript(src)` that loads a function (a whole
script in fact) with the `src` as argument given in the
`loadScript('javascript-tutorial.js');` call:

```html
<script>
  function loadScript(src) {
    // Creates a <script> tag and append it to the page of this code.
    // This causes the script with the given src to start loading and run when
    // complete.
    let script = document.createElement("script");
    // A script object can make use of the source method.
    // The src property sets or returns the value of the src attribute of a
    // script.
    // Assign the src argument to be the value of our script variable, i.e.,
    // its source.
    script.src = src;
    // Append the script the head of our current page.
    document.head.append(script);
  }
  // Load the script at the given path, and it will be executed on our current
  // page.
  loadScript("javascript-tutorial.js");
</script>
```

The code appends to the current document the new, dynamically created, tag
`<script src="…">` with the given `src`. The browser automatically starts
loading the script and executes it when complete. Here in this case the
javascript-tutorial.js script contains the `newFunction()`, which we call
after `loadScript('javascript-tutorial.js');`.

Put the above code into the javascript-tutorial.html and run it via your browser.
Everything should be working fine.

Now, add the following code in javascript-tutorial.js with the following code:

```javascript
function newFunction() {
  alert("Here is the new function!");
}
```

Also, add a call to `newFunction` in your javascript-tutorial.html like so:

```javascript
// Load the script at the given path, and it will be executed on your current
// page.
loadScript("javascript-tutorial.js");
newFunction();
```

Now, load javascript-tutorial.html in your browser again. As you can see,
`alert("Here is the new function!");` is not executed. Why is that?

**Problem**: For any code below `loadScript('javascript-tutorial.js');`, the JS
engine doesn't wait until the script loading finishes. It will try to execute
`newFunction()`before javascript-tutorial.js is loaded. It will just go ahead
and try to call `newFunction()` once it reaches that line of code.

As of now, the `loadScript` function doesn't provide a way to track the load
completion. The script loads and eventually runs, that's all. But we'd like to
know when that happens, so that we can use new functions and variables from that
script.

So, let's add a callback function as a second argument to `loadScript` that
should execute when the script is loaded. The idea is that the second argument
is a callback function (usually an anonymous function) that runs once the
loading of the script is completed.

Repeat the experiment and copy the modified code below into your
javascript-tutorial.html and run it again. You should now see the two alerts as
intended.

```html
<script>
  // Note that loadScript now has an additional callback parameter, our callback
  // function.
  function loadScript(src, callback) {
    let script = document.createElement("script");
    // The src property sets or returns the value of the src attribute of a script.
    script.src = src;
    // The following line is a crucial modification. We do not try to run the
    // script right away. Instead, we wait until it is loaded as indicated by
    // our successful callback. Once that is the case the function call inside
    // the javascript-tutorial.js as well as the functional call to newFunction
    // is executed. onload is most frequently used to run a script once a website
    // has fully loaded (including script files, images, CSS files, etc.)
    script.onload = () => callback(script);
    document.head.append(script);
  }
  // Here is the second crucial modification. We call our function with the
  // callback function as an argument. We now have two parameters: the script
  // and the anonymous callback function that should run the function in the script.
  loadScript(
    // The src argument.
    "javascript-tutorial.js",
    // The callback argument.
    function () // Begin of the anonymous function body.
    {
      newFunction();
    } // End of the anonymous function body.
  );
</script>
```

We have made use of a "callback-based" style of asynchronous programming. The
callback function will run our javascript-tutorial.js at the point at which it
has finished loading.

## Asynchronous Calls

The JS engine runs JavaScript code in a synchronous way. It executes the code
line by line from top to bottom. JavaScript is single-threaded, which means
that one command is being executed at a time. E.g.,

```html
<script>
  let a = 5;
  let b = 10;
  console.log(a);
  console.log(b);
</script>
```

However, check out the following:

```html
<script>
  console.log("One");
  setTimeout(function () {
    console.log("Two");
  }, 3000);
  console.log("Three");
</script>
```

As you can see, the console prints "One Three Two." The JS engine did not wait
for the `setTimeout` function to return but instead continued with executing
`console.log("Three");`. The code was still running in a single thread, however,
the return values were out of order. If we want to enforce a certain order,
we can use asynchronous calls.

Asynchronous calls are one of the most important ideas in JavaScript as we often
have to wait until an HTTP response has arrived until we can do something else, e.g.,
we wait until a user is authenticated before making the protected resources
available to the user. To create asynchronous calls we can use the `Promise`
object. A promise can be in three different states:

1. pending
2. fulfilled - resolved
3. fulfilled - rejected

When the promise is pending, it has not returned a value yet. When it does return
a value, its state is either resolved or rejected. In either case, whether the
promise is resolved or rejected, it is no longer pending but rather
[fulfilled](https://javascript.plainenglish.io/javascript-promises-resolve-isnt-the-same-that-fulfill-3c6932a7a367).

The syntax of a promise is:

```javascript
const promiseName = new Promise((resolve, reject) => {});
```

`resolve` and `reject` are names for built-in functions for `promises`. It is a
convention to use these names. However, you can call them differently. The
JavaScript engine will recognize them based on where you use them. Using them,
we can create a `promise` and define when it would return the function `resolve`
and when it would return the function `reject`. The values assigned to `resolve`
and `reject` are the values we will eventually have access to once the promise
goes from pending to either the resolved or rejected state.

Now, to get access to the result of the promise (when it is available), we use
the `.then()` function. It takes a function that handles the outcome of the
promise. Try running the following example in your console:

```javascript
var someBool = true;

const ourPromise = new Promise((resolve, reject) => {
  if (someBool) {
    resolve("The bool was true!");
  } else {
    reject("The bool was false!");
  }
});

// The following will log 'The bool was true!'.
// As with 'resolve' and 'reject', you can name the 'resolveValue' variable
// any way you like.
ourPromise.then((resolveValue) => console.log(resolveValue));
```

We gave the `.then()` function a function as argument (in the form of the
abbreviated anonymous function `(resolveValue) => console.log(resolveValue)`)
that has one input, the `resolvedValue`, and simply logs the result of
the promise. The value of `reslovedValue` is either "The bool was true!" or "The
bool was false!". Remember that the function inside `then` will only occur once the
promise is not pending anymore (which makes it async).

If someBool was false, the promise would end up in the rejected state. We can
use the `.catch()` function to deal with this:

```javascript
var someBool = false; // Change to true to see the promise succeeding.

const promise = new Promise((resolve, reject) => {
  if (someBool) {
    resolve("The bool was true!");
  } else {
    reject("The bool was false!");
  }
});

promise
  .then((resolveValue) =>
    console.log(`Our promise succeeded! It returned
the value: ${resolveValue}`)
  ) // this will log 'Our promise succeeded! It
  // returned the value: The bool was true!'

  .catch((rejectValue) =>
    console.log(`Oh, our promise failed! It returned
the value: ${rejectValue}`)
  ); // this will log 'Oh, our promise failed! It
// returned the value: The bool was false!'
```

If there are multiple elements that depend on each other to be executed (and
they are all promises), we can chain multiple `then`s (that is, if the function
given to a `then` returns another promise value, we can do another (external)
`then`. Good examples are [here](https://javascript.info/promise-chaining)).

Importantly, if we are creating a function that has to check multiple promises,
we can use the `async...await` syntax to simplify our code, so that we don't
have to write a big chain of `.then()`. With `async...await` you have another
approach available for writing asynchronous code. An example:

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Donezo!"), 3000);
  }); // setTimeout is a function that makes the code wait for some specified
  // amount of time to return.
  let result = await promise; // Wait until the promise resolves.
  alert(result); // "Donezo!"
}

f();
```

Try it in the console of your browser developer tools to see the promise pending
and resolve after 3 seconds.

## Classes

[Per](https://javascript.info/class), we often need to create many objects of
the same kind, like users, or goods or whatever.

The basic class syntax is:

```javascript
class MyClass {
  // The constructor method for creating a new class instance (aka object).
  constructor() { ... }
  // Custom methods that define the behavior of any class instance.
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Here is an example:

```html
<script>
  class User {
    constructor(name) {
      // this refers to current class instance created, e.g., in the call below
      // it refers to "user" which we assigned the name "John".
      this.name = name;
    }
    sayHi() {
      alert(this.name);
    }
  }

  // Create a new user instance. The constructor() method is called automatically
  // by new, so we can initialize the object there.
  let user = new User("John");
  user.sayHi();
</script>
```

## Error handling with try-catch

You can catch runtime errors with a try-catch block.

```javascript
try {
  alert("Start of try runs"); // (1) <--
  lalala; // error, variable is not defined!
  alert("End of try (never reached)"); // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}
```

## Browser Storage

There are two types of browser storage to keep state in websites (e.g, that a
user is logged in): HTTP cookies (or just cookies) and local/session storage.

### 1. HTTP cookies

[Per](https://javascript.info/cookie), cookies are small strings of data that
are stored directly in the browser. Cookies are stored per in the browser per
domain. E.g., amazon.com only has access to amazon.com cookies and not
facebook.com cookies. This is the Same Origin Policy. Cookies are a part of the
HTTP protocol, defined by the RFC 6265 specification.

Cookies are usually set by a web server using the response `Set-Cookie` HTTP
header. On subsequent communication with the server, the browser automatically
adds them to (almost) every HTTP request it sends to the server of that same
domain using the `Cookie` HTTP-header. That way the server knows which client it
is talking to.

You can set a cookie on the server with PHP or any other server side language.
But your browser can also write a cookie to the current site with:

```javascript
document.cookie = "user=x"; // Write a cookie with key 'user' and value 'x'.
alert(document.cookie); // Show all cookies of the current site.
```

Note: The above does not work with a site that you load locally from your
computer as it does not have a real domain.

Cookies are stored in form of strings as key-value pairs.

### 2. Local/Session Storage

HTML 5 introduced the web storage objects `localStorage` and `sessionStorage`.
These are essentially bigger cookies. `sessionStorage` will be deleted after
a browser restart while `localStorage` persists. Many browsers have 5MB of each
storage type per domain; also stored as key-value pairs just as cookies.

You can use `localStorage` (and `sessionStorage` equivalently) like so:

```javascript
localStorage.setItem("test", 1); // Set local storage with key 'test' to value '1'.
alert(localStorage.getItem("test")); // Retrieve 1 from local storage.
```

There is also an [IndexedDB](https://javascript.info/indexeddb) in the browser.
The power of that database is usually excessive for traditional client-server
apps. `IndexedDB` is intended for offline apps, to be combined with
`ServiceWorkers` and other technologies.

## Service Workers

Rich offline experiences, periodic background syncs, push notifications ---
functionality that would normally require a native application --— are coming to
the web. Service workers provide the technical foundation that all these features
rely on. A service worker is a script that your browser runs in the background,
separate from a web page, opening the door to features that don't need a web page
or user interaction. Read more:
[Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/).

## Extending JS with libraries and frameworks

### 1. jQuery

[jQuery](https://jquery.com/) is one of the most popular libraries extending
many functionalities of JS.

### 2. Node.js

[Node.js](https://nodejs.org/en/) Node.js is a backend JavaScript runtime
environment that runs on the V8 engine and executes JavaScript code outside a
web browser.

### 3. Express

[Express](https://expressjs.com/) is probably the most popular web framework for
Node.js.

### 4. React and React Native

We will cover those in the lectures of the second half of the class.
