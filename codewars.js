//QUESTION ONE
/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

// we need to write a function that checks if the string param name contains r/R

//1. first create function syntax.
function areYouPlayingBanjo(name) {
  //then create var to return string to lowercase for simplicity returning "r/R" and make sure it targets correct function*/
  let firstLetter = name[0].toLowerCase();
  //then create conditional to check if the first value of name is equal to r
  if (firstLetter === "r") {
    //if so return string ${name} + ...
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}
/*For this problem I felt that it was a little confusing at first with the wording and I didn't know how to target the r in uppercase as well. 
Once I remembered I could use the .toLowerCase() it was simple */

//QUESTION TWO
/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

//1. first write out the syntax
function sum(numbers) {
  //2. account for a situation where the array is empty
  if (numbers.length === 0) {
    return 0;
  } else {
    //3. now using the reduce method add the numbers in array
    return numbers.reduce((total, array) => total + array);
  }
}
/*During this problem I was able to use the .reduce( ) which I had used in a prior GI. Knowing methods makes some of this easier */

//QUESTION 3
/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */
//1. write syntax
function past(h, m, s) {
  //2. calculate how many miliseconds are in a second then multiply that but m and h
  return h * 3_600_000 + m * 60_000 + s * 1_000;
}
/* As simple as this one was I could not wrap my head around how to do the math.
 It was until I took it step by step and solved the miliseconds first that I understood how I could make this function */

//QUESTION 4
/*You get an array of numbers, return the sum of all of the positives ones. */

//1. write function syntax
function positiveSum(arr) {
  //2. account for situation where array is empty
  if (arr.length === 0) {
    return 0;
  } else {
    //3. now create a var to hold our calc
    let sum = 0;
    //4. loop through each number in arr and check if it is positive if so add to the sum
    arr.forEach(function (number) {
      if (number >= 0) {
        sum = sum + number;
      }
    });
    //.5 finally return the sum
    return sum;
  }
}

//QUESTION 5
/* Write a function which calculates the average of the numbers in a given array.*/

//1. I need to find average which is found by adding all numbers then dividing by length
function findAverage(array) {
  //2. account for if the array is empty
  if (array.length === 0) {
    return 0;
  } else {
    //3. create sum var
    let sum = 0;
    array.forEach(function (number) {
      //4. add number to sum var
      sum += number;
    });
    //5. return the sum divided by the array length
    return sum / array.length;
  }
}

//QUESTION 6
/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

//1. write the function syntax
function basicOp(operation, value1, value2) {
  //2. using string interpolation, we can calculate within the backticks, and using eval will evaluate the values.
  return eval(`${value1} ${operation} ${value2}`);
}
/* This question made me dive a little deeper into the eval(), I tried not to use it for my calculator and went the harder route so I didn't know how it worked especially since everyone says its a security risk. 
This method was so useful in addition to the string literals. */

//QUESTION 7
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */
//1. write the syntax of function
function countPositivesSumNegatives(input) {
  //2. create variables for count and sum
  let count = 0;
  let sum = 0;
  //3. create conditional in case of empty array
  if (!input || input.length === 0) {
    return [];
  }
  //4. now create conditional for count and sum
  for (const number of input) {
    //5. if number is less than than 0 add to sum
    if (number < 0) {
      sum += number;
    } else if (number > 0) {
      //6. else if number if greater than 0 add 1 to count
      count += 1;
    }
  }
  return [count, sum];
}
/*I was stumped on this one for a while, I wanted to use a forEach loop then I realized it would be easier with a for loop because of the different functionality of the variables */

//QUESTION 8
/* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.*/

//1. write two functions one max and one min
const min = (list) => {
  //.2 using the Math min i'll get the smallest value and spread the list
  return Math.min(...list);
};

const max = (list) => {
  //.3 I'll do the same with the Math.max
  return Math.max(...list);
};
/* For this question I had to go to MDN and utilize the Math object section to get a refresher. I knew it could work but I had never used it. It was hard but Im glad I did it. */
