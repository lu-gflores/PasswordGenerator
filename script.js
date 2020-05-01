// Assignment Code
var generateBtn = document.querySelector("#generate");

//characters object
// var passCharacters = {
//   lowerChar: 'abcdefghijklmnopqrstuvwxz',
//   upperChar: 'ABCDEFGHIJKLMNOPQURSTUVXYZ',
//   specialChar:'!@#$%^&*()_+{};:/',
//   numbers : '1234567890'
//   }
function generatePassword() {
  //Array for characters
  var lowerChar = ['a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's','t' , 'u', 'v', 'w' ,'x' ,'y', 'z'];
  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialChar = ['!', '$', '%', '#', '&', '_', '-', '(',')', '+', ';', ',','=' ,'?', '@', '^'];
  var numbers = ['1','2','3','4','5','6','7','8','9','0'];
  //created empty array for password
  var storePass = [];
  
  var newPass ='';
  var passLength = parseInt(prompt("How many characters would you like in your password? (8 to 128 characters)"));

  //checks if user inputs password length between 8 and 128
  if (passLength < 8 || passLength > 128) {
    alert("Characters must be betweeen 8 to 128!");
  } 
  else {
    var confirmNumber = confirm("Would you like to include numbers?");
    var confirmSpecial = confirm("Would you like to include special characters?");
    var confirmLowerCase = confirm("Would you like to inlude lowercase characters?");
    var confirmUpperCase = confirm("Would you like to include uppercase characters?");

    //confirms whether the user confirms the following prompts and will push the arrays to storePass accordingly
    if (confirmNumber === true) {
      storePass.push(numbers);
    } 
    if (confirmSpecial === true) {
      storePass.push(specialChar);
    }
    if (confirmLowerCase === true) {
      storePass.push(lowerChar);
    }
    if (confirmUpperCase === true) {
      storePass.push(upperChar);
    }
      //loops characters in store 
      for(var i = 0; i < passLength; i++) {
      newPass =+ storePass[Math.floor(Math.random() * storePass.length)];
      
      }
    }
  return newPass;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);