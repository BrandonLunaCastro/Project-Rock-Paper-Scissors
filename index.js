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

function removeBorder(node,estilo){
    if(typeof(estilo) !== "string"){
        return;
    }else{
        node.classList.remove(estilo);
    }  
}

function updateScore(pc,player){
    pointsPC.textContent =`Computer Points : ${pc}`;
    pointsHuman.textContent = `Your Points : ${player}`;   
}


let options = document.querySelectorAll('img[data-selection]')
const showResults = document.querySelector('.result'),
      finalResult = document.querySelector('.finalResult')
let pointsPlayer = 0,
    pointsComputer = 0;
    
let scoreSection = document.querySelector(".score"),
    pointsPC = document.createElement("p"),
    pointsHuman = document.createElement("p");

   /*  pointsPC.textContent =`Computer Points : ${pointsComputer}`;
    pointsHuman.textContent = `Your Points : ${pointsPlayer}`;
    
    scoreSection.appendChild(pointsPC)
    scoreSection.appendChild(pointsHuman) */    
    
    scoreSection.appendChild(pointsPC)
    scoreSection.appendChild(pointsHuman)

    updateScore(pointsComputer,pointsPlayer)


options.forEach((option)=> {
  option.addEventListener('click',e => {
    let playerSelection = option.getAttribute('data-selection')
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase()
    game(playerSelection);
})  
})

let game = (playerSelection) => {
    let computerSelection = getComputerChoise()
    console.log(computerSelection)
    let answer = playRound(playerSelection,computerSelection)
    
    answer.slice(0,5) === "Again" 
    ? ""
    : answer.slice(0,8) === "You won!"
     ? pointsPlayer++ 
     : pointsComputer++;

    showResults.textContent = answer 
    showResults.classList.add("is-activeResult");


  /*   pointsPC.textContent =`Computer Points : ${pointsComputer}`;
    pointsHuman.textContent = `Your Points : ${pointsPlayer}`; */
    updateScore(pointsComputer,pointsPlayer)
    console.log(pointsComputer,pointsPlayer); 
     
if(pointsPlayer === 5){
    finalResult.innerText = `Congratulations! You are the best`;
    finalResult.classList.add("is-activeFinal");
    reloadPoints();
}else if(pointsComputer === 5){
    finalResult.innerText =  `Computers wins, you louse :( `;
    finalResult.classList.add("is-activeFinal");
    reloadPoints();  
}else if (pointsPlayer === 5 && pointsComputer === 5){
    finalResult.innerText = `Tie! again`;
    finalResult.classList.add("is-activeFinal");
    reloadPoints();
}
}

let btnReload = document.querySelector('.reload')
btnReload.addEventListener('click',reloadPoints)

function reloadPoints(){
    pointsPlayer = 0;
    pointsComputer = 0;
    showResults.innerText = '';
    removeBorder(showResults,"is-activeResult")
  
    setTimeout(() => {
        finalResult.innerText = '';
        removeBorder(finalResult,"is-activeFinal");
        updateScore(pointsComputer,pointsPlayer)
     }, 2500); 
}