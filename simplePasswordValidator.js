/** 
 *  -------------------------------------------------------
 *  Programming Question : Simple Password Validator
 *  -------------------------------------------------------
**/


// Q. WAF called simplePasswordValidator that take a single parameter.

//? The password must contain at least one lowercasem one uppercase letter and one digit.
//? The length of password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise. It should return false.
//? 


function simplePasswordValidator(password) {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;

  for(let char of password){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
      hasUpper = true;
    }else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
      hasLower = true;
    }else if(!isNaN((Number(char)))){
      hasNumber = true
    }
  }

  if(!hasUpper || !hasLower || !hasNumber || password.length < 8){
    return false;
  }

  return true;
}

console.log(simplePasswordValidator("safewfwef"));
console.log(simplePasswordValidator("fewfwef"));
console.log(simplePasswordValidator("safewfwef1"));
console.log(simplePasswordValidator("safewfw1Aef"));
console.log(simplePasswordValidator("safew12Aafwef"));

