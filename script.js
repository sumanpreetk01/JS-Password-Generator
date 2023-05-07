var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialchar = "!@#$%^&*";
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
function generatePassword() {
    var passwordlen = prompt("How long should your password be? Choose a number between 8 and 128.");
    console.log(passwordlen);
    if (passwordlen < 8) {
        alert("Invalid! Password must be at least 8 characters!")
        return " "
    }
    if (passwordlen > 128) {
        alert("Invalid! Password must be less than 128 characters!")
        return " "
    }
    var checkLowerCase = confirm("Does your password have lowercase characters?");
    var checkUpperCase = confirm("Does your password have lowercase characters?");
    var checkNumbers = confirm("Does your password have numeric characters?");
    var checkSpecialChar = confirm("Does your password have special characters?");
    let passwordText = "";
    for (i = 0; i < passwordlen; i++) {
        if (checkLowerCase == true && passwordText.length<passwordlen) {
            passwordText += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
        if (checkUpperCase == true && passwordText.length<passwordlen) {
            passwordText = passwordText + upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        if (checkNumbers == true && passwordText.length<passwordlen) {
            passwordText += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (checkSpecialChar == true && passwordText.length<passwordlen) {
            passwordText += specialchar[Math.floor(Math.random() * specialchar.length)];
        }
    }
    return passwordText
}
generateBtn.addEventListener("click", writePassword);