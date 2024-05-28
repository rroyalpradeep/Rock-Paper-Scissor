
let rock = document.querySelector("#Rock");
let paper = document.querySelector('#Paper');
let scissor = document.querySelector('#Scissor');

let status = document.querySelector('#status');
let statusClass = document.querySelector('.status');
let user_score = document.querySelector('.user-score');
let us = 0;
let computer_score = document.querySelector('.computer-score');
let cs = 0;
let draw_score = document.querySelector('.draw-score');
let draw = 0;
let score = document.querySelector(".score-counter");
let counter = document.querySelector(".counter");
let p1 = document.querySelector(".player1");
let p2 = document.querySelector(".player2");
let p3 = document.querySelector(".player3");
let uCh = document.querySelector(".u-ch");
let cCh = document.querySelector(".c-ch");
let mark = document.querySelector(".mark");
mark.Style
const computerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () => {
    console.log("Game draw.");
    status.innerText = "Game draw.";
    console.log(++draw);
    draw_score.innerText = draw;
    statusClass.classList.remove("status","status-lose","status-win");
    statusClass.classList.add("status-draw");
}

const showWinner = (user,comp) => {
    if(user === true) {
        console.log("User win, computer choice:",comp);
        user_score.innerText = ++us;
        status.innerText = "You win 🏆";
        statusClass.classList.remove("status","status-lose","status-draw");
        statusClass.classList.add("status-win");
    }
    else {
        console.log("Computer win, computer choice:",comp)
        computer_score.innerHTML = ++cs;
        status.innerText = "You lose 👎";
        statusClass.classList.remove("status","status-win","status-draw");
        statusClass.classList.add("status-lose");
    }
}

const playGame = (choice) => {
    let compChoice = computerChoice();
    console.log("User choice: ",choice);
    uCh.innerText = choice;
    console.log("Computer choice:",compChoice);
    cCh.innerText = compChoice; 
    if(compChoice === choice) drawGame();
    else {
        let user = true;
        if(choice === "Rock"){ user = (compChoice === "Scissor") ? true : false;}
        else if(choice === "Paper"){ user = (compChoice === "Rock") ? true : false;}
        else if(choice === "Scissor"){ user = (compChoice === "Paper")? true : false;}
        showWinner(user, compChoice);
    }
}

let choice ;

rock.addEventListener("click",()=>{
    choice = rock.getAttribute("id");
    playGame(choice);
});

paper.addEventListener("click",()=>{
    choice = paper.getAttribute("id");
    playGame(choice);
});

scissor.addEventListener("click",()=>{
    choice = scissor.getAttribute("id");
    playGame(choice);
});

let i = 0 ;


document.querySelector("#checkbox").addEventListener("click",()=>{
    ++i;
    document.body.classList.toggle("day");
    document.querySelector(".navbar").classList.toggle("navbar-light");
    document.querySelector(".call-para").classList.toggle("call-para-dark");
    document.querySelector(".h3").classList.toggle("light");
    score.classList.toggle("score-counter-dark");
    counter.classList.toggle("counter-dark");
    p1.classList.toggle("player-dark");
    p2.classList.toggle("player-dark");
    p3.classList.toggle("player-dark");
    document.querySelector(".mark").classList.toggle("mark-day");
    if(i%2 == 0){
        user_score.classList.add("Score");
        user_score.classList.remove("Score-light");
        computer_score.classList.add("Score");
        computer_score.classList.remove("Score-light");
        draw_score.classList.add("Score");
        draw_score.classList.remove("Score-light");
        score.classList.remove("score-counter-dark");
    }
    else {
        user_score.classList.add("Score-light");
        user_score.classList.remove("Score");
        draw_score.classList.add("Score-light");
        draw_score.classList.remove("Score");
        computer_score.classList.add("Score-light");
    }
});
