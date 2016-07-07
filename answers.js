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

/*

Exercise 3

Write a function called filterArray that takes an array AND 
a function as arguments. Your filter function should return a 
new array that contains only the elements where the passed function 
returns a truthy value.

NOTE: You are allowed to use Array.prototype.filter to answer this question.

NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

*/

function filterArray(array, func) {
    return array.filter(func)
}


/*

Exercise 4

Write a function called longestWord that takes a string as argument, 
and returns the longest word in the string. You should use 
Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split to split the string into an 
array of words.

*/

var testString = "A collection of big and small words";

function longestWord(string) {
    var workingArray = string.split(" ");
    var i = 1;
    var result = workingArray[0];
    while(i < workingArray.length) {
        if(workingArray[i].length > result.length) {
            result = workingArray[i];
        }
        i++;
    }
    return result;
}

// console.log(longestWord(testString))


