/** 
 *  -------------------------------------------------------
 *  Programming Question : Check Object Emptiness
 *  -------------------------------------------------------
**/


// Q. Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

function isEmptyObject(obj) {
   // for (let ob in obj) {
   //    if (obj.hasOwnProperty(ob)) {
   //       return "its not emtpy";
   //    } 
   // }
   // return " empty";

   return Object.keys(obj).length === 0 ? "Its empty" : "Its not empty"

}

console.log(isEmptyObject({ name: "vinod" }));
console.log(isEmptyObject({}));
console.log(isEmptyObject({ keyWithNull: null }));
console.log(isEmptyObject({ keyWithNull: undefined }));

