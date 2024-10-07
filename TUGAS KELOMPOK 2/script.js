const header = document.getElementById('video-header');

header.addEventListener('click', function(event) {
    const shapes = ['diamond', 'triangle', 'heart'];
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'diamond') {
            firework.classList.add('diamond');
        } else if (shape === 'triangle') {
            firework.classList.add('triangle');
        } else if (shape === 'heart') {
            firework.classList.add('heart');
        }

        firework.style.left = `${event.clientX + (Math.random() * 30 - 15)}px`;
        firework.style.top = `${event.clientY + (Math.random() * 30 - 15)}px`;
        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 1000);
    }

    header.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    setTimeout(() => {
        header.style.backgroundColor = 'black';
    }, 100);
});
