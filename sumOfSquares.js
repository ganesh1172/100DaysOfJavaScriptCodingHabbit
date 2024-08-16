/** 
 *  -------------------------------------------------------
 *  Programming Question : Sum of Squares
 *  -------------------------------------------------------
**/


// Q. Write a function to calculated the sum of squares of all elements in an array. For example, given the array [1,2,3] the function should return 14 because  1*1 + 2*2 + 3*3 = 1+4+9 = 14.

//constraint
//? 
//? 
//? 
//? 

function sumOfSquares(arr) {
   
   return arr.reduce((accm,curr) => (curr * curr) + accm,0);

   let sum=0;
   for(let elem of arr){
      sum = sum + (elem*elem)
   }
   return sum
   
}

console.log(sumOfSquares([1,2,3]));
console.log(sumOfSquares([10,2,12]));
console.log(sumOfSquares([2]));

