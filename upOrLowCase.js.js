/** 
 *  -------------------------------------------------------
 *  Programming Question : UpperCase Or LowerCase
 *  -------------------------------------------------------
**/


// Q. Write a function to check if a character is uppercase or lowercase.

//constraint
// The input char will be a single character. 
// The character can be any printable ASCII character.
// You can assume that the input will always a string of length 1.

function isUpOrLowCase(char) {
   // if(char.charCodeAt(0) >= 41 && char.charCodeAt(0)<= 91){
   //    return true
   // }
   // return false;

   // if(char.charCodeAt(0) >= 61 && char.charCodeAt(0)<= 122){
   //    return true
   // }

   return char === char.toUpperCase();

} 

console.log(isUpOrLowCase("b"));
console.log(isUpOrLowCase("B"));

