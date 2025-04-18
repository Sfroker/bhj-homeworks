const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let count = 0;
let big = false;

cookie.onclick = function () {
    count++;
    counter.textContent = count;

    if (big) {
        cookie.style.width = '200px';
        cookie.style.height = 'auto';
    } else {
        cookie.style.width = '230px';
        cookie.style.height = 'auto';
    }

    big = !big;
};
