// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for all the characters to be put in the password. One for special charcters and one for numbers, upper, and lowercase letters.
specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCase = [
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
upperCase = [
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

var choice;
// Function that starts when the generate button is clicked on.
function generatePassword() {
  input = parseInt(
    prompt(
      "How many characters do you an the password to be? Must be between 8 and 128"
    )
  );
  if (input < 8 || input > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Do you want numbers?");
    confirmCharacter = confirm("Do you want special characters?");
    confirmUppercase = confirm("Do you want uppercase letters?");
    confirmLowercase = confirm("Do you want lowercase letters?");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
