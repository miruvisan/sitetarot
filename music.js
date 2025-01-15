const backgroundMusic = new Audio('meditation-audio.mp3'); 
backgroundMusic.loop = true;

const musicState = localStorage.getItem('musicOn') === 'true';

if (musicState) backgroundMusic.play();

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
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
    popup.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: rgba(0, 0, 0, 0.8); color: white; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); z-index: 9999;">
            Press "M" to toggle background music.
        </div>
    `;
    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 5000);
}

window.addEventListener('load', showMusicPopup);
