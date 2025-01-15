// Background music setup
const backgroundMusic = new Audio('your-music-file.mp3'); // Replace with your music file
backgroundMusic.loop = true; // Loop the music

// Retrieve saved state from localStorage
const musicState = localStorage.getItem('musicOn') === 'true';

// Set initial music state
if (musicState) backgroundMusic.play();

// Toggle music function
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        localStorage.setItem('musicOn', 'true');
    } else {
        backgroundMusic.pause();
        localStorage.setItem('musicOn', 'false');
    }
}

// Listen for "M" key press
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
        toggleMusic();
    }
});

// Show popup with instructions
function showMusicPopup() {
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: rgba(0, 0, 0, 0.8); color: white; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); z-index: 9999;">
            Press "M" to toggle background music.
        </div>
    `;
    document.body.appendChild(popup);

    // Remove popup after 5 seconds
    setTimeout(() => popup.remove(), 5000);
}

// Display popup when the page loads
window.addEventListener('load', showMusicPopup);
