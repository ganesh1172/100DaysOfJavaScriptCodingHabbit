/** 
 *  -------------------------------------------------------
 *  Programming Question : Convert Object to Array and Vice Versa
 *  -------------------------------------------------------
**/


//? Convert Object to Array: WAF objectToArray that takes an obj as input and returns an array ot key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from object. 

//? Convert Array to Object: WAF arrayToObject that takes an arr as input of key-value pairs(as returned by the objectToArray function) and returns a new object with the key and the corresponding value from array. 

//? Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers and objects.

const obj = {
   name: "Ganesh Bardade",
   age: 29,
   city: "Navi Mumbai"
};

function objectToArray(obj){
   // let newArr = [];
   // for(let key in obj){
   //    newArr.push(key,obj[key]);
   // }
   
   let entries = Object.entries(obj);
   console.log("ObjectToArray", entries.flat());

   let newEntries = Object.fromEntries(entries);
   console.log("ArrayToObject", newEntries);

}

console.log(objectToArray(obj));

