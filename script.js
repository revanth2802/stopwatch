let startbtn = document.getElementById("start-button");
let stopbtn = document.getElementById("stop-button");
let resetbtn = document.getElementById("reset-button");
let secondsbtn = document.getElementById("seconds");
let tensbtn = document.getElementById("tens");
let minutesbtn = document.getElementById("minutes");
let ten = 0
let second = 0
let minute = 0
let intervel;

function process() {
    ten++
    if (ten <= 9) {
        tensbtn.innerHTML = "0" + ten
    }
    if (ten > 9) {
        tensbtn.innerHTML = ten
    }
    if (ten > 99) {
        ten = 0
        second++
        tensbtn.innerHTML = ten
        if (second <= 9) {
            secondsbtn.innerHTML = "0" + second
        }
        if (second > 9) {
            secondsbtn.innerHTML = second
        }

        if (second > 59) {
            second = 0
            ten = 0
            minute++
            minutesbtn.innerHTML = minute
        }

    }


}

function starttimer() {
    intervel = setInterval(process, 10)
}

function stoptimer() {
    clearInterval(intervel)

}

function resettimer() {
    clearInterval(intervel)
    ten = "00"
    second = "00"
    minute = "00"
    tensbtn.innerHTML = ten
    secondsbtn.innerHTML = second
    minutesbtn.innerHTML = minute

}
startbtn.addEventListener('click', starttimer)
resetbtn.addEventListener('click', resettimer)
stopbtn.addEventListener('click', stoptimer)