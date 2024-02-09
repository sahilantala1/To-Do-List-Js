let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const com_score=document.querySelector("#com-score");
const draw = () => {
    console.log("Match Draw!");
    msg.innerText="Match Draw!";
    msg.style.backgroundColor="#081b31";
}

const gencmochoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndidx = Math.floor(Math.random() * 3);
    return options[rndidx];
}

const showwinner = (userwin) => {
    if (userwin) {
        // console.log("You Win!");
        userscore++;
        user_score.innerText=userscore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    } else {
        // console.log("Computer Wins!");
        comscore++;
        com_score.innerText=comscore;
        msg.innerText="Computer Wins!";
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    console.log("User Choice", userchoice);
    //genrate com choice
    const compchoice = gencmochoice();
    console.log("Computer Choice", compchoice);

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //paper,scissors
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //rock,scissors
            userchoice = compchoice === "scissors" ? false : true;
        }
        else {
            //rock,paper
            userchoice = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});