let money = 50;  // Starting money
let previousRandomNumber = null;  // Stores the previous random number (card)

function betUp() {
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    var randomImage = "card" + randomNumber + ".jpeg";
    var randomImageSource = "images/" + randomImage;

    // Set the image source for the generated random image
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

    console.log("Generated number: " + randomNumber);

    // Check if this is the first bet (no previous card to compare)
    if (previousRandomNumber === null) {
        previousRandomNumber = randomNumber;
        document.querySelector("h2.score").innerHTML = `Place your first bet!`;
        return;
    }

    // Deduct 10 from money each time a bet is placed
    money -= 10;

    // Compare the current card (randomNumber) with the previous card
    if (randomNumber > previousRandomNumber) {
        money += 20;  // Win: Add 20 to money
        document.querySelector("h2.score").innerHTML = `You won! Your money: $${money}`;
    } else if (randomNumber < previousRandomNumber) {
        document.querySelector("h2.score").innerHTML = `You lost! Your money: $${money}`;
    } else {
        document.querySelector("h2.score").innerHTML = `It's a draw! Your money: $${money}`;
    }

    // Update previousRandomNumber for the next bet
    previousRandomNumber = randomNumber;

    // If money reaches 0, stop the game
    if (money <= 0) {
        document.querySelector("h2.score").innerHTML = `Game Over! You're out of money.`;
        document.querySelector(".btn").disabled = true;  // Disable the button if money is 0
    }
}

function betDown() {
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    var randomImage = "card" + randomNumber + ".jpeg";
    var randomImageSource = "images/" + randomImage;

    // Set the image source for the generated random image
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

    console.log("Generated number: " + randomNumber);

    if (previousRandomNumber === null) {
        previousRandomNumber = randomNumber;
        document.querySelector("h2.score").innerHTML = `Place your next bet!`;
        return;
    }
    // Deduct 10 from money each time a bet is placed
    money -= 10;

    // Compare the current card (randomNumber) with the previous card
    if (randomNumber < previousRandomNumber) {
        money += 20;  // Win: Add 20 to money
        document.querySelector("h2.score").innerHTML = `You won! Your money: $${money}`;
    } else if (randomNumber > previousRandomNumber) {
        document.querySelector("h2.score").innerHTML = `You lost! Your money: $${money}`;
    } else {
        document.querySelector("h2.score").innerHTML = `It's a draw! Your money: $${money}`;
    }

    // Update previousRandomNumber for the next bet
    previousRandomNumber = randomNumber;

    // If money reaches 0, stop the game
    if (money <= 0) {
        document.querySelector("h2.score").innerHTML = `Game Over! You're out of money.`;
        document.querySelector(".btn").disabled = true;  // Disable the button if money is 0
    }
}

