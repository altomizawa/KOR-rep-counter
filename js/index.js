let totalReps = document.getElementById("total-reps")

let finalReps = 0

function oneLess() {
    finalReps -= 1
    totalReps.textContent = finalReps
}

function oneMore() {
    finalReps += 1
    totalReps.textContent = finalReps
}

function fiveLess() {
    finalReps -= 5
    totalReps.textContent = finalReps
}

function fiveMore() {
    finalReps += 5
    totalReps.textContent = finalReps
}

function tenLess() {
    finalReps -= 10
    totalReps.textContent = finalReps
}

function tenMore() {
    finalReps += 10
    totalReps.textContent = finalReps
}

function reset() {
    finalReps = 0
    totalReps.textContent = finalReps
}

let catRxEl = document.getElementById("cat-rx-el")
let catScaledEl = document.getElementById("cat-scaled-el")
let rxDescriptionEl = document.getElementById("rx-description-el")
let scaledDescriptionEl = document.getElementById("scaled-description-el")
let wodWrapperEl = document.getElementById("wod-wrapper-el")
function showRxWod() {
    catRxEl.style.color = "white"
    catScaledEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "black"
    catScaledEl.style.setProperty("--scaled-button-color", "hsl(16, 100%, 100%)");
    catRxEl.style.transitionDuration = "250ms"
    catRxEl.style.setProperty("--rx-button-color", "hsl(16, 100%, 50%)");
    rxDescriptionEl.style.transform = "translatex(0%)"
    scaledDescriptionEl.style.transform = "translatex(0%)"

}

function showScaledWod(){
    catRxEl.style.color = "black"
    catRxEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "white"
    catScaledEl.style.setProperty("--scaled-button-color", "hsl(16, 100%, 50%)");
    catRxEl.style.setProperty("--rx-button-color", "hsl(16, 100%, 100%)");
    rxDescriptionEl.style.transform = "translatex(-100%)"
    scaledDescriptionEl.style.transform = "translatex(-100%)"

}


