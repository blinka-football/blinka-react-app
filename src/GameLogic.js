// GameLogic.js
import beepSound from './media/beep.mp3'; // Import the beep sound file

// Create an Audio object for the beep sound
const beepAudio = new Audio(beepSound);

const SHAPE_MAPPING = {
    '#64c823': 'diamond',
   '#FC4705': 'square',
    '#FFFF00': 'circle',
    '#7ed0ff': 'triangle'
};

const COLORS = Object.keys(SHAPE_MAPPING);
const LEVEL_DURATIONS = [0.5, 1, 1.5, 2, 2.5, 3];
const NUM_FLASHES = 13;

let gameInterval;
let counter = 0;
let previousColor; // Keep track of the previous color

export function flashColors(level, endGameCallback) {
    const duration = LEVEL_DURATIONS[level - 1];

    // Reset counter and previousColor before starting a new game
    counter = 0;
    previousColor = null;

    // Create a new instance of the beep audio
    const beepAudio = new Audio(beepSound);

    // Delay the start of color flashing by the duration of the beep sound
    setTimeout(() => {
        // Play the beep sound
        beepAudio.play();

        gameInterval = setInterval(() => {
            let color;
            do {
                color = COLORS[Math.floor(Math.random() * COLORS.length)]; // Select random color from COLORS array
            } while (color === previousColor); // Repeat until a new color is selected
            document.body.style.backgroundColor = color; // Update body background color
            previousColor = color; // Update previous color

            // Display shape corresponding to the color
            const shape = SHAPE_MAPPING[color];
            const shapeContainer = document.getElementById('shape-container');
            if (shapeContainer) {
                shapeContainer.innerHTML = shape ? `<div class="shape ${shape}"></div>` : '';
            }

            counter++;
            if (counter === 1) { // Check if counter hits 1
                // Play the beep sound when counter hits 1
                beepAudio.play();
            }

            if (counter >= NUM_FLASHES) {
                clearInterval(gameInterval);
                document.body.style.backgroundColor = ''; // Reset background color
                if (shapeContainer) {
                    shapeContainer.innerHTML = ''; // Clear shape container
                }
                endGameCallback(); // Call the endGameCallback function
            }
        }, duration * 1000);
    }, beepAudio.duration * 0);
}

export function stopGame() {
    clearInterval(gameInterval);
    counter = 0; // Reset counter
    previousColor = null; // Reset previousColor

}
