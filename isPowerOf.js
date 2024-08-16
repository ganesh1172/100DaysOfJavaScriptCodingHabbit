/** 
 *  -------------------------------------------------------
 *  Programming Question : Is power of two
 *  -------------------------------------------------------
**/


// Q. Write a function called isPowerOfTwo that an integer num as input and returns true if num is a power of two, and false othervise.

//constraint
//? 
//? 
//? 
//? 

function isPowerOfTwo(num) {
   for(let i=1;i<num;i++){
      if(2**i === num){
         return true
      }
   }
   return false;
   
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(4));

