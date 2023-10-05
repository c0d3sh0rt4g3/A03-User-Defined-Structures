const numbersMatrix = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]
const matrixToArray = (matrix) => {
    const matrixNumbersInASingleArray = []

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            matrixNumbersInASingleArray.push(matrix[i][j])
        }
    }
    return matrixNumbersInASingleArray
}
const sortNumberArray = (arrayGiven) =>{
    for (let i = 0; i < arrayGiven.length - 1; i++) {
    for (let j = 0; j < arrayGiven.length - i - 1; j++) {
      if (arrayGiven[j] > arrayGiven[j + 1]) {
        const temp = arrayGiven[j];
        arrayGiven[j] = arrayGiven[j + 1];
        arrayGiven[j + 1] = temp;
      }
    }
  }
    return numberArray
}
const numberArray = matrixToArray(numbersMatrix)
const orderedArray = sortNumberArray(numberArray)
alert(orderedArray)