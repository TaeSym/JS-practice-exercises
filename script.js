// Practicing declaring variables and logging to the console
//Skills: camelCase, console.log(), numbers
var numberOfHorses = 8;
console.log(numberOfHorses);

//Skills: camelCase, console.log(), strings, concatenation
var favoriteFlower = "chrysanthemum";
console.log("My favorite flower is a " + favoriteFlower);

//Skills: camelCase, console.log(), strings, concatenation
var birthCity = "Livingston, NJ";
var birthday = "November 3rd";
console.log("I was born on " + birthday + " in " + birthCity);

// Practicing Data Types & Arithmetic Operations
//Skills: prompt(), template literals
var favColor = prompt("What is your favorite color? (ex. blue)");
console.log(`Your favorite color is ${favColor}.`);

//Skills: prompt(), template literals, type conversion, arithmetic operators
var name = prompt("What is your name? (ex. Jane)");
var birthYear = Number(prompt("What year were you born? (ex. 1995)"));
var currentYear = Number(prompt("What is the current year? (ex 2023)"));

console.log(`${name}, you are ${currentYear - birthYear} years old.`);

//Skills: prompt(), template literals, type conversion, arithmetic operators, toFixed()
var salary = Number(prompt("How much do you make per hour? (ex. 25.50)"));
var hoursWorked = Number(prompt("How many hours are worked per week? (ex. 40)"));

console.log(`You will make $${(salary * hoursWorked).toFixed(2)} each week before taxes`)

//Skills: conditional statements, comparison operators
var string = "12";
var number = 12;

if (string === number) {
    console.log("Both the values and data types are equal.");
} else if (string == number) {
    console.log("Only the values are equal.");
} else {
    console.log("Neither the values nor data types are equal.");
}

//Skills: conditional statements, comparison operators, prompt(), Number()
var hoursSlept = Number(
    prompt(
      "How many hours did you sleep last night (Enter whole number from 0-12 (ex. 8))"
    )
  );
  
  if (hoursSlept > 12) {
    console.log("Please enter a number smaller than 12.");
  } else if (hoursSlept >= 8) {
    console.log("Yay, you got adequate sleep!");
  } else if (hoursSlept >= 5) {
    console.log(
      "Not bad, but you should consider going to sleep earlier tonight."
    );
  } else {
    console.log("How are you awake right now?? You need more sleep!");
  }
  
// Skills: conditional statements, comparison operators, alert(), prompt(), Number(), arithmetic operators, template literals
var chocolateWanted = Number(
    prompt(
      "How many pieces of chocolate would you like (Enter whole number from 0-10 (ex. 8))"
    )
  );
var leftover = 10 - chocolateWanted

if (leftover === 10) {
    alert("You must not like chocolate.");
} else if (leftover >= 5) {
    alert(`Great job at rationing! You will have ${leftover} pieces of chocolate left for tomorrow`);
} else if (leftover > 0) {
    alert(`You'll now only have ${leftover} pieces of chocolate for tomorrow.`);
} else {
    alert("Enjoy! But now you won't have any for tomorrow!");
}