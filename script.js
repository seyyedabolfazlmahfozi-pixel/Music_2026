const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

// تلاش برای پخش خودکار هنگام ورود
window.addEventListener("load", () => {
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            playBtn.innerHTML = "▶ PLAY MUSIC";
        });
    }
});

// کنترل دکمه
playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// تغییر متن دکمه هنگام پخش
music.addEventListener("play", () => {
    playBtn.innerHTML = "⏸ PAUSE MUSIC";
});

// تغییر متن دکمه هنگام توقف
music.addEventListener("pause", () => {
    playBtn.innerHTML = "▶ PLAY MUSIC";
});

// اگر موزیک تمام شد دوباره از اول پخش شود
music.addEventListener("ended", () => {
    music.currentTime = 0;
    music.play();
});
