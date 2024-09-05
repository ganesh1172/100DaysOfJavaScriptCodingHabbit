/** 
 *  -------------------------------------------------------
 *  Programming Question : Recursive Number Range Generator 
 *  -------------------------------------------------------
**/


// Q. Write a recursive function called NumberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive).

//?  
//? 
//? 
//? 


function numberRangeRecursive(a, b, arr=[]) {
  if(a<=b){
   arr.push(a);
   return numberRangeRecursive(a+1,b,arr);
  }
  return arr;
}

console.log(numberRangeRecursive(0, 5));
console.log(numberRangeRecursive(10, 15));
console.log(numberRangeRecursive(3, 7));
console.log(numberRangeRecursive(-2, 2));

