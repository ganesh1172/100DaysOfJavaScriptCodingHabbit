/** 
 *  -------------------------------------------------------
 *  Programming Question : Reverse without built-in
 *  -------------------------------------------------------
**/


// Q. Write a function to reverse a string without using any built-in methods or libraries. The funciton should take a string as input and return the reversed string.

function reverseString(word) {
   // word = word.split("");
   // let newStr=[];
   // for(let f of word){
   //    newStr.unshift(f);
   // }
   // return newStr.join("")

   let r_str = ""

   for(let i=word.length-1;i>=0;i--){
      r_str = r_str + word[i];
   }
   return r_str
}

console.log(reverseString("Hello"));

