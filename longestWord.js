/** 
 *  -------------------------------------------------------
 *  Programming Question : Find longest word from Sentence
 *  -------------------------------------------------------
**/  


// Q. write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return first on encountered.

/**
 * First check there empty space or not. if yes then return false;
 * Then to check length of word from sentence seperate it or break in into words.
 * After words split compare it and then you you will get the answer
*/

function findLongestWord(str) {
   if (str.trim().length === 0) {
      return false;
   }

   let splitStr = str.split(" ");

   //By sort method
   // let word = splitStr.sort((a, b) => b.length - a.length);
   // return word[0];

   //By reduce method
   let word1 = splitStr.reduce((accm, currn) => (currn.length > accm.length) ? currn : accm, "");
   return word1;
}

console.log(findLongestWord('This program show you longest word from sentence!'));