'use strict';

class Clock {
    constructor(clockElement) {
        this.elem = clockElement.elem;
    }

    _render() {
        let date = new Date();

        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        h = h < 10 ? h = '0' + h : h;
        m = m < 10 ? m = '0' + m : m;
        s = s < 10 ? s = '0' + s : s;

        document.querySelector('.hour').innerHTML = h;
        document.querySelector('.min').innerHTML = m;
        document.querySelector('.sec').innerHTML = s;
    }

    _stop() {
        clearInterval(this.timer);
    }

    _start() {
        this._render();
        this.timer = setInterval(this._render, 1000);
    }
}

let pageClock = new Clock({
    elem: document.getElementById('clock')
  });