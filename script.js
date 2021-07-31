// Assignment Code
var generateBtn = document.querySelector("#generate");
//Global Varibales- 
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "~!@#$%^&*()_+=";
var masterString = ""    // masterString is used to mix and match upper,lower,num and special. Use += to mix char. 
var password = ""
var length = 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to create random password
function generatePassword () {
  var password = "" ; 
  //User selects length of password
  var passLength = prompt ("Please select the length of your password; it must be between 8 and 128 characters ");
  var length = passLength 
  if (passLength <8 || passLength >128){
    //conditional - user must choose between 8 and 128 characters
    alert("Please choose a length between 8 and 128 characters");
    return generatePassword ()
  }
  //confirm uppercase characters 
  var hasUpChar = confirm("Would you like to include UPPPERCASE characters?");
  var hasLowcChar = confirm ("Would you like to include lowercase characters?");
  var hasNumChar = confirm ("Would you like to include numbers?");
  var hasSpecial = confirm ("Would you like to include special characters?");

  //alert if the user does nto select characters
  if(!hasUpChar&&!hasLowcChar&&!hasNumChar&&!hasSpecial) {
    alert("You must choose include at least 1 character type.");
    return generatePassword()
  }
  if(hasUpper){
    password += upperChar
  }
  if (hasLowcChar) {
    password += lowerChar
  }


}