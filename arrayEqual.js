/** 
 *  -------------------------------------------------------
 *  Programming Question : Arrays are Equal or not?
 *  -------------------------------------------------------
**/


// Q. Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input returns true if the arryas are euqal (i.e, contain the same elemets in the same order), and false otherwise.

//constraint
//? 
//? 
//? 
//? 


function arraysAreEqual(arr1,arr2) {
   //if else
   if(arr1.length !==  arr2.length ){
    return false;  
   }
   return arr1.toString()===arr2.toString()

   // every
   return arr1.every((curVal, index) => curVal === arr2[index])

}

console.log(arraysAreEqual([1,2,3],[1,2,3,2]));
console.log(arraysAreEqual([1,2,3],[1,2,4]));
console.log(arraysAreEqual([],[]));

