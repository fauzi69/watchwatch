const moment = require('moment');

function updateClock() {
    const now = moment().format('HH:mm:ss');
    document.getElementById('clock').textContent = now;
}

setInterval(updateClock, 1000);
updateClock();
