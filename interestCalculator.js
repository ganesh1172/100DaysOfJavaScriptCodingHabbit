/** 
 *  -------------------------------------------------------
 *  Programming Question : Simple Interest Calculator
 *  -------------------------------------------------------
**/


//? WAF calculateSimpleInterest that calculates the simple interest give the principal amount, rate of interest per annum, and time in years. 

function calculateSimpleInt(p,r,t){
   return (p * r * t)/100;

}

console.log(calculateSimpleInt(1000, 5, 3));

