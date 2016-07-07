/* Exercise 1

Write a function called printPositives that takes an array 
and uses the forEach method to print only the positive numbers.

*/

var testArray1 = [1,3,5,6,-1,-2,-5];

function isPos(num){
    if (num > 0) {
        return num;
        
    }
}


function printPositives(array) {
    var returnArray = [];
    array.forEach(function(item){
        if(item > 0) { 
          returnArray.push(item) 
          };
    })
    return returnArray;
}

// with map:

function mapPositives(array) {

   return array.map(function(item) {
        if (item > 0) {
            return item;
        }
    });

}



/*****************************************************************************/

/*  Exercise 2

Similar to the previous exercise, write a function called getPositives 
that takes an array and uses the filter method to return a new array 
with only the positive numbers.

*/


function getPositives(array) {
    return array.filter(isPos)
}



/*

Exercise 2B

Re-do exercise 1 by first filtering the input array, 
and then printing the numbers from the filtered array. 
Your code will look something like: `return arr.filter(…).forEach(…)

*/

function eachFilter(array) {
    array.filter(isPos).forEach(function(item){console.log(item)});
}
    

//eachFilter(testArray1);

