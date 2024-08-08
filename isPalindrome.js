/** 
 *  -------------------------------------------------------
 *  Programming Question : is palindrome or not?
 *  -------------------------------------------------------
**/


// Q. Write a function to deteremin whether a given string is a palindrome or not. A palindrome is a word, phrase, number or other sequence of characters that reads the same forward and backward, ignoring spaces, punction and capitalization.

//constraint
//? The input string may contain letters, digits, spaces, punctuation and special characters.
//? The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
//? Ignore spaces, punctuation and special characters when determining if a string is a palindrome.
//? The function should return tru if the input string is a palindrome and false otherwise.


function isPalindrome(str) {
   
   let char = str.toLowerCase().replace(/\W/g,"");
   let reverseChar = char.split("").reverse().join("");
   return char === reverseChar ? true : false;
}
   
console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("hello"));
