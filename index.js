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


let game = () => {
  
  let pointsPlayer = 0,
  pointsComputer = 0;
  

  while(true){
    let computerSelection = getComputerChoise()
    console.log(computerSelection + " Seleccion de la pc")
    let playerSelection = prompt("Choise: Rock Paper and Scissors")
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase()

    let answer = playRound(playerSelection,computerSelection)
    alert(answer)


     answer.slice(0,5) === "Again" 
     ? ""
     : answer.slice(0,8) === "You won!"
      ? pointsPlayer++ 
      : pointsComputer++;

    if(pointsPlayer === 5){
        break;
    }else if(pointsComputer === 5){
        break;
    }

    

    }

     
    if(pointsPlayer === 5){
        alert(`Congratulations! You are the best, points : you ${pointsPlayer} , computer ${pointsComputer}`)
        console.log(pointsPlayer)
      
    }else if(pointsComputer === 5){
        alert(`Computers wins , you louse :( , points : you ${pointsPlayer} , computer ${pointsComputer} `)
        console.log(pointsComputer)
        
    }else{
        alert(`Tie! again`)
    }



}

game()
