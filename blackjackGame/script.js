// card sum ==21 you win
// less than 21 ntg happend but in game
// grater than 21 game out
// ace = 11
// king  = 10
let arr = []
let inGame = false
let bJack = false
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let message = "" 
let sum =0



function generateRandom(){
    let v = Math.floor(Math.random()*13 +1)

    if (v==1){
    return 11
    }
    else if (v>10){
        return 10
    }
    else{
        return v
    }

}

function checkbJack(){
    if (sum<21){
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum==21){
        message = "Wohoo! You've got Blackjack! 🥳"
    }
    else{
        message = "You're out of the game Please 'PRESS RESET BUTTON'"
        inGame=false
        bJack = false
    }

    return message
}

function startGame(){
    renderGame()
}


function renderGame(){
    if (inGame === false && bJack === false){

        let fCard = generateRandom()
        let sCard = generateRandom()

        arr[0] = fCard
        arr[1] = sCard
        sum = arr[0] + arr[1]

        if (sum<21){
            inGame =true
            // message = "Do you want to draw a new card? 🙂"
            
        }
        else if (sum==21){
            bJack = true
            // message = "Wohoo! You've got Blackjack! 🥳"
        }
        else{
            inGame = false
            // message = checkbJack()
        }

        messageEl.textContent = checkbJack()
        sumEl.textContent += " "  +sum
        cardEl.textContent += " " + arr[0] + " " + arr[1]
    
    }
}





function newCard(){
    if(inGame ===true && bJack ===false){
    let nCard = generateRandom()
    sum += nCard
    arr.push(nCard)
    messageEl.textContent = checkbJack()
    cardEl.textContent += " " + nCard
    sumEl.textContent ="Sum: "+ sum 
    }
}

function reFresh(){
    sumEl.textContent ="Sum: "
    messageEl.textContent = "Do you wanna play a round?"
    cardEl.textContent = "Cards: "
    inGame = false
    bJack = false
}



