//para o

const video = document.getElementById('video');
const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none'; // esconde o botão quando o vídeo toca
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
});

// Opcional: mostrar o botão quando o vídeo pausa
video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

// Opcional: esconder o botão quando o vídeo toca
video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

video.disablePictureInPicture = true;

//para zoom do pc

document.addEventListener('keydown', function(e) {
    // Ctrl + ou Ctrl -
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
    // Ctrl + 0 (reset zoom)
    if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
    }
});
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
}, { passive: false });