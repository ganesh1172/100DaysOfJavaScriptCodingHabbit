/** 
 *  -------------------------------------------------------
 *  Programming Question : Count Occurances of Character
 *  -------------------------------------------------------
**/


// Q. Write a function called countChar that takes two parameters: a string and a character to count. The functionshould return number of times the specified character appearts in the string.

/** steps
 * let the word and char convert into lowerCase. so it will be easy to search.
 * Split the word into characters.
 * Use reduce method(or any), compare character with char and increment count. Here you will get result.
 
**/

function countChar(word, char) {
   word = word.toLowerCase();   // convert to lower case
   char = char.toLowerCase();   // convert to lower case

   // using for-loop
   // let count = 0;
   // let splitStr = word.split("");
   // for (let i = 0; i < splitStr.length; i++) {
   //    if (splitStr[i] === char) {
   //       count++;
   //    }
   // }
   // return count;

   let result = word.split("").reduce((accm,curChar) => { // chaining method for split and search character in word
      if(curChar === char){                               // compare with curChar and char                 
         accm++;                                          // increment result
      }
      return accm;
   },0);
   return result

}

console.log(countChar('MissIssippi', "I"));
