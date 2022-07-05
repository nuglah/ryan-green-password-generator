// Assignment Code
// selects the generate button
var generateBtn = document.querySelector("#generate");

// Arrays for all the characters to be put in the password. One for special charcters and one for numbers, upper, and lowercase letters.
special = [
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
letters = [
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
upperLetters = [
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

// Function that starts when the generate button is clicked on.
function generatePassword() {
  input = parseInt(
    prompt(
      "How many characters do you want your password to be. Must be a number between 8 and 128 characters."
    )
  );
  // First if statement containg confirms that will decide what characters are in password.
  if (input < 8 || input > 128) {
    input = parseInt(
      alert("The password must be between 8 and 128 characters.")
    );
    generatePassword();
  } else if (!input) {
    alert("You must enter a number.");
    generatePassword();
  } else {
    confirmSpecial = confirm("Do you want special characters?");
    confirmNumbers = confirm("Do you want numbers?");
    confirmLowercase = confirm("Do you want lowercase letters?");
    confirmUppercase = confirm("Do you want uppercase letters?");
  }
  // If statements for the different combinations of decisions made in the confirms.
  // First if is if all confirms are true
  if (
    confirmSpecial &&
    confirmNumbers &&
    confirmUppercase &&
    confirmLowercase
  ) {
    decision = special.concat(numbers, letters, upperLetters);
  } else if (confirmSpecial && confirmNumbers && confirmUppercase) {
    decision = special.concat(numbers, upperLetters);
  } else if (confirmSpecial && confirmNumbers && confirmLowercase) {
    decision = special.concat(numbers, letters);
  } else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    decision = special.concat(letters, upperLetters);
  } else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    decision = numbers.concat(letters, upperLetters);
  } else if (confirmSpecial && confirmNumbers) {
    decision = special.concat(numbers);
  } else if (confirmSpecial && confirmLowercase) {
    decision = special.concat(letters);
  } else if (confirmSpecial && confirmUppercase) {
    decision = special.concat(upperLetters);
  } else if (confirmLowercase && confirmNumbers) {
    decision = letters.concat(numbers);
  } else if (confirmLowercase && confirmUppercase) {
    decision = letters.concat(upperLetters);
  } else if (confirmNumbers && confirmUppercase) {
    decision = numbers.concat(upperLetters);
  } else if (confirmSpecial) {
    decision = special;
  } else if (confirmNumbers) {
    decision = numbers;
  } else if (confirmLowercase) {
    decision = letters;
  } else if (confirmUppercase) {
    decision = upperLetters;
  }
  // if all confirms are false
  else if (
    !confirmSpecial &&
    !confirmNumbers &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    decision = alert("Please choose at least one parameter.");
  }
  // makes password an array so it can hold all the characters
  var password = [];

  // for loop that randomizes the array from the decisions made in the confirms
  for (var i = 0; i < input; i++) {
    var randomChoice = decision[Math.floor(Math.random() * decision.length)];
    password.push(randomChoice);
  }
  // .join makes the password variable a string so it can be displayed in the text box
  var ps = password.join("");
  // returns this string to the writePassword function.
  return ps;
}

// Starts the generate password function and takes returned value and puts it in #password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Starts the write password function when genarate button is lciked on.
generateBtn.addEventListener("click", writePassword);
