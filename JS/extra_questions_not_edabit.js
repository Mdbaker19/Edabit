// for(let n = 0; n < 10000000; n++){
//     narcissisticNum(n);
// }

function narcissisticNum(j) {
    let output = [];
    //exponent is determined by the length of the number 3 for 153
    let findExponent = j.toString().length;
    //convert to string to pull each char out individually
    let numAsString = j.toString();
    for (let i = 0; i < findExponent; i++) {
        //use this to pull the 1, 5, and 3 separately from an input of 153
        let input = numAsString.charAt(i);
        //push each 1, 5, and 3 individually to the output array
        output.push(input);
    }
    let numsExponentApplied = output.map((element) => element ** findExponent);
    let sum = numsExponentApplied.reduce((a, b) => a + b);
    if (sum === j) {
        console.log(j);
        return true;
    }
}




//---------------QUESTION 1---------------------------//
// Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables:
// start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish
// or a number that when increased by step would go past finish.
//
//     Examples:
//
//
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: 5| Output: 13


function sumOfSequenceSteps(start, finish, step){
    let sum = 0;
    for(let i = start; i <= finish; i+=step){
        sum += i;
    }
    return sum;
}


// console.log(sumOfSequenceSteps(1, 4, 1));
// console.log(sumOfSequenceSteps(4, 10, 5));


//-------------------QUESTION 2------------------------//
// Given a string of any length with any characters in it, write a function
// to determine whether or not the string contains the whole word "english".
//     The order of characters/spelling is important, a string "agkjnenglishsad" would return true
// while "asdneglihsth" would return false. Upper and lower case does not matter.
//     Return values should be booleans (true/false).
//
//     Examples:
//
//
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true

function hasEnglish(string){
    let lowString = string.toLowerCase();
    if(lowString.includes("english")){
        return true;
    }
    return false;
}

// console.log(hasEnglish("FaagdnglishAGG"));
// console.log(hasEnglish("SMFENgliSHasnD"));

//-------------------QUESTION 3---------------------//
// Given an array of integers, write a function that returns an array of 2 integers.
//     The first integer will be the count of the positive integers, and the second integer
// will be the sum of the negative integers. If the input is empty or null, return an empty array.
//
//     Examples:
//
//
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

function twoNumsFromArray(array){
    let output = [];
    let count = 0;
    let negSum = 0;
    if(array === null || array.length === 0){
        return output;
    }
    else{ // not necesarilly needed
        for(let i = 0; i < array.length; i++){
            if(array[i] > 0){
                count++;
            } else {
                //for the negative nums
                negSum += array[i];
            }
        } //outside for loop
        //output.push(count);
        //output.push(negSum);
    }
        return [count, negSum];
}

// console.log(twoNumsFromArray([1, -6, 5, 4, 3, -7, -10, 201, -3]));
// console.log(twoNumsFromArray(null));
// console.log(twoNumsFromArray([]));



//------------------QUESTION 4---------------//

// Write a function that translates an input string by replacing each character
// with a number representing the amount of times that character appears in the string.
//     Then separate each individual number with a different character.
//
//     Examples:
//
//
// Input: "hello world", "-" | Output: "1-1-3-3-2-1-1-2-1-3-1"
// Input: "challenge", "/" | Output: "1/1/1/2/2/2/1/1/2"

//start with blank array, join by divider after numbers pushed in
function amountOfTimesCharRepeated(string, divider){
    let output = [];
    //for loop for string length, for loop within to check occurrence of that same char, counter within first for loop
    //increment by occurrence

    //loop through string one time to pick each char out one at a time
    for(let i = 0; i < string.length; i++){
        //this is the char to compare in the second loop
        let charToCheck = string.charAt(i);
        // every char checked is there at least one time
        let countOfCharToCheck = 0;
        // loop again at char at j ( 1 after the char at i) to compare against charToCheck
        for(let j = 0; j < string.length; j++){

            //if any char after first one being check matches again:
            if(charToCheck === string.charAt(j)){
                //increase the count
                countOfCharToCheck++;
            }
            //push that count in
        }output.push(countOfCharToCheck);
    }

    let answer = output.join(divider);
    return answer;
}

//console.log(amountOfTimesCharRepeated("hello world", "-"));
//console.log(amountOfTimesCharRepeated("challenge", "/"));



























