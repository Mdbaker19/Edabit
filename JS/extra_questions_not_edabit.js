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


function mostCommonChar(str){
    let counts = [];
    let uniques = [];
    for(let i = 0; i < str.length; i++){
        let count = 0;
        for(let j = 1; j < str.length; j++){
            if(str[i] === str[j]){
                str = str.replace(str[i], "");
                count++;
            } else {
                uniques.push(str[i]);
            }
        }
        counts.push(count);
    }
    return [counts, uniques];
}

//3m, 1y, 1d, 2o, 1g, 2s, 2n, 1a, 3m, 2e, 1i, 2s, 2n ,2e, 3m, 2o;
console.log(mostCommonChar("mydogsnameisnemo"));


let shortNums = [1, 2, 2];
function sumSqr(arr){
    let sum = 0;
    arr.forEach((num) => {
        sum += num**2;
    });
    return sum;
}




// console.log(sumSqr(shortNums));

// 1
// 2 3
// 4 5 6
// 7 8 9 10

function floyd(rows){
    let output = "";
    let start = 1;
    for(let i = 0; i <= rows; i++){
        for(let j = 1; j <= i; j++){
            output += " " + start;
            start++;
        }
        output += "\n";
    }
    return output;
}

// console.log(floyd(30));







// 6, 14, 15 left

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
    return (lowString.includes("english"))
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
        }
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

function amountOfTimesCharRepeated(string, divider){
    //start with blank array, join by divider after numbers pushed in
    let output = [];
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
    return output.join(divider);
}

//console.log(amountOfTimesCharRepeated("hello world", "-"));
//console.log(amountOfTimesCharRepeated("challenge", "/"));


//------------------QUESTION 5------------------//
// Given a string of names like this: "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer",
//     write a function that makes the entire string uppercase and sorts it in alphabetical
// order by last name. If the last names are the same sort them by the first name.
//     Put the last name in front of the first name, remove the colons and semicolons, put the names
// in parentheses and separate the names with commas.
//
//     Example:
//
// The end string should look like this: "(CARANGAL, GENE)(MEYER, JEFF)(MEYER, TRAVIS)(YOUNG, TOM)"

function reorderStrings(string){
    let answer = "";
    let output = string.toUpperCase();
    output = output.replace(/;/g, " ");
    output = output.replace(/:/g, ",");
    output = output.split(" ");
    output.forEach((word) => {
        word = word.split(",");
        let removed = word.pop();
        word.unshift(removed);
        answer += "(" + word + ") ";
    });
    answer = answer.substring(0, answer.length-1).split(" ").sort().join("");
    return answer;
}
// console.log(reorderStrings("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer"));
// console.log(reorderStrings("Matt:Baker;Mandy:Baker;Connor:Houston;Oscar:Huerta"));


//--------QUESTION 6-----------//
//Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.
// Input: 11/04/1982
// Output: 34
function calculateAge(MM,DD,YYYY){
    let today = new Date();

}

// console.log(calculateAge(11,4,1982));


// question 7-----Write a function to convert a string into an array of words//
/*
Input "Trick or Treat"
Output: ['Trick', 'or', 'Treat']
 */

function split(string){
    return string.split(" ");
}

//console.log(split("Trick or Treat"));

//-----------QUESTION 8---------//

// Write a function to count the number of occurrences of a substring in a given string.
//
//     Example:
//
//
// Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
// Output: 2

function countWrd(str, word){
    let newStr = str.toLowerCase();
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (newStr.includes(word)) {
            count++;
            newStr = newStr.replace(word, "");
        }
    }
    return count;
}

// console.log(countWrd("The pumpkin rolled down the hill and under someone's car.", "the"));

//----------QUESTION 9------------//
//Write a function to remove these special characters
// from a string: ~,!,$,&,%, ,#,@,-,_,^,? (yes, "space" is a character in that list)
// Input: "Happy ~!&$%#@- Halloween" | Output: "HappyHalloween"
// Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" | Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

