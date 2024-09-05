/** 
 *  -------------------------------------------------------
 *  Programming Question : Number Range Generator
 *  -------------------------------------------------------
**/


// Q. Write a function called NumberRange that generates an array containing consecutive numbers from a to b (inclusive).

//?  
//? 
//? 
//? 


function numberRange(a, b) {
   let arr = [];
   if (a <= b) {
      for (let i = a; i <= b; i++) {
         arr.push(i);
      }
   } else {
      return "Number a should be less than b"
   }
   return arr;
}

console.log(numberRange(0, 5));
console.log(numberRange(10, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));

