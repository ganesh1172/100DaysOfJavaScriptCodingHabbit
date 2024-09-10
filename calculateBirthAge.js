/** 
 *  -------------------------------------------------------
 *  Programming Question : Calculate Age from BirthDate
 *  -------------------------------------------------------
**/


// Q. Create a function calculateAge that takes a birthDate as input and return the current age of the person. The birthDate will be provided in the format 'YYYY-MM-DD'.

//? The function must handle leap years and varying numbers of days in each month accuately.
//? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
//? The output should be the age in whole years.
//? 

function calculateAge(dte) {
   let cDate = new Date();
   let bDate = new Date(dte);

   let age = cDate.getFullYear() - bDate.getFullYear()
   let month = cDate.getMonth() - bDate.getMonth();

   if(month < 0 || month === 0 && cDate.getDate() < bDate.getDate()){
      age --;
   }

   return age;

}

console.log(calculateAge("1995-04-17"));
console.log(calculateAge("1996-09-14"));

