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
