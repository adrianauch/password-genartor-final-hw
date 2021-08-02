// Assignment Code
var generateBtn = document.querySelector("#generate");
//Global Varibales- 
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "~!@#$%^&*()_+=";
var masterString = ""    // masterString is used to mix and match upper,lower,num and special. Use += to mix char. 
var pickedPassword = ""
var length = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = pickedPassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#password").textContent= pickedPassword
  console.log(writePassword)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to create random password
function generatePassword () {
  var pickedPassword = "" ; 
  pickedPassword = password;
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
  //gererate password based on what the user picked. 
  if(hasUpChar && hasLowcChar && hasNumChar && specialChar){
  masterString += upperChar + num + lowerChar + specialChar;
  }
  else if (hasLowcChar && hasUpChar && hasNumChar) {
    masterString += lowerChar +upperChar + num;
  }
  else if(hasLowcChar && hasUpChar) {
    masterString += upperChar + lowerChar;
  }
  else if (hasLowcChar) {
    masterString += lowerChar;
  }
  else if (hasUpChar && hasNumChar && hasSpecial) {
    masterString += upperChar + num + specialChar;
  }
  else if (hasUpChar && hasSpecial) {
    masterString += upperChar + specialChar;
  }
  else if (hasUpChar && hasNumChar) {
    masterString += upperChar + num;
  }
  else if (hasUpChar) {
    masterString += upperChar;
  }
  else if (hasNumChar && hasSpecial) {
    masterString += num + specialChar;
  }
  else if (hasNumChar) {
    masterString += num;
  }
  else (hasSpecial) 
    masterString += specialChar;
  }


  //for loop to generate a random password at a certain length
  for (var i = 0; i< length; i++) {
    var random = Math.floor(Math.random()*masterString.length);
    pickedPassword += masterString.charAt(random);
  }


function writePassword () {
  var pickedPassword = "";
  pickedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pickedPassword;


}
  
