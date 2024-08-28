/** 
 *  -------------------------------------------------------
 *  Programming Question : Find Median
 *  -------------------------------------------------------
**/


// Q. Write a JavaScript function findMedian(arr) thatt takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? Todo Tips:
//? Sort the array in ascenending order.
//? If the array has an even number of elements, the median is the middle element.
//? If the array has an odd number of elements, the median is the average of the two middle elements.

function findMedian(arr) {
   arr = arr.sort((a,b) => a-b);
   console.log(arr);
   let mid = Math.floor(arr.length / 2);
   if(arr.length%2 === 0){
      return (arr[mid] + arr[mid - 1]) / 2;
   }else{
      return arr[mid];
   }
}

console.log(findMedian([3, 2, 1, 5, 4]));
console.log(findMedian([1,3,5,7,9,11]));
console.log(findMedian([2,4,6,8]));

