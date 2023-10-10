class CesarCipher {
  constructor(displacementNumber = 1) {
    this.displacementNumber = displacementNumber
  }

  encode(text = "Hello, World") {
    let result = ''
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase()
      if (char >= 'A' && char <= 'Z') {
        const displacedCharCode = ((char.charCodeAt(0) - 65 + this.displacementNumber) % 26) + 65
        result += String.fromCharCode(displacedCharCode)
      } else {
        result += char
      }
    }
    return result
  }

  decode(text = "fcjjm, umpjb") {
    let result = ''
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase()
      if (char >= 'A' && char <= 'Z') {
        const displacedCharCode = ((char.charCodeAt(0) - 65 - this.displacementNumber + 26) % 26) + 65
        result += String.fromCharCode(displacedCharCode)
      } else {
        result += char
      }
    }
    return result
  }
}

// Ejemplo de uso:
const cipher = new CesarCipher(24)
const encodedText = cipher.encode("Welcome to Caesar Chipher!")
console.log(encodedText)

const decodedText = cipher.decode(encodedText)
console.log(decodedText)
