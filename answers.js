/* Exercise 1

Write a function called printPositives that takes an array 
and uses the forEach method to print only the positive numbers.

*/

var testArray1 = [1,3,5,6,-1,-2,-5];

function printPositives(array) {
    var returnArray = [];
    array.forEach(function(item){
        if(item > 0) { 
          returnArray.push(item) 
          };
    })
    return returnArray;
}

console.log(printPositives(testArray1));
