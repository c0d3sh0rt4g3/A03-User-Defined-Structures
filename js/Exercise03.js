const numbersMatrix = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]
const matrixToArray = (matrix) => {
    const matrixNumbersInASingleArray = []

    for (let i = 0; i < numbersMatrix.length; i++){
        for (let j = 0; j < numbersMatrix[i].length; j++){
            matrixNumbersInASingleArray.push(numbersMatrix[i][j])
        }
    }
    return matrixNumbersInASingleArray
}

const numberArray = matrixToArray(numbersMatrix)
