
function generateRandomNumbers() {
    return Math.floor(Math.random() * 100) + 1
}

function celciusToFahranheit(celcius) {
    return (celcius * 9) / 5 + 32
}

export { generateRandomNumbers, celciusToFahranheit };