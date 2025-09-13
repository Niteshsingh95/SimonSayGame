let gameseq=[];
let userseq=[];
let btns=["red","green","orange","blue"];
let started=false;
let level=0;
let highScore = 0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
   }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},250
    )
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");},250
    )
}
function levelUp(){
    userseq=[];
   level++; 
   h2.innerText=`level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);
gameseq.push(randColor);
console.log(gameseq);
   gameflash(randbtn);
}
function checkAns(idx){
//   console.log("current level is:",level);  

if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
    }
}
else{
    h2.innerHTML=`Game Over! your score was <b>${level}</b><br> Press any key to start`;
    if (level > highScore) {
        highScore = level;
        document.querySelector("#highscore").innerText = `High Score: ${highScore}`;
    }
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}
function btnPress(){
   
  let  btn=this;
  userflash(btn);
  userColor=btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);}
    function reset(){
        started=false;
        gameseq=[];
        userseq=[];
        level=0;
    }
    const highScoreElement = document.createElement("div");
    highScoreElement.id = "highscore";
    highScoreElement.innerText = `High Score: ${highScore}`;
    document.body.appendChild(highScoreElement);