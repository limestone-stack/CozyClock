"use strict";
const hour24Span = document.querySelector('#hours24');
const hour12Span = document.querySelector('#hours12');
const minuteSpan = document.querySelector('#minutes');
const secondSpan = document.querySelector('#seconds');
const ampm = document.querySelector('#ampm');
const swapClockTimeFormatButton = document.querySelector('#swap-mode-button');
const toggleFullscreenButton = document.querySelector('#toggle-fullscreen-button');
let inactivityTimer;
const hideAbles = document.querySelectorAll('.hideable');
function updateClock() {
    const now = new Date();
    console.log(now);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    hour24Span.textContent = hours;
    hour12Span.textContent = (parseInt(hours) % 12).toString().padStart(2, '0');
    minuteSpan.textContent = minutes;
    secondSpan.textContent = seconds;
    ampm.textContent = hours >= '12' ? 'PM' : 'AM';
    requestAnimationFrame(updateClock);
}
function hideButtons() {
    for (const hideable of Array.from(hideAbles)) {
        hideable.classList.add('hidden');
    }
}
function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(hideButtons, 2000);
    for (const hideable of Array.from(hideAbles)) {
        hideable.classList.remove('hidden');
    }
}
document.addEventListener('mousemove', resetTimer);
document.addEventListener('click', resetTimer);
document.addEventListener('keypress', resetTimer);
swapClockTimeFormatButton.addEventListener('click', () => {
    const is24Hour = hour24Span.style.display !== 'none';
    hour24Span.style.display = is24Hour ? 'none' : 'inline-block';
    hour12Span.style.display = is24Hour ? 'inline-block' : 'none';
    ampm.style.display = is24Hour ? 'inline-block' : 'none';
});
toggleFullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
});
resetTimer();
updateClock();
