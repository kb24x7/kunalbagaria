function kick() {
    document.getElementById('kick-sound').currentTime = 0
     document.getElementById('kick-sound').play()
     document.getElementById('kick').style.background = "#3E66FB"
}

function snare() {
    document.getElementById('snare-sound').currentTime = 0
    document.getElementById('snare-sound').play()
    document.getElementById('snare').style.background = "#3E66FB"
}

function clap() {
    document.getElementById('clap-sound').currentTime = 0
    document.getElementById('clap-sound').play()
    document.getElementById('clap').style.background = "#3E66FB"
}

function hihat() {
    document.getElementById('hihat-sound').currentTime = 0
    document.getElementById('hihat-sound').play()
    document.getElementById('hihat').style.background = "#3E66FB"
}
function eight() {
    document.getElementById('eight-sound').currentTime = 0
    document.getElementById('eight-sound').play()
    document.getElementById('808').style.background = "#3E66FB"
}
function hihat2() {
    document.getElementById('hihat2-sound').currentTime = 0
    document.getElementById('hihat2-sound').play()
    document.getElementById('hihat2').style.background = "#3E66FB"
}
function perc1() {
    document.getElementById('perc1-sound').currentTime = 0
    document.getElementById('perc1-sound').play()
    document.getElementById('perc1').style.background = "#3E66FB"
}
function perc2() {
    document.getElementById('perc2-sound').currentTime = 0
    document.getElementById('perc2-sound').play()
    document.getElementById('perc2').style.background = "#3E66FB"
}

let bodyEl = document.querySelector('body')
bodyEl.onkeydown = play
bodyEl.onkeyup = stopPlay

function stopPlay(eve) {
    let eveCode = eve.code
    if (eveCode == "KeyQ") {
        document.getElementById('kick').style.background = ""
    } 
    else if (eveCode == "KeyW") {
        document.getElementById('snare').style.background = ""
    } else if (eveCode == "KeyE") {
        document.getElementById('clap').style.background = ""
    } else if (eveCode == "KeyR") {
        document.getElementById('hihat').style.background = ""
    } else if (eveCode == "KeyA") {
        document.getElementById('808').style.background = ""
    } else if (eveCode == "KeyF") {
        document.getElementById('hihat2').style.background = ""
    } else if (eveCode == "KeyS") {
        document.getElementById('perc1').style.background = ""
    } else if (eveCode == "KeyD") {
        document.getElementById('perc2').style.background = ""
    }
}
function play(eve) {
    let eveCode = eve.code
    console.log(eveCode)
    if (eveCode == "KeyQ") {
        kick()
    } else if (eveCode == "KeyW") {
        snare()
    } else if (eveCode == "KeyE") {
        clap()
    } else if (eveCode == "KeyR") {
        hihat()
    } else if (eveCode == "KeyA") {
        eight()
    } else if (eveCode == "KeyF") {
        hihat2()
    } else if (eveCode == "KeyS") {
        perc1()
    } else if (eveCode == "KeyD") {
        perc2()
    }
}
