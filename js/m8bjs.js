const answers = [
    "Signs point to yes.",
    "Yes.",
    "Reply hazy, try again.",
    "Without a doubt.",
    "My sources say no.",
    "As I see it, yes.",
    "You may rely on it.",
    "Concentrate and ask again.",
    "Outlook not so good.",
    "It is decidedly so.",
    "Better not tell you now.",
    "Very doubtful.",
    "Yes - definitely.",
    "It is certain.",
    "Cannot predict now.",
    "Most likely.",
    "Ask again later.",
    "My reply is no.",
    "Outlook good.",
    "Don't count on it.",
   " Yes, in due time.",
   " My sources say no.",
    "Definitely not.",
    "Yes.",
    "You will have to wait.",
    "I have my doubts.",
    "Outlook so so.",
    "Looks good to me!",
    "Who knows?",
    "Looking good!",
    "Probably.",
    "Are you kidding?",
    "Go for it!",
    "Don't bet on it.",
    "Forget about it. ",
 ]

 document.onload = printM8BContent();
 
 function printM8BContent()    {
    let divElement = document.createElement("div");
    divElement.id= "m8bpng"
    divElement.className = "m8bpngClass";
    divElement.innerHTML = '<img src = "images/magic8ball.png" />';
    document.getElementById("m8boutput").appendChild(divElement);
 }

 const m8bshoot = document.getElementById("m8bshoot");

 m8bshoot.onclick = function () {animateChanges();}
 
 function animateChanges()  {
    let oldChild = document.getElementById("m8bpng");
    document.getElementById("m8boutput").removeChild(oldChild);
    let divElement = document.createElement("div");
    divElement.id= "m8banime"
    divElement.className = "m8banimeClass";
    divElement.innerHTML = '<img src = "images/m8banime.gif" />';
    document.getElementById("m8boutput").appendChild(divElement);
    setTimeout(endAnimation, 2000)


}

function endAnimation() {
    let advice = (Math.floor(Math.random()*answers.length));
    advice = answers[advice];
    let oldChild = document.getElementById("m8banime");
    document.getElementById("m8boutput").removeChild(oldChild);
    let divElement = document.createElement("div");
    divElement.id= "m8badvice"
    divElement.className = "m8badviceClass";
    divElement.innerHTML = advice;
    document.getElementById("m8boutput").appendChild(divElement);

}