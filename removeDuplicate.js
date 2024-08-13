/** 
 *  -------------------------------------------------------
 *  Programming Question : Remove Duplicates
 *  -------------------------------------------------------
**/


// Q. Write a function that takes an array of integers as input and removes any duplicates elements, returning a new array with only the unique elements. 

//constraint
//? 
//? 
//? 
//? 


function removeDuplicates(arr) {
   let newArr = [...new Set(arr)];
   return newArr

   return arr.reduce((accm, curr) => {
      if (!accm.includes(curr)) {
         accm.push(curr)
      }
      return ac;
   }, [])
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 2]));
console.log(removeDuplicates([1, 2, 3, 1, 2, 4]));
console.log(removeDuplicates([]));

