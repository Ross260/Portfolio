
        let timerInterval;
        let timeLeft;
        const timerDisplay = document.getElementById('timer-display');
        const form = document.getElementById('timer-form');

        // Function to format time (hh:mm:ss)
        function formatTime(seconds) {
            const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            return `${h}:${m}:${s}`;
        }

        // Wait for the page load absolutly
        window.addEventListener('DOMContentLoaded', function() {
            // Stmulate a click on the submit button after the load page
            document.getElementById('But').click();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
        
            // Get input values for hours, minutes, and seconds
            const hours = parseInt(document.getElementById('hours').value) || 0;
            const minutes = parseInt(document.getElementById('minutes').value) || 0;
            const seconds = parseInt(document.getElementById('seconds').value) || 0;
        
            // Convert total time to seconds
            timeLeft = (hours * 3600) + (minutes * 60) + seconds; // Total time in seconds
            if (timeLeft <= 0) return; // Don't start if time is zero
        
            // Display the initial time
            timerDisplay.textContent = formatTime(timeLeft);
        
            // Start the countdown
            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
        
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    alert("Time's up!");
                }
            }, 1000);

        });
        
        window.onload = function() {
            form.addEventListener();
        };
    





