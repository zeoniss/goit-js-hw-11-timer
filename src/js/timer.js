const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};
refs.days.textContent = '**';
refs.hours.textContent = '**';
refs.mins.textContent = '**';
refs.seconds.textContent = '**';

class CountdownTimer {
    constructor(selector, targetDate) {
            this.selector = selector;
            this.targetDate = targetDate;
        }
        //=========================
    countdown() {
            const timerId = setInterval(() => {
                const currentTime = Date.now();
                const targetTime = this.targetDate.getTime();
                const deltaTime = targetTime - currentTime;
                if (deltaTime <= 0) {
                    clearInterval(timerId);
                }

                this.updateClockFace(deltaTime);
            }, 1000);
        }
        //=========================
    pad(value) {
            return String(value).padStart(2, '0');
        }
        //=========================

    updateClockFace(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.seconds.textContent = `${secs}`;

        if (days <= 0) {
            refs.days.textContent = '00';
        }
        if (hours <= 0) {
            refs.hours.textContent = '00';
        }
        if (mins <= 0) {
            refs.mins.textContent = '00';
        }
        if (secs <= 0) {
            refs.seconds.textContent = '00';
        }
    }
}

const timerOne = new CountdownTimer(
    2,
    new Date('Feb 08 2021 16:33:00'),
).countdown();