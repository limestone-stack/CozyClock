const hour24Span = document.querySelector('#hours24') as HTMLSpanElement;
const hour12Span = document.querySelector('#hours12') as HTMLSpanElement;
const minuteSpan = document.querySelector('#minutes') as HTMLSpanElement;
const secondSpan = document.querySelector('#seconds') as HTMLSpanElement;
const ampm = document.querySelector('#ampm') as HTMLSpanElement;


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


const swapClockTimeFormatButton = document.querySelector('#swap-mode-button') as HTMLButtonElement;
swapClockTimeFormatButton.addEventListener('click', () => {
    const is24Hour = hour24Span.style.display !== 'none';
    hour24Span.style.display = is24Hour ? 'none' : 'inline-block';
    hour12Span.style.display = is24Hour ? 'inline-block' : 'none';
    ampm.style.display = is24Hour ? 'inline-block' : 'none';
});

updateClock();