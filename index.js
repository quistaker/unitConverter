/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const convertBtnEl = document.getElementById("convertBtn")
const convertNumList = document.querySelectorAll(".convertNum")

const toFeetEl = document.getElementById("toFeet")
const toMetersEl = document.getElementById("toMeters")
const toGallonsEl = document.getElementById("toGallons")
const toLitersEl = document.getElementById("toLiters")
const toPoundsEl = document.getElementById("toPounds")
const toKilosEl = document.getElementById("toKilos")

convertBtnEl.addEventListener("click", convert) 

function convert() {
    let convert = inputEl.value

    console.log(convert)
    console.log(convertNumList)

    for (const item of convertNumList) {
        item.textContent = convert
    }

    toFeetEl.textContent = (convert * 3.281).toFixed(3)
    toMetersEl.textContent = (convert / 3.281).toFixed(3)
    toGallonsEl.textContent = (convert * 0.264).toFixed(3)
    toLitersEl.textContent = (convert / 0.264).toFixed(3)
    toPoundsEl.textContent = (convert * 2.204).toFixed(3)
    toKilosEl.textContent = (convert / 2.204).toFixed(3)
}