// Assignment Code
const generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  //Array for characters
  const lowerChar = ['a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's','t' , 'u', 'v', 'w' ,'x' ,'y', 'z'];
  const upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialChar = ['!', '$', '%', '#', '&', '_', '-', '(',')', '+', ';', ',','=' ,'?', '@', '^', '*', '<', '>', '/', '[', ']', '{', '}','`', '~'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];

  //created empty array for password
  let storePass = [];
  let passLength = parseInt(prompt("How many characters would you like in your password? (8 to 128 characters)"));//passes an integer instead of string;

  //checks if user inputs password length between 8 and 128
  if (passLength < 8 || passLength > 128) {
    alert("Characters must be betweeen 8 to 128!");
  } 
  else {
    //Confirm prompts for user to confirm whether to include specific characters
    const confirmNumber = confirm("Would you like to include numbers?");
    const confirmSpecial = confirm("Would you like to include special characters?");
    const confirmLowerCase = confirm("Would you like to inlude lowercase characters?");
    const confirmUpperCase = confirm("Would you like to include uppercase characters?");

    //if confirmed any of the following above, then push the array into storePass array
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
      //if the user cancels all of the prompts, then alert will pop 
      else if (confirmNumber !==true && confirmSpecial !==true && confirmLowerCase !== true & confirmUpperCase !==true) {
        alert("You must confirm at least one of the characters to generate a password!");
      }
      
      //empty string that will display generated password
      var newPass= '';

      //loops characters in store array 
      for(let i = 0; i < passLength; i++) {
      //picks an array from confirm prompts
      let randomArray = storePass[Math.floor(Math.random() * storePass.length)];
      let ranChar = randomArray[Math.floor(Math.random() * randomArray.length)];
      newPass += ranChar;
      }

      //verifying code works and password successfully generated
      alert("Password Generated!");
    }
  return newPass;
}
// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
