// Assignment Code
var generateBtn = document.querySelector("#generate");
//Global Varibales- 
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "~!@#$%^&*()_+=";
var masterString = ""    // masterString is used to mix and match upper,lower,num and special. Use += to mix char. 
var pickedPassword = ""
var length = 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#password").textContent= pickedPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword (),);

//function to create random password
