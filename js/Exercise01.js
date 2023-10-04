let timesToRepeat = prompt("Give me a number:")
const wordToRepeat = "bauuuba "

if (!isNaN(timesToRepeat)){
    timesToRepeat = parseInt(timesToRepeat)
    const wordRepeated = wordToRepeat.repeat(timesToRepeat)
    document.write(wordRepeated)
}else {
    alert("The data introduced it's not a number.")
}