/** 
 *  -------------------------------------------------------
 *  Programming Question : Find the minimum value in an array
 *  -------------------------------------------------------
**/


// Q. Write a function findMin that takes an array of numbers as input a value found in the array.

//constraint
//? 
//? 
//? 
//? 

function findMin(arr) {
   let sortedArr = arr.sort((a,b) => a-b);
   let minVal = [...new Set(sortedArr)];
   return minVal[0];
   // return Math.min(...arr);
   
}

console.log(findMin([5,10,2,8]));
console.log(findMin([5,10,11,11,1,1,2,8]));
console.log(findMin([5,-3,0,12,-7]));
console.log(findMin([]));

