/** 
 *  -------------------------------------------------------
 *  Programming Question : Sort an array
 *  -------------------------------------------------------
**/


// Q. Write a function to sort an array of numbers in an ascending order.

//constraint
//? The function should take an array of numbers as input.
//? It should return a new array with numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use built-in sort() method.

/** steps
 * 
 
**/

function sortAscending(arr) {
   return arr.sort((a,b) => a-b);
}
   

console.log(sortAscending([5,3,1,8]));
console.log(sortAscending([5,3,10,8]));
