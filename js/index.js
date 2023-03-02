let totalReps = document.getElementById("total-reps")

let finalReps = 0


function oneLess() {
    finalReps -= 1
    totalReps.textContent = finalReps
    if (finalReps <= 0) {
        reset()
    }
}


function oneMore() {
    finalReps += 1
    totalReps.textContent = finalReps
}

function fiveLess() {
    finalReps -= 5
    totalReps.textContent = finalReps
    if (finalReps <= 0) {
        reset()
    }
}

function fiveMore() {
    finalReps += 5
    totalReps.textContent = finalReps
}

function tenLess() {
    finalReps -= 10
    totalReps.textContent = finalReps
    if (finalReps <= 0) {
        reset()
    }
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
let selectorCircleEl = document.querySelector(".WOD__selector-circle")

function showRxWod() {
    catRxEl.style.color = "white"
    catScaledEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "black"
    selectorCircleEl.style.transform="translateX(0px)";
    selectorCircleEl.style.width="60px";
    rxDescriptionEl.style.transform = "translatex(0%)"
    scaledDescriptionEl.style.transform = "translatex(0%)"

}

function showScaledWod(){
    catRxEl.style.color = "black"
    catRxEl.style.transitionDuration = "250ms"
    catScaledEl.style.color = "white"
    selectorCircleEl.style.transform="translateX(105px)";
    selectorCircleEl.style.width="100px";
    rxDescriptionEl.style.transform = "translatex(-100%)"
    scaledDescriptionEl.style.transform = "translatex(-100%)"
}

