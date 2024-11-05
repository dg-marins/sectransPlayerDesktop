    // Sincronização das timelines
    const timelines = document.querySelectorAll('.timeline input[type="range"]');

    timelines.forEach((timeline) => {
        timeline.addEventListener('input', (e) => {
            const value = e.target.value;
            timelines.forEach((t) => {
                if (t !== e.target) t.value = value;
            });
            videos.forEach(video => {
                const duration = video.duration;
                video.currentTime = (value / 100) * duration; // Atualiza o tempo do vídeo
            });
        });
    });

    