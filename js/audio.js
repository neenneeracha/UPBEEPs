const audiobtn = document.getElementById('sound');

audiobtn.style.backgroundImage = 'url("./images/sound/Sound1.PNG")';

audiobtn.addEventListener('click',() => {
    if (audiobtn.style.backgroundImage == 'url("./images/sound/Sound1.PNG")') {
        audiobtn.style.backgroundImage = 'url("./images/sound/Sound2.PNG")';
    }
    else if (audiobtn.style.backgroundImage == 'url("./images/sound/Sound2.PNG")') {
        audiobtn.style.backgroundImage = 'url("./images/sound/Sound1.PNG")';
    }
})