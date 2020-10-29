// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMult(x){
    let sum = 0;
    for(let i = 0; i < x; i++){
        if(i % 3 === 0){
            sum += i;
        } else if(i % 5 === 0){
            sum += i;
        } else {
            continue;
        }
    }
    return sum;
}

//console.log(sumOfMult(1000));

// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
//
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms

function evenFibSum(max){
    let count = 0;
    let fibArray = [1, 2, 3];
    for(let i = 0; count < max; i++){
        let n = fibArray.length - 1;
        let next = (fibArray[n]) + (fibArray[n - 1]);
        fibArray.push(next);
        let evenFibArray = fibArray.filter((a) => a % 2 === 0);
        count = evenFibArray.reduce((a, b) => a + b);
    }
    return count;
}

//console.log(evenFibSum(4000000));

// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?
// % op up through 10 in a for loop against the parameter to check where to start
// not giving correct answer for large nums, the 13195 does return the 29
function largestPrimeFactor(x){
    let output = [x];
    let remain;
    let base = 2;
    for(let i = base; i < 100; i++){
        if(x % i === 0){
            remain = x / i;
            output.push(i);
            output.push(remain);
            break;
        }
    }
    for(let j = base; j < remain; j++){
        if(remain % j === 0){
            remain /= j;
            output.push(j);
            output.push(remain);
            break;
        }
    }
    for(let k = base; k < remain; k++){
        if(remain % k === 0){
            remain /= k;
            output.push(k);
            output.push(remain);
            break;
        }
    }
    for(let l = base; l < remain; l++){
        if(remain % l === 0){
            remain /= l;
            output.push(l);
            output.push(remain);
            break;
        }
    }
    for(let m = base; m < remain; m++){
        if(remain % m === 0){
            remain /= m;
            output.push(m);
            output.push(remain);
            break;
        }
    }
    //return output;
    return output[output.length - 1];
}

// console.log(largestPrimeFactor(76)); //correct, 19
// console.log(largestPrimeFactor(13195));// correct, 29
// console.log(largestPrimeFactor(999));// correct 37
// console.log(largestPrimeFactor(6008514751143));//output 1010131 which is prime

// A palindromic number reads the same both ways. The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

// the problem here is the inner loop decrements too much, need them to basically decrement together
function largestPalindromeProduct3Digits(){
    let currentHighest;
    let currentHighest2;
    let highest;
    let compare;
    let compare2;
    for(let i = 100; i < 999; i++){
        for(let j = 999; j > 100; j--){
            currentHighest = i * j;
            compare = Number(currentHighest.toString().split("").reverse().join(""));
            if(currentHighest === compare){
                highest = currentHighest;
            }
        }
    }
    for(let a = 999; a > 100; a--){
        for(let b = 999; b > 100; b--){
            currentHighest2 = a * b;
            compare2  =  Number(currentHighest2.toString().split("").reverse().join(""));
            if(currentHighest2 === compare2 && currentHighest2 > highest){
                highest = currentHighest2;
            }
        }
    }
    return highest;
}
//add another highest variable to compare if the highest is
//higher than the other highest to just log it in an empty array
// return highest number from the array at the end
// current is the i * j
// new highest is the highest after it is palindrome
//console.log(largestPalindromeProduct3Digits());

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//1,2,3,4,5,6,7,8,9,10,12,14,15,16,18,20
// 16 --- 2, 4, 8, 16
// 15 --- 3, 5, 15
// 12 --- 3, 4, 6, 12
// 18 --- 2, 9, 18
// 20 --- 2, 4, 5, 10, 20
// 14 --- 7, 14, 2
// 11
// 13
// 17
// 19
function smallestNumDivisible(){
    for(let i = 1; i < 300000000; i++){
        if(i % 16 === 0 && i % 15 === 0 && i % 12 === 0 && i % 18 === 0 && i % 20 === 0 && i % 14 === 0 && i % 11 === 0 && i % 13 === 0 && i % 17 === 0 && i % 19 === 0){
            return i;
        }
    }
}
//232,792,560
//console.log(smallestNumDivisible());

