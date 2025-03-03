// Get sliders and audio elements
const rainSlider = document.getElementById('rainSlider');
const wavesSlider = document.getElementById('wavesSlider');
const heavyRainSlider = document.getElementById('heavyRainSlider');
const fireSlider = document.getElementById('fireSlider');
const birdsSlider = document.getElementById('birdsSlider');
const whaleSlider = document.getElementById('whaleSlider');
const fanSlider = document.getElementById('fanSlider');

const rainAudio = document.getElementById('rainAudio');
const wavesAudio = document.getElementById('wavesAudio');
const heavyRainAudio = document.getElementById('heavyRainAudio');
const fireAudio = document.getElementById('fireAudio');
const birdsAudio = document.getElementById('birdsAudio');
const whaleAudio = document.getElementById('whaleAudio');
const fanAudio = document.getElementById('fanAudio');

// Function to start playing audio when user interacts
function playAudio(audio) {
    if (audio.paused) {
        audio.play().catch(error => console.warn("Autoplay prevented:", error));
    }
}

// Add event listeners for sliders to change volume and start audio
rainSlider.addEventListener('input', function () {
    playAudio(rainAudio);
    rainAudio.volume = rainSlider.value;
});
wavesSlider.addEventListener('input', function () {
    playAudio(wavesAudio);
    wavesAudio.volume = wavesSlider.value;
});
heavyRainSlider.addEventListener('input', function () {
    playAudio(heavyRainAudio);
    heavyRainAudio.volume = heavyRainSlider.value;
});
fireSlider.addEventListener('input', function () {
    playAudio(fireAudio);
    fireAudio.volume = fireSlider.value;
});
birdsSlider.addEventListener('input', function () {
    playAudio(birdsAudio);
    birdsAudio.volume = birdsSlider.value;
});
whaleSlider.addEventListener('input', function () {
    playAudio(whaleAudio);
    whaleAudio.volume = whaleSlider.value;
});
fanSlider.addEventListener('input', function () {
    playAudio(fanAudio);
    fanAudio.volume = fanSlider.value;
});