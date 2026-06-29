let music = document.getElementById("bgMusic");

/* START */
function startExperience(){
music.play();
startTyping();
}

/* CHAT TYPING */
const text = "I am truly sorry... I never wanted to hurt you. You mean a lot to me ❤️";

let i = 0;
function startTyping(){
let el = document.getElementById("typingText");
if(i < text.length){
el.innerHTML += text[i];
i++;
setTimeout(startTyping,40);
}
}

/* LIGHTBOX */
function openImage(src){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightboxImg").src=src;
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

/* MUSIC */
function toggleMusic(){
if(music.paused) music.play();
else music.pause();
}

/* DARK MODE */
function toggleMode(){
document.body.classList.toggle("dark");
}

/* GIFT */
function openGift(){
document.getElementById("giftText").innerHTML =
"❤️ Thank you for being in my life... You are still very special to me.";
createConfetti();
}

/* 🌸 FALLING HEARTS */
setInterval(()=>{
let p=document.createElement("div");
p.className="particle";
p.innerHTML="❤️";
p.style.left=Math.random()*100+"vw";
p.style.animationDuration=(3+Math.random()*5)+"s";
document.body.appendChild(p);
setTimeout(()=>p.remove(),6000);
},300);

/* 🎉 CONFETTI */
function createConfetti(){
for(let i=0;i<30;i++){
let c=document.createElement("div");
c.className="particle";
c.innerHTML="✨";
c.style.left=Math.random()*100+"vw";
c.style.color="#ffcc00";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}