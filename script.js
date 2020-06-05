  
console.log("This is my script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("I'm about to generate a pass word.");

  var pwdLength = prompt("Choose a number from 8 to 128.  We recomend 128, but play around with different combos.")
  var charTypes = [];
  console.log(pwdLength);
  var lowCase = confirm("Would you like lowercased characters?");
  if(lowCase) {
    charTypes.push(0);
  }
  var upCase = confirm("Would you like Uppercased characters?");
  if(upCase) {
    charTypes.push(1);
  }
  var nums = confirm("How about numbers?");
  if(nums) {
    charTypes.push(2);
  }
  var specChars = confirm("And Spec!ci@l Ch@racter$?");
  if(specChars) {
    charTypes.push(3);
  }

  console.log(charTypes);
  var randomCharType = charTypes[Math.floor(Math.random() * charTypes.length)];
  console.log(randomCharType);

  // if(randomCharType === 0) {
    console.log("Random lowercased character.");
    var randomCharCode = (Math.floor(Math.random() * 25) + 97);
    var asciiCode = String.fromCharCode(randomCharCode);
    console.log(asciiCode);

    console.log("Random uppercased character.");
    var randomCharCode = (Math.floor(Math.random() * 25) + 65);
    var asciiCode = String.fromCharCode(randomCharCode);
    console.log(asciiCode);

    console.log("Random number.");
    var randomNum = (Math.floor(Math.random() * 9) + 1);
    console.log(randomNum);

    console.log("Random special character.");
    var randomCharCode = (Math.floor(Math.random() * 14) + 33);
    var asciiCode = String.fromCharCode(randomCharCode);
    console.log(asciiCode);

 
}



// Write password to the #password input
function writePassword() {
    console.log("You clicked my button!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
