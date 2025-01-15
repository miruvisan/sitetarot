const backgroundMusic = new Audio('meditation-audio.mp3'); 
backgroundMusic.loop = true; 

if (!backgroundMusic.canPlayType('audio/mpeg')) {
    console.error('Audio format is not supported. Please use a supported format like MP3 or OGG.');
}

let musicState = localStorage.getItem('musicOn') === 'true';

if (musicState) {
    backgroundMusic.play().catch((err) => {
        console.error('Autoplay blocked:', err);
    });
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch((err) => {
            console.error('Error playing music:', err);
        });
        localStorage.setItem('musicOn', 'true');
    } else {
        backgroundMusic.pause();
        localStorage.setItem('musicOn', 'false');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
        toggleMusic();
    }
});

function showMusicPopup() {
    const popup = document.createElement('div');
    popup.id = 'music-popup';
    popup.innerHTML = `
        <p>Press "M" to toggle background music.</p>
    `;
    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 5000);
}

window.addEventListener('load', showMusicPopup);
