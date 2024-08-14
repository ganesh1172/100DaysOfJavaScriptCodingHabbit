/** 
 *  -------------------------------------------------------
 *  Programming Question : Count Vowels
 *  -------------------------------------------------------
**/


// Q. Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a','e','i','o','u' as vowels(both lowercase and uppercase).

//constraint
//? 
//? 
//? 
//? 


function countVowels(str) {

   str = str.toLowerCase().split("");
   let count = 0;

   //Method 1
   // let result = str.filter(s => {
   //    if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
   //       ++count;
   //    } 
   // })

   //Method 2
   // for(let i=0;i<str.length;i++){
   //    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
   //       ++count;
   //    }
   // }

   //Method 3
   let vowels = ['a', 'e', 'o', 'i', 'u'];

   for (let char of str) {
      if (vowels.includes(char)) {
         count++;
      }
   }
   return count;
}

console.log(countVowels("Helloo world"));
console.log(countVowels("ThE quIck brOwn fOx"));
console.log(countVowels("Brrrp "));

