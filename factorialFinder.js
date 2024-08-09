/** 
 *  -------------------------------------------------------
 *  Programming Question : Factorial Finder
 *  -------------------------------------------------------
**/


// Q. Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of non-negative integer n, denoted as n!, is the product of all positve integers less than or equal to n. The factorial of 0 is defined as 1.

//constraint
//? 
//? 
//? 
//? 


function factorial(num) {

   //using recursive way
   if (num == 0 || num == 1) {
      return 1
   } else {
      return num * factorial(num - 1);
   }

   // using for loop
   let fact = 1;
   for(let i=1;i<=num;i++){
      fact = fact*i;
   }
   return fact
}

console.log(factorial(5));
console.log(factorial(-3));
console.log(factorial(0));
console.log(factorial(1));

