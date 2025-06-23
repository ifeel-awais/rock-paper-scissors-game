let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDiv = document.querySelector("#user-score");
const compScoreDiv = document.querySelector("#comp-score");

const genCompChoice=()=>{
let options=['rock','paper','scissor'];
const  index=Math.floor(Math.random()*3); 
return options[index];
}

drawGame=()=>{
    msg.innerText=" Game Draw!  Play Again"
     msg.style.backgroundColor = "rgb(102, 0, 117)"
    
}

showWinner =(userWin,id,compChoice)=>{
    if (userWin){
        userScore++;
        msg.innerText= `You Win! Your ${id} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScoreDiv.innerText= userScore;
    }else{
        compScore++;
        msg.innerText = `You Lose! Your ${id} beaten by ${compChoice}`
         msg.style.backgroundColor = "red"
         compScoreDiv.innerText=compScore;
    }

}

const playgame = (id)=>{
 const compChoice = genCompChoice();
 if (id === compChoice){
    drawGame();
 }else{
    let userWin = true;
    if( id === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if( id === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    }else  {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , id , compChoice);
 }
}

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        let id = choice.getAttribute("id");
        playgame(id);
     })
})