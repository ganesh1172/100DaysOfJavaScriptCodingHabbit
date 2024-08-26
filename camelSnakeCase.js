/** 
 *  -------------------------------------------------------
 *  Programming Question : A string to Camel & Snake_case.
 *  -------------------------------------------------------
**/


// Q. Write a function to convert a string to Camel & Snake_case.

//constraint
//? 
//? 
//? 
//? 

function toCamelCase(str) {
   let splitIntoWord = str.split(" ");
   let result = splitIntoWord.map((currEl,index) => {
      if(index === 0){
         return currEl.toLowerCase();
      }else{
         return currEl.charAt(0).toUpperCase() + currEl.slice(1).toLowerCase();
      }
   })

   let snakeCase = result.join("_");
   return snakeCase;
   
}

console.log(toCamelCase("heLlo world ganEsh"));
console.log(toCamelCase("100 Days of JavaScript Coding Challenges"));
// console.log(toCamelCase());

