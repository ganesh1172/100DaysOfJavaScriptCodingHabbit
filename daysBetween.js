/** 
 *  -------------------------------------------------------
 *  Programming Question : Number of Days Between two Dates
 *  -------------------------------------------------------
**/


//? WAF calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD"; 

function calculateDaysBetweenDates(d1){
   let nD1 = new Date(d1);
   let nD2 = new Date();
   let diff = Math.abs(nD2-nD1);
   return Math.round(diff /(24*60*60*1000));

}

console.log(calculateDaysBetweenDates("2024-01-01"));

