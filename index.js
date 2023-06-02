let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("show-el")

function increment () {
    count++
    countEl.textContent = count
} 
function decrement () {
    count -= 1
    if(count < 0) { alert("Count can't become less than zero!!") , count = 0}
    countEl.textContent = count
} 

function save () {
    let message = count + ' - '
    saveEl.textContent += message
    countEl.textContent = 0
    count = 0
}