function removeSpc(str){
    let splitUpStr = str.split("").join("");
    let spc = ["~", "!", "$", "&", "%", " ", "#", "@", "-", "_", "^", "?"];
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < spc.length; j++) {
            if (splitUpStr.includes(spc[j])){
                splitUpStr = splitUpStr.replace(spc[j], "");
            }
        }
    }
    return splitUpStr.split(" ").join(" ");
}

// console.log(removeSpc("Happy ~!&$%#@- Halloween"));
// console.log(removeSpc("I’ll bet living in a nudist-colony takes all the fun out of Halloween!!"));

//-----------QUESTION 10-------------//
//Write a function called "multiply" that takes two integers and returns the product. You are NOT
// allowed to use the * operator or any imported multiplication function. We will check your code.

function multiply(x, y) {
    let sum = 0;
    if (y < 0) {
        for (let i = 0; i > y; i--) {
            sum -= x;
        }
    } else {
        for (let i = 0; i < y; i++) {
            sum += x;
        }
    }
    return sum;
}
// console.log(multiply(5, 6));
// console.log(multiply(-2, -7));

//---------QUESTION 11---------//

// Write a function that takes a string and returns true if all of the characters are the same case, false otherwise.
//
//     Examples:
//
//
// Input: "hello world" | Output: true
// Input: "HELLO WORLD" | Output: true
// Input: "HeLLo wORld" | Output: false

function caseCheck(word){
    return (word.toUpperCase() === word || word.toLowerCase() === word);
}

// console.log(caseCheck("hello world"));
// console.log(caseCheck("HELLO WORLD"));
// console.log(caseCheck("HEllo worLD"));



// function addByEach(arr){
//     let bucket = [];
//     let added = 0;
//     bucket.push(arr[0]);
//     for(let i = 1; i < arr.length; i++){
//         for(let j = i; j >= 0; j--){
//             added += arr[j];
//             console.log("in loop: " + added);
//         }
//         console.log("out of loop: " + added);
//         bucket.push(added);
//         console.log("current bucket: " + bucket);
//     }
//     return bucket;
// }

function addByEach(arr){
    let bucket = [];
    let adder = 0;
    for(let i = 0; i < arr.length; i++){
        adder += arr[i];
        bucket.push(adder);
    }
    return bucket;
}

// console.log(addByEach([1, 1, 1]));//[1, 2, 3]
// console.log(addByEach([4, 2, 1, 3, 5]));//[4, 6, 7, 10, 15]






function isIsogram(word) {
    let wordArr = word.split("");
    for (let i = wordArr.length - 1; i > 0; i--) {
        let removed = wordArr.splice(i, 1);
        if(wordArr.indexOf(removed[0]) !== -1){
            return false;
        }
    }
    return true;
}

// console.log(isIsogram("fish"));//should be true
// console.log(isIsogram("food"));//should be false
// console.log(isIsogram("color"));//should be false



//--------QUESTION 14-----------//
// Write a function that takes a phone number with letters in it and converts it to one with only numbers.
//     All input phone numbers will follow this pattern: "###-###-####" (Hint: Search for "phone keypad")
//
//     Examples:
//
//
//         Input: 210-367-CODE | Output: 210-367-2633
// Input: TRY-THE-FOOD | Output: 879-843-3663

function makePhoneNum(input){
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let chars = "";
    let findLetter;
    for(let i = 0; i < input.length; i++) {
        findLetter = input[i];
    }
    for(let j = 0; j < nums.length; j++){
        if(findLetter !== nums[j]){
            chars+=findLetter;
        }
    }
    return chars;
}

// console.log(makePhoneNum("210367CODE"));
// console.log(makePhoneNum("TRYTHEFOOD"));

//--------QUESTION 15-----------//

// Write a function that returns all possible partitions of an array from left to right.
//     With an n amount of elements in the input the returned array should have n-1 subarrays.
//     An empty array should return an empty array.
//
//     Examples:
//
//
// Input: [1, 5, 3, 2] | Output: [[[1], [5, 3, 2]], [[1, 5], [3, 2]], [[1, 5, 3], [2]]]
// Input: [a, b, c] | Output: [[[a], [b, c]], [[a, b], [c]]]

function arrayTransform(arr){

}













