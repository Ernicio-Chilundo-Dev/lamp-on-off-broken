const lamp = document.getElementById("lamp")
const turnOnOff = document.getElementById("turnOnOff")

function isLampBroken() {
    return lamp.src.indexOf('Quebrada') > -1
}

function lampOn() {
    if (!isLampBroken) {
        lamp.src = "./img/ligada.jpg"
    }
}

function lampOff() {
    if (!isLampBroken) {
        lamp.src = "./img/desligada.jpg"
    }
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg"
}

function lampOnOf() {
    if (turnOnOff.textContent == "Ligar") {
        lampOn()
        turnOnOff.textContent == "Desligar"
    } else {
        lampOff()
        turnOnOff.textContent = "Ligar"
    }
}

turnOnOff.addEventListener("click", lampOnOf)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)