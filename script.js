function getComputerChoice (){
    let number = parseInt(Math.random(3));
    if(number === 1){
        return 'Rock';
    }
    else if(number === 2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}
console.log(getComputerChoice());