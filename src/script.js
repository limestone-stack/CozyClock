"use strict";
const hourSpan = document.querySelector('.hours');
const minuteSpan = document.querySelector('.minutes');
const secondSpan = document.querySelector('.seconds');
function updateClock() {
    const now = new Date();
    console.log(now);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    hourSpan.textContent = hours;
    minuteSpan.textContent = minutes;
    secondSpan.textContent = seconds;
    requestAnimationFrame(updateClock);
}
updateClock();
