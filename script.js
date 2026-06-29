let i = 0;

const text = "I am truly sorry... not just with words, but with everything I feel. You are still my most important person ❤️";

const intro = document.getElementById("intro");

/* 🌌 INTRO CLICK UNLOCK */
intro.addEventListener("click", ()=>{
  intro.style.display = "none";
});

/* 🚀 MAIN START */
function startExperience(){

  const video = document.getElementById("bgVideo");
  const music = document.getElementById("bgMusic");

  // 🔊 unlock audio (CRITICAL FOR GITHUB)
  video.muted = false;
  music.volume = 0.2;

  video.play().catch(()=>{});
  music.play().catch(()=>{});

  startTyping();
}

/* 💌 typing */
function startTyping(){
  let el = document.getElementById("typingText");

  if(i < text.length){
    el.innerHTML += text[i];
    i++;
    setTimeout(startTyping,35);
  }
}

/* 🎁 gift */
function openGift(){
  document.getElementById("giftText").innerHTML =
  "❤️ Na tere se behtar chahiyeee....Na tere jaisa chahiyeee mujhe to bs tu chahiye.❤️ ❤️ ❤️ ❤️ ❤️ Jo tum mere ho...... to kuchh nhi chahiyyeeee duniyaa se ❤️ ❤️ ❤️ ❤️ ❤️ ❤️  ";
}