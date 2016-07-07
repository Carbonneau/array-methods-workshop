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
    return workingArray.reduce(function(largest, word) {
            if (word.length > largest.length) {
                return word;
            }
            else {
              return largest
              }
        });
}

console.log(longestWord(testString))



/*

Exercise 5

Write a function called countVowels that takes a string and returns the 
number of vowels in the string. You should use Array.prototype.reduce to do 
your work.

Hint: You can use String.prototype.split again. There is a way to use 
it to split a string by character. Try to Google it :)

Hint 2: You can create an array of vowels and use Array.prototype.indexOf 
to check if the current letter is a vowel.

*/

var testString = "a collection of big and small words";
function isVowel(char) {
      if(char === "a" || char ===  "e" || char ===  "i" || char ===  "o" || char === "u") {
        return true
        };
}
        
    
function countVowels(string) {

    var workingArray = string.split("");
    return workingArray.reduce(function(counter, letter){
      
      if(isVowel(letter)){
        counter = counter + 1;
      }
      return counter;
      }, 0);

}


console.log(countVowels(testString))

/*

Exercise 6

Write a function called highLow that takes an array of numbers, 
and returns an object with a property highest containing the highest number, 
and a property lowest containing the lowest number, 
using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], your function should 
return {highest: 40, lowest: -10}.

Hint: Javascript has a special value called Infinity, which is higher 
than any other number. See if you can initialize your reduce accumulator 
with Infinity and -Infinity :)


*/

var arrayOfNumbers = [1,2,3,4,5,-6,7,8,9,12,23,34,45,56,67];

function highLow(array) {
  
    var result = { highest: Infinity, lowest: -Infinity };
    
    //high
    result.highest = array.reduce(function(biggest,number){
        if(number > biggest) {
            biggest = number;
        }
        return biggest;
    },-Infinity);
    
    //low
    result.lowest = array.reduce(function(smallest,number){
        if(number < smallest) {
            smallest = number;
        }
        return smallest;
    },Infinity);
    
    return result;
}

console.log(highLow(arrayOfNumbers));

/*




*/