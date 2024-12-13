// References to elements
const steps = document.querySelectorAll('.step');
const timers = [document.getElementById('timer1'), document.getElementById('timer2'), document.getElementById('timer3')];
const downloadLink = document.getElementById('downloadLink');

let currentStep = 0;
const totalSteps = steps.length;
const stepDuration = 15; // Duration for each step in seconds

function startStep(stepIndex) {
    const stepElement = steps[stepIndex];
    const timerElement = timers[stepIndex];
    const progressCircle = stepElement.querySelector('.progress-circle');

    let timeLeft = stepDuration;
    timerElement.textContent = timeLeft;

    // Update the progress circle and countdown every second
    const interval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        const progressPercent = ((stepDuration - timeLeft) / stepDuration) * 100;
        progressCircle.style.setProperty('--progress', `${progressPercent}%`);

        if (timeLeft <= 0) {
            clearInterval(interval);
            showNextStep(stepIndex);
        }
    }, 1000);
}

function showNextStep(stepIndex) {
    if (stepIndex < totalSteps - 1) {
        // Hide the current step and show the next
        steps[stepIndex].classList.add('hidden');
        steps[stepIndex + 1].classList.remove('hidden');
        startStep(stepIndex + 1);
    } else {
        // All steps completed, show the download link
        steps[stepIndex].classList.add('hidden');
        downloadLink.classList.remove('hidden');
    }
}

// Start the process with Step 1
startStep(currentStep);