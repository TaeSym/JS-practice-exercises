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
