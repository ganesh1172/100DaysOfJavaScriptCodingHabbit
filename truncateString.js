/** 
 *  -------------------------------------------------------
 *  Programming Question : Truncate a String
 *  -------------------------------------------------------
**/


// Q. Write a function called truncateString that takes two parameters:

//? str : A string that needs to be truncate. 
//? maxLength : An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the truncated string.
//? 


function truncateString(str,num) {
   
   return num <= 0 ? str : str.slice(0,num).concat('...');
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));

