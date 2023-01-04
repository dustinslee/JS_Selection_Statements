console.log("Hello World!\n==========\n");

// EXERCISE 1
console.log("EXERCISE 1:\n==========\n");
let num = 5;
let guess = prompt("Guess the number");

if(isNaN(guess) == false) { //Check if user entered a number
  if (guess > num) {
    console.log("Too high");
  } else if (guess < num) {
     console.log("Too low");
  } else if (guess == num) {
     console.log("Congratulations!!!");
  }
} else {
    console.log("Entered an invalid number");
}

// EXERCISE 2
console.log("EXERCISE 2:\n==========\n");
let birthMonth = window.prompt("What is your birth month?");
switch (birthMonth.toLowerCase().slice(0, 3)) {
  case 'mar':
  case 'apr':
  case 'may':
    console.log("You were born in the spring!");
    break;
  case 'jun':
  case 'jul':
  case 'aug':
    console.log("You were born in the summer!");
    break;
  case 'sep':
  case 'oct':
  case 'nov':
    console.log("You were born in the fall(autumn)!");
    break;
  case 'dec':
  case 'jan':
  case 'feb':
    console.log("You were born in the winter!");
    break;
  default:
    console.log("Entered an ivalid month");
}

// EXERCISE 3
console.log("EXERCISE 3:\n==========\n");
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case '01':
    type = "Tank top";
    break;
  case '02':
    type = "T-Shirt";
    break;
  case '03':
    type = "Long Sleeve";
    break;
  case '04':
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case 'BK':
    color = "Black";
    break;
  case 'BL':
    color = "Blue";
    break;
  case 'RD':
    color = "Red";
    break;
  case 'PU':
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case 'S':
    size = "Small";
    break;
  case 'M':
    size = "Medium";
    break;
  case 'L':
    size = "Large";
    break;
  case 'XL':
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);