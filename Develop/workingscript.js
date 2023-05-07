// Assignment code here

var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar= "!@#$%^&*";

//User choice: Length of password
var UserLength = {
  UserLength: [],
  len: function(){
    var userLen = window.prompt('How many characters should your password have? Please enter a number between 8 and 128.')
    console.log(UserLength);
    if(!UserLength){
      console.log('no length')
      return;
    }},
play:function(){
  this.len();
}
};
UserLength.play();

//User choice: Upper case yes or no
var UserUpperCase = {
  UserUpperCase:['Y','N'],
 genuc: function(){
  var userUC = window.prompt('Should your password have uppercase characters.Enter Y for yes or N for no.');
  console.log(userUC)
  if(!userUC){
    console.log('no length')
    return;
  }
},
 play:function(){
  this.genuc();
}};
UserUpperCase.play();

//User choice: Lower case yes or no
var UserLowerCase = {
  UserLowerCase:['Y','N'],
 genlc: function(){
  var userLC = window.prompt('Should your password have lowercase characters.Enter Y for yes or N for no.');
  console.log(userLC)
 },
 play:function(){
  this.genlc();
}};
UserLowerCase.play();

//User choice: Numeric characters yes or no
var UserCharnum = {
  UserCharnum:['Y','N'],
 gennum: function(){
  var usernum = window.prompt('Should your password have numeric characters.Enter Y for yes or N for no.');
  console.log(usernum)
 },
 play:function(){
  this.gennum();
}};
UserCharnum.play();

//User choice: Special characters yes or no
var UserCharspec = {
  UserCharspec:['Y','N'],
 genspec: function(){
  var userspec = window.prompt('Should your password have special characters.Enter Y for yes or N for no.');
  console.log(userspec)
 },
 play:function(){
  this.genspec();
}};
UserCharspec.play();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  let passwordText="";
  for (i=0;i< UserLength, i++;){
    if(UserUpperCase == "Y"){
      passwordText += upperCase[Math.floor(Math.random()*upperCase.length)]
    }
    if(UserLowerCase == "Y"){
      passwordText += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    }
    if(UserCharnum == "Y"){
      passwordText += numbers[Math.floor(Math.random()*numbers.length)]
    }
    if(UserCharspec == "Y"){
      passwordText += specialChar[Math.floor(Math.random()*specialChar.length)]
    }
  }
  return passwordText
}

generateBtn.addEventListener("click", writePassword);

/*function generatePassword(upperCase, lowerCase, charnum, charspec){
    let charcodes = userLen
    if(includesUpperCase) charcodes = charcodes.concat(upperCase)
    if(includesLowerCase) charcodes = charcodes.concat(lowerCase)
    if(includesNumeric) charcodes = charcodes.concat(charnum)
    if(includesSpecial) charcodes = charcodes.concat(charspec)

    const passwordCharacters = []
    for(let i =0; i< userLen; i++){
      const characterCode = charcodes[Math.floor(Math.random()*charcodes.userLen)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    console.log(passwordCharacters)
}

function userLen(){
  const array = []
  for(let i = userLen; i<= userLen; i++){
    array.push(i)
  }
  return array
}


/*function generatePassword(){
  var length = 8,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);*/
