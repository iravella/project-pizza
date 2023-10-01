// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
  `Please enter your name`
)

alert(`Hello ${userName}!.`);


// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(

  `Please select your food
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice`
);

let selectedFood;

switch (foodChoice) {
  case '1':
    selectedFood = 'Pizza'
    break;
  case '2':
    selectedFood = 'Pasta';
    break;
  case '3':
    selectedFood = 'Salad';
    break;
  default:
    alert("Invalid selection, start again and select an option.");
    exit(1);
}

alert(`Hello, ${selectedFood} is selected!`);

// Step 3 - Subtype choice
// Your code goes here
let pizzaType = "";
let pastaType = "";
let saladType = "";

switch (foodChoice) {
  case "1": //Pizza
    pizzaType = prompt(
      `Select your favourite Pizza type
      1 - Mozarilla
      2 - Kyckling
      3 - quattro formaggi
      Please enter the number of your choice`
    );


    switch (pizzaType) {
      case '1':
        alert('Great choice! You selected Mozarilla Pizza.');
        break;
      case '2':
        alert('Great choice! You selected Kyckling Pizza.');
        break;
      case '3':
        alert('Great choice! You selected quattro formaggi Pizza.');
        break;
      default:
        alert("Invalid selection, please start again and select a valid option. Bye 👋");
        break;
    }
    break;

  case '2': //Pasta
    pastaType = prompt(
      `Select your favourite Pasta type
      1 - Vegetable
      2 - Spaghetti
      3 - Chicken
      Please enter the number of your choice`
    );
    switch (pastaType) {
      case '1':
        alert('Great choice! You selected Vegetable Pasta');
        break;
      case '2':
        alert('Great choice! You selected Spaghetti Pasta');
        break;
      case '3':
        alert('Great choice! You selected Chicken Pasta');
        break;
      default:
        alert("Invalid selection, please start again and select a valid option. Bye 👋");
        break;
    }
    break;

  case '3': // Salad
    saladType = prompt(
      `Select your favourite Salad type
      1 - Chicken
      2 - Caesar
      3 - Grilled chicken
      Please enter the number of your choice`
    );
    switch (saladType) {
      case '1':
        alert('Great choice! You selected Chicken Salad');
        break;
      case '2':
        alert('Great choice! You selected Caesar Salad');
        break;
      case '3':
        alert('Great choice! You selected Grilled chicken Salad');
        break;
      default:
        alert("Invalid selection, please start again and select a valid option. Bye 👋");
        break;
    }
    break;

  default:
    alert("Invalid selection, please start again and select an option. Bye 👋");
    break;
}

// Step 4 - Age
// Your code goes here

const userAge = prompt(
  `Please specify if the food is intended for a child or an adult `
)

if (userAge.toLowerCase() === 'adult') {
  alert(`Hello ${userName}! You have selected ${foodChoice} for serving type ${userAge}. The total 
       cost is 200 kr`);
} else if (userAge.toLowerCase() === 'child') {
  alert(`Hello ${userName}! You have selected ${foodChoice} for serving type ${userAge}. The total 
       cost is 150 kr`);
} else {
  alert("Invalid selection, please start again and select an option. Bye 👋");
  exit(1);
}

// Step 5 - Order confirmation
// Your code goes here

let orderConfirmation = prompt(
  `Please confirm the order (Yes or No)`
);


if (orderConfirmation.toLowerCase() === 'yes') {
  alert(`Your order has been confirmed! Enjoy your meal, ${userName}!`);
} else {
  alert(`Order canceled. Have a great day, ${userName}!`);
}




