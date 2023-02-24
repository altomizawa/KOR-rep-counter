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
console.log(rxDescriptionEl)

function showRxWod() {
    rxDescriptionEl.style.opacity = "1"
    rxDescriptionEl.style.transitionDuration = "250ms"
    catRxEl.style.color = "white"
    catScaledEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "black"
    catScaledEl.style.setProperty("--scaled-button-color", "hsl(16, 100%, 100%)");
    catRxEl.style.transitionDuration = "250ms"
    catRxEl.style.setProperty("--rx-button-color", "hsl(16, 100%, 50%)");
}

function showScaledWod(){
    rxDescriptionEl.style.opacity = "0";
    catRxEl.style.color = "black"
    catRxEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "white"
    catScaledEl.style.setProperty("--scaled-button-color", "hsl(16, 100%, 50%)");
    catRxEl.style.setProperty("--rx-button-color", "hsl(16, 100%, 100%)");

}
