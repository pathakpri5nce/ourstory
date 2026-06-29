let i = 0;

const text = "I am truly sorry... not just with words, but with everything I feel. You matter more than anything in my world ❤️";

/* 🚀 MASTER START */
function startExperience(){

  const video = document.getElementById("bgVideo");
  const music = document.getElementById("bgMusic");

  // 🔊 unlock audio (CRITICAL GOD FIX)
  video.muted = false;
  video.volume = 1;

  music.volume = 0.7;

  // ▶ play video + music safely
  video.play().catch(()=>{});
  music.play().catch(()=>{});

  // 💌 start story
  startTyping();

  // 🌌 effects
  hearts();
  petals();
}

/* 💌 typing */
function startTyping(){
  let el = document.getElementById("typingText");

  if(i < text.length){
    el.innerHTML += text[i];
    i++;
    setTimeout(startTyping,30);
  }
}

/* ❤️ hearts */
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
  },200);
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
  },300);
}

/* 🎁 gift */
function openGift(){
  document.getElementById("giftText").innerHTML =
  "❤️ You are not just a memory... you are still my favorite story.";
}