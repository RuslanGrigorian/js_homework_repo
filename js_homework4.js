
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkProbabilityTheory(count) {
    let evennumber = 0
    let oddnumber = 0

    for (let i = 0; i < count; i++) {
        let number = randomInteger(100, 1000);

        if (number % 2 === 0) {
            evennumber++
        } else {
            oddnumber++
        }
    }
    let evenPercentage = evennumber / count * 100
    let oddPercentage = oddnumber / count * 100

    console.log('odd =', oddPercentage.toPrecision(3), '%')
    console.log('even =', evenPercentage.toPrecision(3),'%')
}
checkProbabilityTheory(9);