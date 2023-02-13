// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseCharacter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseCharacter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
var characterCriteria = [""];
// Write password to the #password input

function generatePassword() {
  var passwordLength = parseInt(prompt(
    "Please enter number of characters from 8 to 128"
  ));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter number between 8 and 128 ");
    return
  }
  
  var includeUppercase = confirm("Do you want Capital Letters in your password?");
  var includeLowercasecharacter = confirm("Do you want lower case letters in your password?");
  var includeNumbercharacter = confirm("Do you want numbers in your password?");
  var includeSpecialcharacter = confirm("Do you want special characters in your password?");
  if (!includeUppercase && !includeLowercasecharacter && !includeNumbercharacter && !includeSpecialcharacter){
    alert("Invalid entry please select following criteria to generate your password")
  }
  return "hello";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
