/** 
 *  -------------------------------------------------------
 *  Programming Question : Find Mode
 *  -------------------------------------------------------
**/


// Q. Write a JavaScript function called findMode that takes anarray of numbers as input and returns the mode of the array (the number that appears most frequently).


function findMode(arr) {
   let maxNum=0;
   let mode;
   arr = arr.sort((a,b) => a-b);
   let occurance = arr.reduce((accm, currn) => {
      accm[currn] = (accm[currn] || 0) + 1;
      if(accm[currn]>maxNum){
         maxNum = accm[currn];
         mode = maxNum;
      }
      return accm;
   },{})
   console.log(occurance);
   return mode;
}

console.log(findMode([3, 2, 1, 5, 4, 3, 2, 3]));

