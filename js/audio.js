const audiobtn = document.getElementById('sound');
let isPlaying = false;
if (localStorage.getItem('isPlaying') !== null) {
    isPlaying = localStorage.getItem('isPlaying') === 'false';
} else {
    isPlaying = false;
}
audiobtn.style.backgroundImage = isPlaying ? 'url("./images/sound/Sound1.PNG")' : 'url("./images/sound/Sound2.PNG")';

function toggleAudio() {
    if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
    } else {
        audioElement.play();
        isPlaying = true;
    }
    localStorage.setItem('isPlaying', isPlaying);
    audiobtn.style.backgroundImage = isPlaying ? 'url("./images/sound/Sound1.PNG")' : 'url("./images/sound/Sound2.PNG")';
}

const audioElement = new Audio('audio/SoundUpbeep.mp3');
toggleAudio();
audiobtn.addEventListener('click', toggleAudio);

