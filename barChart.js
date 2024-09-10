/** 
 *  -------------------------------------------------------
 *  Programming Question : Simple Bar Chart from Array Data
 *  -------------------------------------------------------
**/


// Q. Create a function generateBarChart that takes an array of numbers and generate a simple text-based bar chart.

//? 
//? 
//? 
//? 

function generateBarChart(arr) {
return arr.map((element,index) => {
   return `${index + 1}: ${"*".repeat(element)}`;
}).join('\n')
}

console.log(generateBarChart([5,3,9,2]));
console.log(generateBarChart([10,1,0,2,11]));

