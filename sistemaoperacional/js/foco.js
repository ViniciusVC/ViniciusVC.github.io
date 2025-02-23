let timeLeft = 180; // Tempo inicial (5 minutos = 300)
        let timerInterval;
        const timerDisplay = document.getElementById("timer");
        const startButton = document.getElementById("startButton");
        const stopButton = document.getElementById("stopButton");
        const alarmSound = document.getElementById("alarmSound");

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval); // Para o intervalo anterior

            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    alarmSound.play(); // Toca o som ao finalizar
                    timeLeft = 180; // Reinicia o tempo (5 minutos = 300)
                    updateDisplay();
                }
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerInterval);
        }

        function updateDisplay() {
            const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");
            timerDisplay.textContent = `${minutes}:${seconds}`;
        }

        startButton.addEventListener("click", startTimer);
        stopButton.addEventListener("click", stopTimer);