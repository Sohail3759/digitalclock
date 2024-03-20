setInterval(() => {

    let th = document.querySelector('.time-hour')
    let tm = document.querySelector('.time-minute')
    let ts = document.querySelector('.time-second')
    let ampm = document.querySelector('.ampm')

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    

    if (h > 12) {
        h = h - 12;
    }

    let ap = (h >= 12) ? 'am' : 'pm'

    ampm.innerHTML = ap
    th.innerHTML = h
    tm.innerHTML = m
    ts.innerHTML = s
});