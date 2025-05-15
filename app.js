let jsHr = 0;
let jsMin = 0;
let jsSec = 0;
let jsMsec = 0;
let lapNumber = 0

let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let msec = document.getElementById("msec")


let lapList = document.getElementById("lapList")

document.getElementById("pause").disabled = true
document.getElementById("reset").disabled = true
document.getElementById("lap").disabled = true

let interval;

function start() {
    interval = setInterval(function () {
        jsMsec++;
        msec.innerHTML = jsMsec;

        if (jsMsec >= 99) {
            // console.log("jsMsec");
            jsSec++;
            sec.innerHTML = jsSec;
            jsMsec = 0;

        } else if (jsSec >= 59) {
            // console.log("jsSec");

            jsMin++;
            min.innerHTML = jsMin;
            jsSec = 0;

        } else if (jsMin >= 59) {
            // console.log("jsMin");
            jsHr++;
            hr.innerHTML = jsHr;
            jsMin = 0;
        }
        // let jsSec = hr

        if (jsMsec < 10) {
            msec.innerHTML = "0" + jsMsec;
        }
        if (jsSec < 10) {
            sec.innerHTML = "0" + jsSec;
        }
        if (jsMin < 10) {
            min.innerHTML = "0" + jsMin;
        }
        if (jsHr < 10) {
            hr.innerHTML = "0" + jsHr;
        }


        document.getElementById("start").disabled = true
        document.getElementById("pause").disabled = false
        document.getElementById("reset").disabled = false
        document.getElementById("lap").disabled = false
    }, 10);

}

function zero(value) {
    return value < 10 ? "0" + value : value;
}
function lap() {
    lapNumber++
    let laps = JSON.parse(localStorage.getItem("laps")) || [];


    laps.push(`Lap ${lapNumber} ${zero(jsHr)} Hr ${zero(jsMin)} Min ${zero(jsSec)} Sec ${zero(jsMsec)} Msec`);
    // laps.push()

    localStorage.setItem("laps", JSON.stringify(laps));

    lapList.innerHTML = "";

    for (let i = 0; i < laps.length; i++) {
        lapList.innerHTML += `<p>${laps[i]}</p>`;
    }





}

function pause() {
    clearInterval(interval);
    document.getElementById("start").disabled = false
    document.getElementById("pause").disabled = true
    document.getElementById("lap").disabled = true
}
function reset() {
    clearInterval(interval);
    jsMsec = 0;
    jsSec = 0;
    jsMin = 0;
    jsHr = 0;
    lapNumber = 0;
    msec.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true
    document.getElementById("reset").disabled = true
    document.getElementById("lap").disabled = true
    window.localStorage.clear("laps")
    lapList.innerHTML = ""

}