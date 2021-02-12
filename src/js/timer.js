class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.root = document.querySelector(this.selector);
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]'),
        };
        this.intervalId = null;
    }
    start() {
        const startTime = this.targetDate.getTime();
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            if (deltaTime <= 0) {
                clearInterval(this.intervalId);
            }
            this.updateClock(deltaTime);
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.root.textContent = '';
    }
    updateClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.clockValue(days, hours, mins, secs);
    }
    clockValue(days, hours, mins, secs) {
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
}
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});
timer.start();