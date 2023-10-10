let expression = prompt("Introduce an aritmetic expression: ")

try {
    let result = eval(expression)
    document.write("Result:", result)
} catch (error) {
    alert("Invalid expression.")
}
