let music = document.getElementById("bgMusic");

/* 🎬 START */
function startExperience(){
  music.play();
  startTyping();
}

/* 💬 TYPING EFFECT */
const text = "I am truly sorry... I never wanted to hurt you ❤️";
let i = 0;

function startTyping(){
  let el = document.getElementById("typingText");

  if(i < text.length){
    el.innerHTML += text[i];
    i++;
    setTimeout(startTyping,40);
  }
}

/* 📸 LIGHTBOX */
function openImage(src){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightboxImg").src=src;
}

function closeImage(){
  document.getElementById("lightbox").style.display="none";
}

/* 🌙 MODE */
function toggleMode(){
  document.body.classList.toggle("dark");
}

/* 🎵 MUSIC TOGGLE */
function toggleMusic(){
  if(music.paused) music.play();
  else music.pause();
}

/* 🎁 GIFT */
function openGift(){
  document.getElementById("giftText").innerHTML =
  "❤️ You are still very special to me...";
}