class Ghost {
    getColor = () =>{
        const colors = ["white", "blue", "green", "red", "purple", "orange", "pink", "yellow", "brown", "gray"]
        const colorIndex = Math.floor(Math.random() * colors.length)
        return colors[colorIndex]
    }
}

const ghost = new Ghost()
const colorsContainer = document.getElementById("colorsContainer")
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 1000; i++){
        const randomColor = ghost.getColor()
        const newColor = document.createElement("div")
        newColor.innerHTML = randomColor;
        newColor.style.backgroundColor = randomColor;
        console.log(randomColor + " " + i)
        colorsContainer.appendChild(newColor)
    }
})