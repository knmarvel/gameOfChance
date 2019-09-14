//Rock, paper, scissors
//array of ids and pictures
let content = "";
const rpsPics = [
    '<img src="images/rock-paper-scissors-rockuser.png" />',
    '<img src="images/rock-paper-scissors-paperuser.png" />',
    '<img src="images/rock-paper-scissors-scissorsuser.png" />',
    '<img src="images/rock-paper-scissors-rockcomputer.png" />',
    '<img src="images/rock-paper-scissors-papercomputer.png" />',
    '<img src="images/rock-paper-scissors-scissorscomputer.png" />'

]

//RPS1. Define main function and tell the function when to run
document.getElementById("rpsShoot").onclick = function rockPaperScissors()  {
    let id = getRadioInput("rps");
    document.getElementById("rpsYourChoice").innerHTML = ""
    document.getElementById("rpsMyChoice").innerHTML = ""
    document.getElementById("winnersCircle").innerHTML = ""
    let content = findRPSPic();
    printContent(id, content, "rpsYourChoice");
    let compyThrow = randomRPSThrow();
    let compyContent = findRPSCompPic(compyThrow);
    printContent(compyThrow, compyContent, "rpsMyChoice");
    winnerContent = whoWinsRPS(id,compyThrow);
    printContent("win",winnerContent,"winnersCircle")

};
function randomRPSThrow()   {
    let rpsThrow = (Math.floor(Math.random()*3));
    return rpsThrow;
}
function findRPSPic() {
    let idhere = getRadioInput("rps");
    console.log(idhere);
    if ("ROCK" === idhere) {
        content = rpsPics[0];
    } else {
    if (idhere === "PAPER")    {
        content = rpsPics[1]
    } else {
    if (idhere === "SCISSORS") {
        content = rpsPics[2]
    } else{
        content = "your mom";
    }}}
    return content;
}
function whoWinsRPS(user,computer)  {
    const outcomeRPS = ["You win!",
                        "The Computer wins!",
                        "Stalemate! Try again!"]
    if (user === "ROCK")    {
        if (computer == 0)  {
            return outcomeRPS[2]; //Stalemate
        }
        if (computer == 1)  {
            return outcomeRPS[1]; //Computer win
        }
        else{
            return outcomeRPS[0]; //You win
        }
    } if (user === "PAPER")    {
            if (computer == 1)  {
                return outcomeRPS[2]; //Stalemate
            }
            if (computer == 2)  {
                return outcomeRPS[1]; //Computer win
            }
            else {
                return outcomeRPS[0]; //You win
            }
        }if  (user === "SCISSORS")    {
            if (computer == 2)  {
                return outcomeRPS[2]; //Stalemate
            }
            if (computer == 0)  {
                return outcomeRPS[1]; //Computer win
            }
            else{
                return outcomeRPS[0]; //You win
            }
        }
    }
function findRPSCompPic(idhere) {
    if (0 === idhere) {
        content = rpsPics[3]
    } else {
    if (1 === idhere)    {
        content = rpsPics[4]
    } else {
    if (2 === idhere) {
        content = rpsPics[5]
    } else{
        content = "your mom";
    }}}
    return content;
}

//RPS2. Prints content
function printContent(id,content,idOfElement) {
    let divElement = document.createElement("div");
    divElement.id= "divName"+ id;
    divElement.className = "divClass" + id;
    divElement.innerHTML = content;
    document.getElementById(idOfElement).appendChild(divElement);
}



//This works; gets input from radio buttons by the element name.
function getRadioInput(nameOfElement) {
    let radioSelection = document.getElementsByName(nameOfElement);
    console.log(radioSelection);
    for(let radioCount = 0; radioCount <=radioSelection.length; radioCount++)   {
        if (radioSelection[radioCount].checked) {
            return(radioSelection[radioCount].value);
        }
    }
}


