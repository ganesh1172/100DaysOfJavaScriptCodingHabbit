/** 
 *  -------------------------------------------------------
 *  Programming Question : Count occurance of numbers
 *  -------------------------------------------------------
**/


// Q. Write a JavaScript function to count the occurances of each element in an array and store the counts in an object. THe keys of object should represent the elemnts of the array, and the values should represent the number of times each element appears in the array.

function countOccurance(arr) {
   let obj={};
   for(let a of arr){

      obj[a] = (obj[a] || 0) +1;
   }
   console.log(obj);
}

console.log(countOccurance([1,2,2,3,1,4,2]));

