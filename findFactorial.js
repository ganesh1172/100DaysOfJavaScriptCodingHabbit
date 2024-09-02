/** 
 *  -------------------------------------------------------
 *  Programming Question : Find Factorial
 *  -------------------------------------------------------
**/


// Q. Write a function to calculate the funciton of a number.(using Recursion)

//constraint
//? 
//? 
//? 
//? 


function factorial(num) {
   //using recursive
   // if(num===0 || num === 1){
   //    return 1
   // }else{
   //    return num * factorial(num-1);
   // }

   if (num < 0) return "Invalid input";  // Factorial for negative numbers doesn't exist
   let result = 1;
   for (let i = 1; i <= num; i++) {
      result *= i;
   }
   return result;
}

console.log(factorial(5));

