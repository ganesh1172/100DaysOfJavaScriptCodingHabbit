/** 
 *  -------------------------------------------------------
 *  Programming Question : Find max number in array
 *  -------------------------------------------------------
**/


// Q. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

//constraint
//? 
//? 
//? 
//? 


function findMax(arr) {
   // using reduce
   return arr.reduce((accm, currn) => currn > accm ? currn : accm);
   
   // Built-in method
   return Math.max(...arr);

   // Using for loop
   for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
         if(arr[i]<arr[j]){
            let temp = arr[i];
            arr[i]=arr[j]
            arr[j]=temp;
         }
      }      
   }
   return arr[0];
}
   
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
console.log(findMax([-10,-6,-3,-9,-2,1]));

