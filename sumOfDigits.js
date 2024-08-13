/** 
 *  -------------------------------------------------------
 *  Programming Question : Sum of Digits
 *  -------------------------------------------------------
**/


// Q. Write a function that takes a number as input and returns the sum of its digits.

//constraint
//? 
//? 
//? 
//? 


function sumOfDigits(num) {
   num = num.toString().split("")
   let sum=0;
   for(let i = 0;i<num.length;i++){
      sum += parseInt(num[i])
   }
   return sum;
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));

