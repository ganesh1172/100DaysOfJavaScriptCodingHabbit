/** 
 *  -------------------------------------------------------
 *  Programming Question : Hash Tag Generator
 *  -------------------------------------------------------
**/  


// Q. You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed.

/** steps
 * First check there empty space or not and should be less than 280 . if yes then return false;
 * Split the sentence into word. 
 * Then pick up the first letter of word using .[0].upperCase() and transform it into capital.
 * Now combine remaining letters with capital letter and add with join("").
 * Finally add "#" and with result. Here you will get output
**/

function generateHash(str) {
   if (str.length > 280 || str.trim().length === 0) {
      return false;
   }

   let splitStr = str.split(/\s+/);
   let capCase = splitStr.map(lett => lett[0].toUpperCase() + lett.slice(1)).join("");
   let hashTag =  "#" + capCase;
   return hashTag;

   
}

console.log(generateHash('My name is ganesh bardade'));
