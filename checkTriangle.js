/** 
 *  -------------------------------------------------------
 *  Programming Question : CheckTriangleType
 *  -------------------------------------------------------
**/


// Q. Write a function called checkTriangleType that takes three parameters representing the lengths of the slides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene"

//constraint
//? If all three sides are of equal length, return "equilateral";
//? If all two sides are of equal length, return "isosceles";
//? If all three sides are of different length, return "scalene";


/** steps
 * 
 
**/

function checkTriangleType(a,b,c) {
   let result ="";
   if(a==b && b==c){
      result = "Equilateral";
   }else if(a===b || b==c){
      result = "scelene";
   }else{
      result = "isosceles";
   }
   return result
}

console.log(checkTriangleType(3,4,5));
console.log(checkTriangleType(4,4,5));
console.log(checkTriangleType(5,5,5));
console.log(checkTriangleType(3,4,4));
console.log(checkTriangleType(0,1,2));
