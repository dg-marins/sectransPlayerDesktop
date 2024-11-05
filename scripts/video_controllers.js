// Variável para controlar o estado do player
let isPlaying = false;
const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');
const backwardButton = document.querySelector('.fa-backward');
const forwardButton = document.querySelector('.fa-forward');

const videos = document.querySelectorAll('video'); // Seleciona todos os vídeos

// Função para alternar entre play e pause
function togglePlay() {
    isPlaying = !isPlaying;
    videos.forEach(video => {
        if (isPlaying) {
            video.play(); // Inicia todos os vídeos
            playButton.style.display = 'none';
            pauseButton.style.display = 'inline-block';
        } else {
            video.pause(); // Pausa todos os vídeos
            playButton.style.display = 'inline-block';
            pauseButton.style.display = 'none';
        }
    });
}

// Eventos para os controles de player
playButton.addEventListener('click', togglePlay);
pauseButton.addEventListener('click', togglePlay);
forwardButton.addEventListener('click', skipForward);
backwardButton.addEventListener('click', skipBackward);


const videos_vid = [
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3')
];

playButton.addEventListener('click', () => {
    videos_vid.forEach(video => video.play());
});

pauseButton.addEventListener('click', () => {
    videos_vid.forEach(video => video.pause());
});

backwardButton.addEventListener('click', () => {
    videos.forEach(video => {
        video.currentTime = Math.max(0, video.currentTime - 10); // Retrocede 10 segundos
    });
});

forwardButton.addEventListener('click', () => {
    videos.forEach(video => {
        video.currentTime = Math.min(video.duration, video.currentTime + 10); // Avança 10 segundos
    });
});

// Inicializa o estado dos botões
pauseButton.style.display = 'none'; // Oculta o botão de pause inicialmente

// Funções para avançar e retroceder
function skipForward() {
    console.log('Skipped forward');
    // Implementar lógica para avançar o vídeo
}

function skipBackward() {
    console.log('Skipped backward');
    // Implementar lógica para retroceder o vídeo
}