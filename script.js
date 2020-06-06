console.log("This is my script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // Hint from Jonathan
  console.log("You clicked my button!");

  // Set password variable equal to whatever the generatePassword function generates
  var password = generatePassword();

  // Manipulate the DOM to display generated password in textarea id="password" instead of placeholder
  var passwordText = document.querySelector("#password");

  //  Set the value of the passwordText to be sent to DOM equal to password variable.
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  console.log("I'm about to generate a pass word.");

  // Create variable to store input from user for pwd length
  var pwdLength = prompt(
    "Choose a number from 8 to 128.  We recomend 128, but play around with different combos."
  );

  // Create variable to store desired character types to include in password generated
  var charTypes = [];

  // Log it
  console.log(pwdLength);

  // Variables to select and store a character type (True or False) to randomly choose from later
  var lowCase = confirm(
    "Would you like lowercased characters? Press OK to Include and Cancel if not."
  );

  // If lowCase = true (OK) append charTypes; lowCase = false do nothing
  if (lowCase) {
    charTypes.push(0);
  }

  var upCase = confirm(
    "Would you like Uppercased characters?  Press OK to Include and Cancel if not."
  );
  // If upCase = true append charTypes; upCase = false do nothing
  if (upCase) {
    charTypes.push(1);
  }
  var nums = confirm(
    "How about numbers?  Press OK to Include and Cancel if not."
  );
  // If nums = true append charTypes; nums = false do nothing
  if (nums) {
    charTypes.push(2);
  }
  var specChars = confirm(
    "And Spec!ci@l Ch@racter$?  Press OK to Include and Cancel if not."
  );

  // If specChars = true append charTypes; specChars = false do nothing
  if (specChars) {
    charTypes.push(3);
  }

  // Log it.
  console.log(charTypes);
  // Create variable to store the password
  var pwd = "";

  // For Loop to iterate through 1 of 4 types of random character generators
  for (var i = 0; i < pwdLength; ++i) {
    //  Error handling, if input < 8 or > 128 alert and break
    if (pwdLength < 8 || pwdLength > 128) {
      alert("You must enter a number between 8 and 128.  Try again");
      break;
    }
    // Error handling to determine if at least one character type is selected
    // If less than 1, alert and break
    if (charTypes.length < 1) {
      alert("You didn't select any character types. Try again");
      break;
    }
    // For this iteration, randomly choose one of the indexes in charTypes
    // I set the Index position equal to its character i.e. [0,1,2,3] in confirm variables above
    var randomCharType =
      charTypes[Math.floor(Math.random() * charTypes.length)];

    // Log it
    console.log(randomCharType);

    // If randomCharType equals LowCase [0] choose a number between 97 and 122
    if (randomCharType === 0) {
      console.log("Random lowercased character.");
      var randomCharCode = Math.floor(Math.random() * 25) + 97;

      // Convert the randomCharType to ASCII
      var asciiCode = String.fromCharCode(randomCharCode);
      // Log it
      console.log(asciiCode);

      // Append random lowecase to pwd variable with concat
      pwd = pwd.concat(asciiCode);
      // Log it
      console.log(pwd);

    // If it is uppercase [1] choose a number between 65 and 90
    } else if (randomCharType === 1) {
      console.log("Random uppercased character.");
      var randomCharCode = Math.floor(Math.random() * 25) + 65;
      // Convert to ASCII
      var asciiCode = String.fromCharCode(randomCharCode);
      // Log it
      console.log(asciiCode);
      // Append random uppercase to pwd variable
      pwd = pwd.concat(asciiCode);
      console.log(pwd);

    // If it is a number [2] choose a number between 1 and 9
    } else if (randomCharType === 2) {
      console.log("Random number.");
      var randomNum = Math.floor(Math.random() * 9) + 1;
      console.log(randomNum);
      // Append random number to pwd variable
      pwd = pwd.concat(randomNum);
      console.log(pwd);

    // If it is uppercase [3] choose a number between 65 and 90
    } else if (randomCharType === 3) {
      console.log("Random special character.");
      var randomCharCode = Math.floor(Math.random() * 14) + 33;
      // Convert randomCharCode to ASCII
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      // Append special character to pwd variable
      pwd = pwd.concat(asciiCode);
      console.log(pwd);

    // Log something has happened that shouldn't have
    } else {
      console.log("Something bad happened.");
    }
  }
  // Log the result of the last iteration of the Loop
  console.log(pwd);
  // RETURN the password once last loop is finished
  return pwd;
}

// I tested moving the generatePassword() function below the starter code. It works too!

// // Write password to the #password input
// function writePassword() {
//   // Hint from Jonathan
//   console.log("You clicked my button!");

//   // Set password variable equal to whatever the generatePassword function generates
//   var password = generatePassword();

//   // Manipulate the DOM to display generated password in textarea id="password" instead of placeholder
//   var passwordText = document.querySelector("#password");

//   //  Set the value of the passwordText to be sent to DOM equal to password variable.
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
