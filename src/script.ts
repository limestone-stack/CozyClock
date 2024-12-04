const hourSpan = document.querySelector('.hours') as HTMLSpanElement;
const minuteSpan = document.querySelector('.minutes') as HTMLSpanElement;
const secondSpan = document.querySelector('.seconds') as HTMLSpanElement;

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