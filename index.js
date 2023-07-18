function getComputerChoise(){
    let number = Math.round(Math.random() * (3 - 1) + 1) 
    let option;

    if(number === 1){
        option = "Rock"
    }else if(number === 2){
        option = "Paper"
    }else{
        option = "Scissors"
    }

    return option

}

const playRound = (player,computer) => {

    if(player === computer){
        return "Again"
    }else if((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper") ){
        return `You won! ${player} beats ${computer}`
    }else if( (player === "Paper" && computer === "Scissors") || (player === "Scissors" && computer === "Rock") || (player === "Rock" && computer === "Paper") ){
        return `You lose! ${computer} beats ${player}`
    }

}


let playerSelection = "Paper"

let computerSelection = getComputerChoise()

console.log(computerSelection + " Seleccion de la pc")
console.log(playRound(playerSelection,computerSelection))