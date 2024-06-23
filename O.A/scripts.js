const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];
let randomNote = '';
let score = 0;

document.getElementById('play-note').addEventListener('click', playRandomNote);

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        console.log(`Nota presionada: ${note}`);  // Depuración
        playSound(note);
        if (note === randomNote) {
            score++;
            setTimeout(() => {
                document.getElementById('message').textContent = '¡Felicidades!';
                document.getElementById('message').style.color = 'green';
                document.getElementById('score').textContent = score;
                playRandomNote();
            }, 2000);
        } else {
            score = 0;
            setTimeout(() => {
                document.getElementById('message').textContent = 'Inténtalo de nuevo';
                document.getElementById('message').style.color = 'red';
                document.getElementById('score').textContent = score;
            }, 2000);
        }
    });
});

function playRandomNote() {
    randomNote = notes[Math.floor(Math.random() * notes.length)];
    console.log(`Nota aleatoria: ${randomNote}`);  // Depuración
    playSound(randomNote);
}

function playSound(note) {
    const audioSrc = `sounds/sound_${note}.m4a`;  // Asegúrate de usar .m4a
    console.log(`Intentando reproducir sonido: ${audioSrc}`);  // Depuración
    const audio = new Audio(audioSrc);
    audio.play().catch(error => {
        console.error(`Error al reproducir el sonido para la nota ${note}:`, error);
    });
}
