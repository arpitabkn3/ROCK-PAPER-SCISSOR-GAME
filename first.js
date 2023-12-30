let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["paper","rock","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
    //rock,paper,scissor
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
    }


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generating computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice === compChoice){
    //Draw Game
    drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //sciccor,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice ==="paper"){
            //rock,scissor
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        }
    };



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    
        playGame(userChoice);
    });
    });