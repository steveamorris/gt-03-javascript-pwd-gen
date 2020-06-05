# gt-03-javascript-pwd-gen

# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

## Solution
I first broke down the Acceptance Criteria 

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password

Onclick

THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria

Confirm Instructions (Input desired Password length and select at least 1 character type.

THEN I select which criteria to include in the password
WHEN prompted for the length of the password

Prompt PWD length.

THEN I choose a length of at least 8 characters and no more than 128 characters

while < 8 or > 128, keep same state.

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

	Confirm Lowercase type
	Confirm uppercase type
	Confirm numbers type
	Confirm Special Characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

	Var pwdlength = prompt
	Var charTypes = [0,0,0,0]
	Lowercase 1 or 0
		If Yes on Question, then append 0 to array

	Uppercase 1 or 0
		If Yes on Question, then append 1 to array
	Numbers 1 or 0
		If Yes on Question, then append 2 to array
	Special Char 1 or 0
		If Yes on Question, then append 3 to array

	


Function genpwd() {
		For (var i = 0; i < pwdlength; ++i) {
			Mathrandom charTpes.length
			If 0 ascii mathrandom lowecase
			If 1 ascii mathrandom upper
			If 2 ascii mathrandom numbers
			If 3 ascii mathrandom spec char
			
			Append to pwdstring
	Save to var pwd

			
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

I then took the instructor's advice and console.log("I just clicked a button); to get started.  I saved my Prompt for the password length and console.log() into a variable and console.log() the input.  I then created an array to store the Character Types selected, to randomly choose later.  

Then I looked up how to generate a random character in javascript and found this website [www.techiedelight.com](https://www.techiedelight.com/character-to-ascii-code-javascript/) and then looked up the Ascii Codes at [www.w3schools.com](https://www.w3schools.com/charsets/ref_html_ascii.asp).

After that I created a variable to randomly choose one of the indexes in the charTypes Array.  Then created the logic to randomly select lowercase, uppercase, numbers, and special characters and console.log the results to the screeen.  That gave me 4 results.

After that I added the IF STATEMENT to run the randomly chosen character/number generator.  That gave me 1 result.

Finally I added the FOR LOOP that created an empty String Var to store the Password in and then iterated the loop a number of times equal to the Password Length variable recived from the Prompt Input.  I used Concat to append the next random character/number.

I console.log() that pwd and then Returned it.  Tested the App and it worked.

Lastly I added some error handling to Alert user if they did not input the necessary requirements to geneerate a password.  Password Length less than * and greater than 128 results in an alert and a Break.  Same for an Array Length of 0 for charTypes.  I left the console.log()'s in so the functionality can easily be seen.  Console.log is my friend :)