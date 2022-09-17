// Assignment Code
var generateBtn = document.querySelector("#generate");


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

    var userWantLowercase = window.confirm("Would you like to inlude lowercase letters in the password?");
    var userWantUppercase = window.confirm("Would you like to include uppercase letters in the password?");
    var userWantNumbers = window.confirm("Would you like to include numbers in the password?");
    var userWantSpecial = window.confirm("Would you like to include special characters in the password?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
