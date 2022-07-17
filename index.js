var c = 0;
var s = 0;
var m = 0;
var interId = 0;
var clicked=false;
var lap;
var n =0;
var times = document.getElementById("time")
var laps = document.getElementById("lap")
var mins = document.getElementById("min");
var secs = document.getElementById("sec");
var misc = document.getElementById("ms");
function start() {
    if (misc.innerHTML == "00") {
        // clicked=false;
        interId = setInterval(() => {
            c = c + 1;
            misc.innerHTML = c;
            if (c == 99) {
                c = 0;
                s = s + 1;
                secs.innerHTML = s;
                if (s == 59) {
                    s = 0;
                    m = m + 1;
                    mins.innerHTML = m;
                }
            }
        }, 10);
    }

}
function stop() {
    
    clicked = true;
    if (clicked === true) {
        lap = time.innerHTML;
        laps.innerHTML = `Last record : ${lap}`;
        clearInterval(interId);
    }
    var mins = document.getElementById("min");
    var secs = document.getElementById("sec");
    var misc = document.getElementById("ms");
    s = 0;
    c = 0;
    m = 0;
    mins.innerHTML = "00";
    secs.innerHTML = "00";
    misc.innerHTML = "00";
    document.getElementById("laps").style.visibility="visible";


}