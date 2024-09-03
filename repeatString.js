/** 
 *  -------------------------------------------------------
 *  Programming Question : Repeat a String
 *  -------------------------------------------------------
**/


// Q. Write a function called repeatString that takes two parameters:

//? str : A string that needs to be repeated. 
//? num : An integer representing the number of times the string should be repeated.
//? The function should repeate the input string str the specified number of times num and return the resulting string
//? 


function repeatString(str,num) {
   
   return num > 0 ? str.repeat(num) : str;
}

console.log(repeatString("abc", 5));
console.log(repeatString("abc", 0));

