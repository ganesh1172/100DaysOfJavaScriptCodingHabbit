/** 
 *  -------------------------------------------------------
 *  Programming Question : Remove Duplicates from an Array
 *  -------------------------------------------------------
**/


// Q. Write a function removeDuplicates that takes an array of elelemtns as input and returns a new array with duplicate elements removed.

function removeDuplicates(arr) {
   // let newArr = [...new Set(arr)];
   // return newArr;

   let newArr = [];
   for(let ar of arr){
      if(!newArr.includes(ar)){
      newArr.push(ar);
   }
   }
   return newArr;
}

console.log(removeDuplicates([1,2,2,3,1,4,2]));
console.log(removeDuplicates(["a","b","c","a"]));

