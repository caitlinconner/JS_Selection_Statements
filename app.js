console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise1

let favNumber = 12;
let min = 1;
let max = 100;

let guessNumber = prompt(`Guess a number between ${min} and ${max}`);

guessNumber = parseInt(guessNumber);

if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
  console.log(`You didn't give a valid number between ${min} and ${max}.`);
} else {
if (guessNumber < favNumber) {
  console.log("Too low.");
} else if (guessNumber > favNumber) {
  console.log("Too high.");
} else if (guessNumber == favNumber) {
  console.log("Congratulations!!!");
}
}

//Exercise2


let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january": 
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I don't recognize that month.");
}



//Exercise3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}


console.log(`Product: ${size} ${color} ${type}`);


