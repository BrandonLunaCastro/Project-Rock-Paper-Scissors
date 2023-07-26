function getComputerChoise(){
    let number = Math.round(Math.random() * (3 - 1) + 1) 
    let option;

    if(number === 1){
        option = "Rock";
    }else if(number === 2){
        option = "Paper";
    }else{
        option = "Scissors";
    }

    return option;

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


let options = document.querySelectorAll('img[data-selection]');
const showResults = document.querySelector('.result'),
      finalResult = document.querySelector('.finalResult');
let pointsPlayer = 0,
    pointsComputer = 0;
    
let scoreSection = document.querySelector(".score"),
    pointsPC = document.createElement("p"),
    pointsHuman = document.createElement("p");
    
    scoreSection.appendChild(pointsPC);
    scoreSection.appendChild(pointsHuman);

    updateScore(pointsComputer,pointsPlayer);


options.forEach((option)=> {
  option.addEventListener('click',e => {
    let playerSelection = option.getAttribute('data-selection');
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase();
    game(playerSelection);
})  
})

//Funcion principal

let game = (playerSelection) => {
    let computerSelection = getComputerChoise();
    let answer = playRound(playerSelection,computerSelection);
    
    answer.slice(0,5) === "Again" 
    ? ""
    : answer.slice(0,8) === "You won!"
     ? pointsPlayer++ 
     : pointsComputer++;

    showResults.textContent = answer; 
    showResults.classList.add("is-activeResult");

    updateScore(pointsComputer,pointsPlayer);
    console.log(pointsComputer,pointsPlayer); 

  
let audio = new Audio("./assets/audio/aplauso.mp3");
let audioLose = new Audio("./assets/audio/Boo.mp3");

if(pointsPlayer === 5){
    audio.volume = 0.2;     
    audio.play();
    finalResult.innerText = `Congratulations! You are the best`;
    finalResult.classList.add("is-activeFinal");
    reloadGame();
}else if(pointsComputer === 5){
    audioLose.volume = 0.2;
    audioLose.play()
    finalResult.innerText =  `Computers wins, you louse :( `;
    finalResult.classList.add("is-activeFinal");
    reloadGame();  
}else if (pointsPlayer === 5 && pointsComputer === 5){
    finalResult.innerText = `Tie! again`;
    finalResult.classList.add("is-activeFinal");
    reloadGame();
}
}

let btnReload = document.querySelector('.reload');
btnReload.addEventListener('click',reloadGame);

function reloadGame(){
    showResults.innerText = '';
    removeBorder(showResults,"is-activeResult");
    setTimeout(() => {
        finalResult.innerText = '';
        removeBorder(finalResult,"is-activeFinal");
        pointsPlayer = 0;
        pointsComputer = 0;
        updateScore(pointsComputer,pointsPlayer);
    }, 2500); 
}