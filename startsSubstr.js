/** 
 *  -------------------------------------------------------
 *  Programming Question : Starts with a specific substring
 *  -------------------------------------------------------
**/


// Q. Write a function to check if a given string stars with a specific substring.

//constraint
// str: A string(e.g. "Hello World") 
// substr: A substring to check if it starts the given string (e.g. "Hello")
// Output: true if the given string starts with the specified substring, otherwise false.

function startWith(sent, word) {
   // return sent.toLowerCase().startsWith(word.toLowerCase())

   return sent.toLowerCase().slice(0, word.length) === word.toLowerCase();
}
console.log(startWith("Hello World", "hello"));
console.log(startWith("Hello World", "world"));

