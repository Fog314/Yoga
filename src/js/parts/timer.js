let deadline = '2020-05-25';

function getTimeRemaining(endtime) {
    let t = Date.parse(deadline) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / 1000 / 60 / 60 % 24);
    let days = Math.floor(t / 1000 / 60 / 60 / 24);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
};

function setClock(id, endtime) {
    let timer = document.querySelector('#id'),
        days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 0.1);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        if (days.textContent < 10) {
            days.textContent = "0" + t.days + " :";
        } else days.textContent = t.days + " :";

        if (hours.textContent < 10) {
            hours.textContent = "0" + t.hours;
        } else hours.textContent = t.hours;

        if (minutes.textContent < 10) {
            minutes.textContent = "0" + t.minutes;
        } else minutes.textContent = t.minutes;

        if (seconds.textContent < 10) {
            seconds.textContent = "0" + t.seconds;
        } else seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};


setClock('timer', deadline);