// array of both square then sum and sum then square, use map and reduce and find difference
function sumSquareDifference(n){
    let sumSquare = [];
    let sumSqTotal;
    let squareSum = [];
    let squareSumTotal;
    for(let i = 0; i <= n; i++){
        sumSquare.push(i);
        squareSum.push(i);
    }
    sumSqTotal = sumSquare.reduce((a, b) => a + b);
    let totalSumSquare = Math.pow(sumSqTotal, 2);
    squareSumTotal = squareSum.map((x) => x * x);
    let totalSquareSum = squareSumTotal.reduce((a, b) => a + b);

    return totalSumSquare - totalSquareSum;
}
//25,164,150
//console.log(sumSquareDifference(100));

//The 1000 digit problem, create all 13 digit combos together, if any include a 0 then remove them from the list


// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
//                                                                             a2 + b2 = c2
//     For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.
// start empty array, push each prime into it to then reduce

function sumOfPrimes(x){
    let output = [];
    for(let i = 0; i < x; i++){

    }
    return output.reduce((a, b) => a + b);
}

//console.log(sumOfPrimes(10));

//trying to build something to run and check any number up to having 500 factors it is
//divisible by
function triangularNumber(x){
    let factors = 0;
    for(let i = 0; factors <= 500; i++){
        if(x % i === 0) {
            factors++;
        }
    }
}

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
//     If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//
//
//     NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23
//     letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is
//     in compliance with British usage.

function numToWords(num){
    // how tf do you do this???
}

function countLettersOfNums(max){
    let count = 0;
    for(let i = 1; i <= max; i++){
        if(i < 100){

        } else if(i < 200 && i > 99){
            //value is "one hundred and " w/e + the num % 100 as a numToWord as well
            // one hundred being 15 chars rather than using the word
        } else if(i < 300 && i > 299){

        } else if(i < 400 && i > 399){

        } else if(i < 500 && i > 499){

        } else if(i < 600 && i > 599){

        } else if(i < 700 && i > 699){

        } else if(i < 800 && i > 799){

        } else if(i < 900 && i > 899){

        } else if(i < 1000 && i > 900){

        }
        // add the one thousand here too
    }
    return count;
}


// The following iterative sequence is defined for the set of positive integers:
//
//     n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
//     13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
//     Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
//     NOTE: Once the chain starts the terms are allowed to go above one million.
//#14

//---------INFINITE LOOP----------//
function collatz(num){
    let count = 0;
    let highest = count;
    for(let i = 1; i < num; i++){
        while(i > 1){
            if(i % 2 === 0){
                i /= 2;
                console.log("even i: " + i);
            } else {
                i *= 3;
                i += 1;
                console.log("odd i: " + i);
            }
            count++;
        }
        if(count > highest){
            highest = i;
            console.log(highest);
        }
    }
    return highest;
}

// console.log(collatz(13));

//#29
function distinctPow(a, b, max, min){
    let output = [];
    for(let b = min; b <= max; b++){
        for(let a = min; a <= max; a++){
            output.push(a**b);
        }
    }
    let uniques = [...new Set(output)];
    return uniques.length;
}

// console.log(distinctPow(2, 2, 5, 2));
// console.log(distinctPow(2, 2, 100, 2));

//#30
function fifthPowerSum(x){
    let count = 0;
    let numSum = 0;
    let total = 0;
    for(let i = 2; count < 10; i++){
        let strNum = i.toString();
        let arrNum = strNum.split("");
        numSum = arrNum.map((ele) => ele**x).reduce((a, b) => a + b);
        if(i === numSum){
            console.log(arrNum);
            count++;
            total += numSum;
            console.log(numSum);
        }
    }
    return total;
}
//getting 194979
// console.log(fifthPowerSum(5));













