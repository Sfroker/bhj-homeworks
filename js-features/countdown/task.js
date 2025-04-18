const timerElement = document.getElementById('timer');
let timerLeft = parseInt(timerElement.textContent);
const countdown = setInterval(( ) => {
    timerLeft--;
    timerElement.textContent = timerLeft;

    if (timerLeft <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе');
    }
}, 1000);