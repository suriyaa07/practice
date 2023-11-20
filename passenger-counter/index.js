
let countEl = document.getElementById("c-el")


let count = 0;
function increment()
{
    count +=1;
    countEl.textContent = count
}

let recordEl = document.getElementById("record-el")
function save()
{
    let countStr =count + " - "
    recordEl.textContent += countStr
    countEl.textContent = 0
    count  = 0
}

