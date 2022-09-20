// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rando = Math.random()
  return Math.floor(min*(1 - rando) + rando*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How long do you want the password to be?")

  var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number. Please try again.")
      return
    }

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters")
      return
    }

    var confirmLowercase = window.confirm("Would you like to inlude lowercase letters in the password?")
    var confirmUppercase = window.confirm("Would you like to include uppercase letters in the password?")
    var confirmNumbers = window.confirm("Would you like to include numbers in the password?")
    var confirmSpecial = window.confirm("Would you like to include special characters in the password?")

    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialList = ["!", "@", "#", "$", "%", "^", "&", "*"]

    var optionsList = []

    if (confirmLowercase === true) {
      optionsList.push(lowercaseList)
    }

    if (confirmUppercase === true) {
      optionsList.push(uppercaseList)
    }

    if (confirmNumbers === true) {
      optionsList.push(numberList)
    }

    if (confirmSpecial === true) {
      optionsList.push(specialList)
    }

    if (optionsList.length === 0) {
      optionsList.push(numberList)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) { 
      var randomList = getRandomItem(optionsList)
      var randomChara = getRandomItem(randomList)
      generatedPassword += randomChara
    }

    console.log(generatedPassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
