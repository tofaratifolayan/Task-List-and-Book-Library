# JavaScript Tutorial Exercises

Created by Sebastian Zimmeck for
Wesleyan University - COMP 333: Software Engineering

## 1. Functions

### 1.1 Dog Age Calculator

Calculate the age of your dog in dog years. Write a function named `calculateAge`
that takes your dogs age in human years as argument and calculates and converts
it to dog years based on the rate of 1 human year == 7 dog years. Outputs the
result to the screen printing "Your dog is \<result\> years old in dog years!"
Call the function three times with different sets of values.

### 1.2 Celsius/Fahrenheit Converter

Create a function `celsiusToFahrenheit`. The function should store a Celsius
temperature in a variable, convert it to Fahrenheit and output "\<temperature\>C
is \<temperature\>F".

Create a function `fahrenheitToCelsius`. The function should store a Fahrenheit
temperature in a variable, convert it to Celsius and output "\<temperature\>F
is \<temperature\>C".

Here are the conversion rates:
Celsius to Fahrenheit: divide by 5, then multiply by 9, then add 32.
Fahrenheit to Celsius: deduct 32, then multiply by 5, then divide by 9.

Make a call to `celsiusToFahrenheit`. Then, make a nested call with the result
to `fahrenheitToCelsius(celsiusToFahrenheit)` to check that the temperature you
originally entered will be the same after you converted it.

## 2. Objects

### 2.1 The Reading List

Keep track of which books you read and which books you want to read.

Create an array of objects, `books`, where each object describes a book and has
properties for:

- `title` (a string)
- `author` (a string)
- `alreadyRead` (a boolean indicating if you read it yet)

Here is an example:

```javascript
var books = [
  { title: "Shoe Dog", author: "Phil Knight", alreadyRead: true },
  { title: "Ready Player One", author: "Earnest Cline", alreadyRead: false },
];
```

Iterate through the array of books and print to the console whether you read it.
Running your code on the above example should produce:

```text
You already read "Shoe Dog" by Phil Knight
You still need to read "Ready Player One" by Earnest Cline
```

## 3. Asynchronous Calls

### 3.1 Rolling Dice

Write a program that resolves a promise successfully if the user rolls a 6 on a
six-sided die and otherwise rejects the promise. Here is the dieToss function:

```javascript
function dieToss() {
  return Math.floor(Math.random() * 6) + 1;
}
```

You can call it and assign the return value to a variable `tossResult`. Now
create a new promise. If the user rolled a 6, resolve the promise printing to
the console "You rolled a \<tossResult\>. You win!". Otherwise, reject and catch
the promise and print "You rolled a \<tossResult\>. Better luck next time!"
k
See the tutorial for an example that resolves or rejects a promise based on the
value of `someBool`.

### 3.2 Asynchronously Fetching JSON Data from the Django Tutorial Polls App

When you are making a GET request to a server, you may have to wait a bit before
you can continue with the execution of your JS code because your further program
logic depends on the fetched data. In such cases it is useful to make an async
call that will hold the execution of your JS code until the data has arrived.
Here is an example how you can set up an async call for the Polls app from the
Django tutorial. If you run the following code from your console, it will fetch
the `polls/json/` data from your local server and print it to the console.

Before you can run the following code in your console, ...

```javascript
async function pollFetch() {
  const response = await fetch("http://127.0.0.1:8000/polls/json/");
  const json = await response.json();
  console.log(json);
}

pollFetch();
```

... set up your server as follows (or if you are using the pre-compiled polls
app, all necessary code is already in there).

1.  In the Poll app's `views.py` import the `JsonResponse` to send HTTP responses
    in JSON format. Also, add a view with hardcoded JSON data to serve.

    ```Python
    from django.http import HttpResponseRedirect, Http404, JsonResponse

    def jsonview(request):
        return JsonResponse({"Your JSON Response": "Success!"})
    ```

2.  In the Poll app's `urls.py` wire your new view to a URL like so:

    ```Python
    urlpatterns = [
        path('json/', views.jsonview),
    ]
    ```

3.  Once you start your server and run the above code in the JavasScript console
    in your browser while you are on the page of your local server
    <http://127.0.0.1:8000/>, you should see the data being served (asynchronously).

4.  You can see that we need an asynchronous call for fetching data from a server
    in this case as follows. Remove `async` and the second `await` from the code
    above like so:

    ```javascript
    function pollFetch() {
      const response = fetch("http://127.0.0.1:8000/polls/json/");
      // Just removed the JSON conversion to simplify here.
      console.log(response);
    }

    pollFetch();
    ```

When you run this code, `console.log(reponse);` will run without waiting
for the `response`. You can see in your console that the response did not arrive
in time. The console will not print the response. However, under the network tab
in your console you can see that it eventually arrived, just after our code was
run. Adding `async` and `await` the following will work again.

```javascript
async function pollFetch() {
  const response = await fetch("http://127.0.0.1:8000/polls/json/");
  // Just removed the JSON conversion to simplify here.
  console.log(response);
}

pollFetch();
```

Part of the exercises are based on <https://www.teaching-materials.org/javascript/>
and <https://stackoverflow.com/questions/54950838/how-to-use-fetch-with-async-await>.
