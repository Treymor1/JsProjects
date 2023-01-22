let player1 = 0;
let player2 = 0;
Number(player1);
Number(player2);
function getComputerChoice (){
    let number = Math.floor(Math.random()*3)+1;
    if(number === 1){
        return "rock";
    }
    else if(number === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        player2++;
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        player2++;
        return 'You Lose! Scissors beats Paper';

    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        player2++;
        return 'You Lose! Rock beats Scissors';

    }
    else if(computerSelection == "rock" && playerSelection == 'paper'){
        player1++;
        return 'You Win! Paper beats Rock';

    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        player1++;
        return 'You Win! Scissors beats Paper';

    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        player1++;
        return 'You Win! Rock beats Scissors';      
    }
    else if(computerSelection == "rock" && computerSelection == "rock"){
        return 'Draw';
    }
    else if(computerSelection == "paper" && computerSelection == "paper"){
        return 'Draw';
    }
    else if(computerSelection == "scissors" && computerSelection == "scissors"){
        return 'Draw';
    }
}
function resetCounter(){
    let reset=0;
    Number(reset);
    return reset;
}
function game(){
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Choise","Rock,Paper or Scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection,computerSelection);
        console.log(results);
    }
    if(player1>player2){
        console.log('You are The King');
    }
    else if(player1<player2){
        console.log('Computer is the King');
    }
    else{
        console.log('Tie');
    }
    player1 = resetCounter();
    player2 = resetCounter();
}