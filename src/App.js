import './css/styles.css';
import React, { useState } from 'react';
import Header from './components/Header';
import GameSelection from './components/GameSelection';
import Promo from './components/Promo';
import Footer from './components/Footer';
import GameContainer from './components/GameContainer';
import { flashColors, stopGame } from './GameLogic'; // Import necessary functions

const App = () => {
    const [selectedLevel, setSelectedLevel] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [countdown, setCountdown] = useState(3); // Countdown state

    const handleSelectLevel = (event) => {
        setSelectedLevel(event.target.value);
    };

    const handleStartGame = () => {
        setGameStarted(true);
        startCountdown(); // Start countdown before flashing colors
    };

    const startCountdown = () => {
        let count = 3;
        setCountdown(count); // Set initial countdown value
    
        const countdownInterval = setInterval(() => {
            count--;
            if (count === 0) {
                clearInterval(countdownInterval);
                setCountdown(null); // Reset countdown state
                setTimeout(() => {
                    flashColors(selectedLevel, () => setGameStarted(false)); // Start flashing colors after timeout
                }, 0); // Wait for 0 milliseconds after countdown
            } else {
                setCountdown(count); // Update countdown value
            }
        }, 1000); // Update countdown every 1000 milliseconds (1 second)
    };
    

    const handleStopGame = () => {
        stopGame(); // Stop the game
        setGameStarted(false); // Reset game state
        setCountdown(3); // Reset countdown state
        document.body.style.backgroundColor = ''; // Reset background color
    };

    return (
        <div>
            <Header />
            <Promo />
            {!gameStarted ? (
                <GameSelection onSelectLevel={handleSelectLevel} onStartGame={handleStartGame} disabled={!selectedLevel} selectedLevel={selectedLevel} />
            ) : (
                <GameContainer stopGame={handleStopGame} countdown={countdown} />
            )}
            <Footer />
        </div>
    );
};

export default App;
