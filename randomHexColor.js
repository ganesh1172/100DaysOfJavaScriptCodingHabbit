/** 
 *  -------------------------------------------------------
 *  Programming Question : Generate random hex color
 *  -------------------------------------------------------
**/


// Q. WAF called randomHexColor that generates a random hexadecimal color code each time its called. The function shoul dreturn a string representing the random color code in the format '#RRGGBB', Where RR, GG, and BB are two-digit hexadecimal numbers representing the red, green, and blue components of the color, respectively.

//? The output color code should always start with # followed by six hexadecimal characters
//? The function should not take any parameters.
//? The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal codes.
//? 


function randomHexColor() {
  const hex = Math.random().toString(16).slice(2,8).padEnd(6,0);
  return '#' + hex;
}

console.log(randomHexColor());

