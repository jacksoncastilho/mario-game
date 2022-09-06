const btnStart = document.getElementById('start');
const mario = document.getElementById('mario');
const obstaculo = document.getElementById('obstaculo');

btnStart.addEventListener('click', play);

function play() {
    const obstaculo = document.getElementById('obstaculo');

    btnStart.style.display = 'none';

    obstaculo.style.animationPlayState = 'running';

    document.addEventListener('keydown', jump);

    colisao();
}

function jump() {
    mario.className = 'jump';

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 900);
}

function colisao() {
    let monitor = setInterval(() => {
            if ((obstaculo.offsetLeft >= 288.733 && obstaculo.offsetLeft <= 384.882) && mario.offsetTop >= 330) {
                restart();
                clearInterval(monitor);
            }
        },
        10);
}

function restart() {
    let btnRestart = document.getElementById('restart');

    obstaculo.style.animationPlayState = 'paused';
    btnRestart.style.display = 'block';

    document.removeEventListener('keydown', jump);

    btnRestart.addEventListener('click', () => location.reload());
}