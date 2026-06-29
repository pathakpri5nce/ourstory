let i = 0;

const text = "I am truly sorry... I never wanted to hurt you. You are still the most important person in my life ❤️";

function startExperience(){

  // 🎬 video start
  let video = document.getElementById("bgVideo");
  video.muted = false;
  video.volume = 1;

  video.play().catch(()=>{});

  // 💌 typing
  startTyping();

  // ❤️ effects
  hearts();
  petals();
}

/* 💌 typing effect */
function startTyping(){
  let el = document.getElementById("typingText");

  if(i < text.length){
    el.innerHTML += text[i];
    i++;
    setTimeout(startTyping,35);
  }
}

/* ❤️ floating hearts */
function hearts(){
  setInterval(()=>{
    let h = document.createElement("div");
    h.innerHTML = "❤️";
    h.style.position = "fixed";
    h.style.left = Math.random()*100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "18px";
    h.style.animation = "floatUp 6s linear";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),6000);
  },250);
}

/* 🌹 petals */
function petals(){
  setInterval(()=>{
    let p = document.createElement("div");
    p.innerHTML = "🌹";
    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.top = "-20px";
    p.style.fontSize = "16px";
    p.style.animation = "fall 7s linear";
    document.body.appendChild(p);

    setTimeout(()=>p.remove(),7000);
  },400);
}

/* 🎁 gift */
function openGift(){
  document.getElementById("giftText").innerHTML =
  "❤️ No matter what happens... you will always matter to me.";
}