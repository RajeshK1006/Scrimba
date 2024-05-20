// card sum ==21 you win
// less than 21 ntg happend but in game
// grater than 21 game out
// ace = 11
// king  = 10

let fCard = 10;
let sCard = 7;
let message = "";

let sum = fCard+sCard
let card = document.querySelector("#card-el")


let hasBlackjack = false;
let isAlive = true;
let  messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

function startGame(){
    renderGame()
}

function renderGame(){
    card.textContent = "Card: "  + fCard + " " + sCard
    if (sum<21){
        message = "Do you want to draw a new card? 🙂"
        isAlive = true;
    }
    else if(sum==21){
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackjack=true;
        isAlive = true;
       
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false;
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    let newCard = 7
    sum += newCard
    renderGame()
}

// cash out!
// console.log(messageEl)
// messageEl.textContent += 1