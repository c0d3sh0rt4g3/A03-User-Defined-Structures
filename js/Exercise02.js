const results = {}
const diceRolls = 36000
const diceRolling = () =>{
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    return dice1 + dice2
}

for (let i = 0; i < diceRolls; i++) {
    const dicesSum = diceRolling()
    if (results[dicesSum]) {
    results[dicesSum]++
    } else {
    results[dicesSum] = 1
    }
}

for (let result in results) {
    document.write(`The result ${result}: has appeared ${results[result]} times <br>`)
}
