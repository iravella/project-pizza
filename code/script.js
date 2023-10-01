// Start here

// Step 1 - Welcome and introduction
// Your code goes here

const alertMessage = "Invalid selection, please start again and select a valid option. Bye 👋";
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

if (foodChoice === '1') {
    selectedFood = 'Pizza';
} else if (foodChoice === '2') {
    selectedFood = 'Pasta';
} else if (foodChoice === '3') {
    selectedFood = 'Salad';
} else {
    alert(alertMessage);
    exit(1);
}

alert(`Hello, ${selectedFood} is selected!`);

// Step 3 - Subtype choice
// Your code goes here
let pizzaType;
let pastaType;
let saladType;

if (foodChoice === "1") { // Pizza
    pizzaType = prompt(
        `Select your favourite Pizza type
      1 - Mozarilla
      2 - Kyckling
      3 - quattro formaggi
      Please enter the number of your choice`
    );

    if (pizzaType === '1') {
        pizzaType = 'Mozarilla';
    } else if (pizzaType === '2') {
        pizzaType = 'Kyckling'
    } else if (pizzaType === '3') {
        pizzaType = 'fromaggi'
    } else {
        alert(alertMessage);
        exit(1);
    }
    alert(`Great choice! You selected ${pizzaType}`);

} else if (foodChoice === '2') {
    pastaType = prompt(
        `Select your favourite Pasta type
      1 - Vegetable
      2 - Spaghetti
      3 - Chicken
      Please enter the number of your choice`
    );

    if (pastaType === '1') {
        pastaType = 'Vegetable';
    } else if (pastaType === '2') {
        pastaType = 'Spaghetti';
    } else if (pastaType === '3') {
        pastaType = 'Chicken'
    } else {
        alert(alertMessage);
        exit(1);
    }
    alert(`Great choice! You selected ${pastaType}`);

} else if (foodChoice === '3') { // Salad
    saladType = prompt(
        `Select your favourite Salad type
      1 - Chicken
      2 - Caesar
      3 - Grilled chicken
      Please enter the number of your choice`
    );

    if (saladType === '1') {
        saladType = 'Chicken';
    } else if (saladType === '2') {
        saladType = 'Caesar';
    } else if (saladType === '3') {
        saladType = 'Grilled chicken';
    } else {
        alert(alertMessage);
        exit(1);
    }
    alert(`Great choice! You selected ${saladType}`);
} else {
    alert(alertMessage);
    exit(1);
}

// Step 4 - Age
// Your code goes here

const userAge = prompt(
    `Please specify if the food is intended for a child or an adult `
)

let totalCost;

if (userAge.toLowerCase() === 'adult') {
    totalCost = 200;

} else if (userAge.toLowerCase() === 'child') {
    totalCost = 150;
} else {
    alert(alertMessage);
    exit(1);
}

console.log(selectedFood);

alert(`Hello ${userName}! You have selected ${selectedFood} for serving type ${userAge}. The total 
         cost is ${totalCost} kr`);



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



