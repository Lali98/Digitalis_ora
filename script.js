
setInterval(() => {
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hh.style.strokeDashoffset = String(510 - (510 * h) / 12);
    mm.style.strokeDashoffset = String(630 - (630 * m) / 60);
    ss.style.strokeDashoffset = String(760 - (760 * s) / 60);
});
