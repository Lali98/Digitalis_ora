
setInterval(() => {
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerHTML = String((h < 10) ? '0' + h : h);
    minutes.innerHTML = String((m < 10) ? '0' + m : m);
    seconds.innerHTML = String((s < 10) ? '0' + s : s);

    if(h > 12) {
        h -= 12;
    }

    hh.style.strokeDashoffset = String(510 - (510 * h) / 12);
    mm.style.strokeDashoffset = String(630 - (630 * m) / 60);
    ss.style.strokeDashoffset = String(760 - (760 * s) / 60);

    sec_dot.style.transform = `rotateZ(${s * (360 / 60)}deg)`;
    min_dot.style.transform = `rotateZ(${m * (360 / 60)}deg)`;
    hr_dot.style.transform = `rotateZ(${h * (360 / 12)}deg)`;
});
