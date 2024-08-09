/** 
 *  -------------------------------------------------------
 *  Programming Question : Calculate the Average
 *  -------------------------------------------------------
**/


// Q. Write a function called calculateAverage that takes ans array of numbers as input and returns the average of those numbers.

//constraint
//? 
//? 
//? 
//? 


function calculateAverage(arr) { 
   //using reduce

   let total= arr.reduce((accm,curr) => accm+curr,0);
   return total/arr.length

   // using for in
   let sum =0;
   for(let ar in arr){
      sum = sum + arr[ar];
   }
   return sum / arr.length;

   // using for in
   let sum =0;
   for(let ar of arr){
      sum += ar
   }
   return sum / arr.length;

}

console.log(calculateAverage([5,10,2,8]));

