
let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("score-el") 
let guestEl = document.getElementById("score-el2") 

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function addOneHome(){
    homeScore += 1
    homeEl.textContent = homeScore
}
function addTwoHome(){
    homeScore += 2
    homeEl.textContent = homeScore
}
function addThreeHome(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function addTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function addThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function reset(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    
}