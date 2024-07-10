
let dy = document.getElementById('dy');
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

let day = document.getElementById('day');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


const timer = () => {

    let dayVal = JSON.parse(dy.value);
    let hourVal = JSON.parse(hr.value);
    let minVal = JSON.parse(mn.value);
    let secVal = JSON.parse(sc.value);

    let dv = dayVal;
    let hv = hourVal;
    let mv = minVal;
    let sv = secVal;

    day.innerHTML = dv;
    hour.innerHTML = hv;
    min.innerHTML = mv;
    sec.innerHTML = sv;

    const run = () => {

        const start = setInterval(() => {

            sv--;
                if(dv <= 0) {
                    hv--;
                    dv = 24;
                    if (hv < 10) {
                        hour.innerHTML = "0" + hv;
                    } else {
                        hour.innerHTML = hv;
                    }
                }
                if (hv <= 0) {
                    dv--;
                    hv = 23;
                    if (dv < 10) {
                        day.innerHTML = "0" + dv;
                    } else {
                        day.innerHTML = dv;
                    }
                }
                if (mv <= 0) {
                    hv--;
                    mv = 59;
                    if (hv < 10) {
                        hour.innerHTML = "0" + hv;
                    } else {
                        hour.innerHTML = hv;
                    }
                }
                if (sv <= 0) {
                    mv--; 
                    sv = 59;
                    if (mv < 10) {
                        min.innerHTML = "0" + mv;
                    } else {
                        min.innerHTML = mv;
                    }
                }
                if (sv < 10) {
                    sec.innerHTML = "0" + sv;
                } else {
                    sec.innerHTML = sv;
                }

        },1000)

    }

    run();

}
